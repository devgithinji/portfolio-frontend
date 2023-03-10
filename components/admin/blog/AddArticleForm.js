import React, {useEffect, useRef, useState} from 'react';
import FormInput from "../general/FormInput";
import SelectInput from "../general/SelectInput";
import {useRouter} from "next/router";
import {useAppContext} from "../../../context/appContext";
import Editor from "react-markdown-editor-lite";
import MarkdownIt from "markdown-it";
import {toast} from "react-toastify";
import emoji from 'markdown-it-emoji'
import subscript from 'markdown-it-sub'
import superscript from 'markdown-it-sup'
import footnote from 'markdown-it-footnote'
import deflist from 'markdown-it-deflist'
import abbreviation from 'markdown-it-abbr'
import insert from 'markdown-it-ins'
import mark from 'markdown-it-mark'
import tasklists from 'markdown-it-task-lists'
import hljs from "highlight.js";
import FileInput from "../general/FileInput";


const AddArticleForm = () => {
    const {
        getCategories,
        categories,
        setFormError,
        errors,
        isFormLoading,
        isPageLoading,
        addPost,
        updatePost,
        getPost,
        post,
        uploadImage,
        deleteImage,
        resetPost
    } = useAppContext();

    let mdEditor;
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState([]);
    const [content, setContent] = useState('')
    const [image, setImage] = useState('')
    const [existingFile, setExistingFile] = useState('')
    const [isEditing, setIsEditing] = useState(false);
    // Initialize a mark down parser
    const mdParser = new MarkdownIt({
        html: true, linkify: true, typographer: true, highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(lang, str).value
                } catch (__) {
                }
            }
            return '' // use external default escaping
        }
    })
        .use(emoji)
        .use(subscript)
        .use(superscript)
        .use(footnote)
        .use(deflist)
        .use(abbreviation)
        .use(insert)
        .use(mark)
        .use(tasklists)
    const postIdRef = useRef();
    const contentRef = useRef();


    useEffect(() => {
        getCategories()
        const handleRouteChange = (url, {shallow}) => {
            resetPost();
        }
        router.events.on('routeChangeStart', handleRouteChange)

        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [])


    useEffect(() => {
        const articleId = router.query.articleId;
        if (articleId) {
            setIsEditing(true);
            getPost(articleId);
        }
    }, [router])

    useEffect(() => {
        if (post && isEditing) {
            setTitle(post.title)
            const tag = post.tag ? post.tag.name : null;
            if (tag) {
                setTags([tag])
            }
            setContent(post.content ? post.content : '')
            postIdRef.current = post.id
            setExistingFile(post.image)
        }
    }, [post])


    const validateForm = () => {
        if (!title) {
            setFormError({title: 'title is required'})
            return false;
        }

        if (!tags[0]) {
            setFormError({category: 'category is required'})
            return false;
        }

        if (isEditing) {
            const articleContent = mdEditor.getMdValue();
            if (!articleContent) {
                setFormError({content: 'content is required'})
                return false;
            }
        }

        return true;
    }

    const handleChange = ({html, md}) => {
        setContent(md);
        contentRef.current = md
    }


    const onImageUpload = async (file, callback) => {
        const formData = new FormData();
        formData.append("postId", postIdRef.current)
        formData.append("image", file);
        const result = await uploadImage(formData);
        callback(result)
    }

    const deleteImg = (imageId) => {
        deleteImage(imageId)
    }

    const copyImage = async (imagepath) => {
        try {
            await navigator.clipboard.writeText(imagepath);
            toast('Image link copied')
        } catch (e) {
            toast.error('Image link not copied')
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid = validateForm();

        if (!isValid) return;

        const formData = new FormData();
        formData.append("title", title)
        formData.append("tag", tags[0])
        if (image) {
            formData.append("image", image)
        }
        if (isEditing) {
            const articleContent = mdEditor.getMdValue();
            formData.append("content", articleContent)
            updatePost(formData, postIdRef.current)
        } else {
            addPost(formData);
        }
    }

    return (<div className="admin-section card">
        <form className="form-container" action="" onSubmit={handleSubmit}>
            <div className="inputs-container">
                <FormInput value={title} setValue={setTitle} placeholder='Title' id='title' name='Title'
                           error={errors.title}/>
                <SelectInput type="select" value={tags} setValue={setTags} id='category' options={categories}
                             name='Category' error={errors.category} multiselect={false}/>
                <FileInput name="Image" setValue={setImage} value={image} id="image" error={errors.image}
                           existingFile={existingFile}/>
                {isEditing && (<div className="blog-input">
                    <label htmlFor="content">Article Content</label>
                    {post && (<div className="images-list">
                        <div>Images</div>
                        {post.images && post.images.map(image => {
                            return (<div key={image.id} className="image-item">
                                <img onClick={() => copyImage(image.path)} src={image.path} alt=""
                                     className="article-img"/>
                                <button type="button" className="admin-btn admin-btn-accent"
                                        onClick={() => deleteImg(image.id)}>delete
                                </button>
                            </div>)
                        })}
                    </div>)}
                    <Editor
                        ref={node => mdEditor = node}
                        style={{
                            minHeight: "500px"
                        }}
                        config={{
                            view: {
                                menu: true, md: true, html: false
                            }
                        }}
                        onImageUpload={onImageUpload}
                        onChange={handleChange}
                        value={content}
                        renderHTML={text => mdParser.render(text)}
                    />
                    {errors && <span className="form-error">{errors.content}</span>}
                </div>)}
            </div>
            <button type="submit" className="form-btn"
                    disabled={isFormLoading}>
                {isFormLoading ? 'Please wait...' : isEditing ? 'Edit Article' : 'Add Article'}
            </button>
        </form>
    </div>);
};

export default AddArticleForm;