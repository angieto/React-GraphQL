import React from "react"
import "./form-input.scss"

const FormInput = ({ handleChange, label, ...otherProps }) => {
    const assignedClass = otherProps.value.length ? "shrink" : ""

    return (
        <div className="group">
            <input
                className="form-input"
                onChange={handleChange}
                {...otherProps}
            />
            {label && (
                <label className={`${assignedClass} form-input-label`}>
                    {label}
                </label>
            )}
        </div>
    )
}

export default FormInput
