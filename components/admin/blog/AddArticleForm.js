import React, {useEffect, useState} from 'react';
import FormInput from "../general/FormInput";
import SelectInput from "../general/SelectInput";
import dynamic from "next/dynamic";
import MarkdownIt from 'markdown-it';

const AddArticleForm = () => {
    const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
        ssr: false,
    });
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState([]);
    const [errors, setErrors] = useState({})
    const [isLoading, setLoading] = useState(false);
    const options = ["option one", "option two", "option three", "option four"]

    const mdParser = new MarkdownIt(/* Markdown-it options */);

    const handleEditorChange = ({html, text}) => {
        console.log('handleEditorChange', html, text);
    };

    return (
        <div className="admin-section card">
            <form className="form-container" action="">
                <div className="inputs-container">
                    <FormInput value={title} setValue={setTitle} placeholder='Title' id='title' name='title'
                               error={errors.name}/>
                    <SelectInput type="select" value={tags} setValue={setTags} id='category' options={options}
                                 name='Category' error={errors.category} multiselect={false}/>
                    <div className="form-item admin-form-item blog-input">
                        <label htmlFor="content">Article Content</label>
                        <MdEditor style={{height: '500px'}} renderHTML={text => mdParser.render(text)}
                                  onChange={handleEditorChange}/>
                    </div>
                </div>
                <button type="submit" className="form-btn"
                        disabled={isLoading}>
                    {isLoading ? 'Please wait...' : 'Add Article'}
                </button>
            </form>
        </div>
    );
};

export default AddArticleForm;