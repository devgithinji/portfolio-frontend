import React, {useState} from 'react';
import {FaAngleDown, FaAngleUp} from "react-icons/fa";

const SelectInput = ({value,  multiselect = false, setValue, id, name, error, options}) => {
    const [isDropDownOpen, setDropDownOpen] = useState(false)

    const selectHandler = (e) => {
        const isChecked = e.target.checked
        const resultValue = e.target.value
        if (multiselect) {
            if (isChecked) {
                let newValue = [...value, resultValue];
                setValue(newValue)
            } else {
                let newValue = value.filter(val => val !== resultValue);
                setValue(newValue)
            }
        } else {
            if (isChecked) {
                setValue([resultValue])
            } else {
                setValue([])
            }
        }

    }

    return (
        <div className="form-item admin-form-item">
            <label htmlFor={id}>{name}</label>
            <div className="select-container">
                <div className="select-btn" onClick={() => setDropDownOpen(!isDropDownOpen)}>
                    Select Category
                    {isDropDownOpen ? <FaAngleUp/> : <FaAngleDown/>}
                </div>
                <div className={isDropDownOpen ? 'options-container active' : 'options-container'}>
                    {options.map(option => {
                        const isChecked = value.findIndex(val => val === option) !== -1;
                        return (
                            <div className="select-option" key={option}>
                                <input type="checkbox" id={option} value={option} onChange={selectHandler}
                                       checked={isChecked} className="checkbox"/>
                                <label htmlFor={option}>{option}</label>
                            </div>
                        )
                    })}
                </div>
            </div>
            {error && <span className="form-error">error</span>}
        </div>
    );
};

export default SelectInput;