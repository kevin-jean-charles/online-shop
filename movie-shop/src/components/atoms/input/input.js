import React from "react";

// import "./_input.scss";

const Input = ({
    reference,
    customClass,
    label,
    type,
    id,
    value,
    name,
    maxLength,
    minLength,
    placeholder,
    height,
    width,
    icon,
    onChangeMethod,
    onChangeParams,
    onClickMethod,
    onClickParams,
    isDisabled,
}) => {
    return (
        <div className={type === "radio" ? "box_input_radio" : "box_input"}>
            {label ? (
                <div className="box_label">
                    <label className="label mr-1" htmlFor={id}>
                        {label}
                    </label>
                </div>
            ) : null}
            <input
                ref={reference ? reference : null}
                className={customClass}
                style={
                    icon
                        ? {
                            height: height,
                            width: width,
                            backgroundImage: `url(${icon}`,
                        }
                        : { height: height, width: width }
                }
                id={id}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                maxLength={maxLength ? maxLength : null}
                minLength={minLength ? minLength : null}
                onChange={
                    onChangeMethod && onChangeParams
                        ? (e) => onChangeMethod(e, ...onChangeParams)
                        : onChangeMethod
                            ? (e) => onChangeMethod(e)
                            : null
                }
                onClick={
                    onClickMethod && onClickParams
                        ? (e) => onClickMethod(e, ...onClickParams)
                        : onClickMethod
                            ? (e) => onClickMethod(e)
                            : null
                }
                disabled={isDisabled ? isDisabled : false}
            />
        </div>
    );
};

export default Input;