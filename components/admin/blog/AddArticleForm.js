import React, {useEffect, useRef, useState} from 'react';
import FormInput from "../general/FormInput";
import SelectInput from "../general/SelectInput";
import {useRouter} from "next/router";
import {useAppContext} from "../../../context/appContext";
import Editor from "react-markdown-editor-lite";
import ReactMarkdown from "react-markdown";
import MarkdownIt from "markdown-it";
import {FaTrash} from "react-icons/fa";
import {toast} from "react-toastify";


const AddArticleForm = () => {
    const {
        getCategories,
        categories,
        setFormError,
        errors,
        isFormLoading,
        isPageLoading,
        addPost,
        getPost,
        post,
        uploadImage,
        deleteImage
    } = useAppContext();

    const mdEditor = useRef(null);
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState([]);
    const [content, setContent] = useState('')
    const [isEditing, setIsEditing] = useState(false);
    // Initialize a markdown parser
    const mdParser = new MarkdownIt(/* Markdown-it options */);
    const postIdRef = useRef();


    useEffect(() => {
        getCategories()
    }, [])


    useEffect(() => {
        const articleId = router.query.articleId;
        if (articleId) {
            setIsEditing(true);
            getPost(articleId);
        }
    }, [router])

    useEffect(() => {
        if (post) {
            setTitle(post.title)
            setTags(post.tag.name)
            setContent(post.content ? post.content : '')
            postIdRef.current = post.id
        }
    }, [post])


    const validateForm = () => {
        if (!title) {
            setFormError({title: 'title is required'})
            return false;
        }

        if (!tags[0]) {
            setFormError({title: 'category is required'})
            return false;
        }

        return true;
    }

    const handleChange = ({html, md}) => {
        setContent(md);
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
        if (isValid) {
            addPost({title, tag: tags[0]});
        }
    }

    return (
        <div className="admin-section card">
            <form className="form-container" action="" onSubmit={handleSubmit}>
                <div className="inputs-container">
                    <FormInput value={title} setValue={setTitle} placeholder='Title' id='title' name='Title'
                               error={errors.title}/>
                    <SelectInput type="select" value={tags} setValue={setTags} id='category' options={categories}
                                 name='Category' error={errors.category} multiselect={false}/>
                    {isEditing &&
                        (
                            <div className="blog-input">
                                <label htmlFor="content">Article Content</label>
                                {post && (
                                    <div className="images-list">
                                        <div>Images</div>
                                        {post.images && post.images.map(image => {
                                            return (
                                                <div key={image.id} className="image-item">
                                                    <img onClick={() => copyImage(image.path)} src={image.path} alt=""
                                                         className="article-img"/>
                                                    <button type="button" className="admin-btn admin-btn-accent"
                                                            onClick={() => deleteImg(image.id)}>delete
                                                    </button>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                                }
                                <Editor
                                    ref={mdEditor}
                                    style={{
                                        minHeight: "500px"
                                    }}
                                    config={{
                                        view: {
                                            menu: true,
                                            md: true,
                                            html: false
                                        }
                                    }}
                                    onImageUpload={onImageUpload}
                                    onChange={handleChange}
                                    value={content}
                                    renderHTML={(text) => mdParser.render(text)}
                                />
                            </div>
                        )
                    }
                </div>
                <button type="submit" className="form-btn"
                        disabled={isFormLoading}>
                    {isFormLoading ? 'Please wait...' : isEditing ? 'Edit Article' : 'Add Article'}
                </button>
            </form>
        </div>
    );
};

export default AddArticleForm;