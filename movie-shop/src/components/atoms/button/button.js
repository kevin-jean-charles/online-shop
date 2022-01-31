import React from "react";

// import "./_button.scss";

const Button = ({
  reference,
  label,
  height,
  width,
  icon,
  customClass,
  isDisabled,
  onClickMethod,
  onClickParams,
}) => {
  return (
    <button
      ref={reference ? reference : null}
      style={{ height: height, width: width }}
      className={customClass}
      onClick={
        onClickMethod && onClickParams
          ? (e) => onClickMethod(e, ...onClickParams)
          : onClickMethod
          ? (e) => onClickMethod(e)
          : null
      }
      disabled={isDisabled ? isDisabled : null}
    >
      <span>
        {label}
        {icon ? <img src={icon} alt="icon" /> : null}
      </span>
    </button>
  );
};
export default Button;