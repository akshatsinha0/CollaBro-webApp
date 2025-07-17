import React from "react";
import PropTypes from "prop-types";
import { classNames } from "../../../shared/utils";
import styles from "./Input.module.css";
const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  className,
  ...props
}) => {
  const inputClasses = classNames(
    styles.input,
    error && styles.error,
    disabled && styles.disabled,
    className,
  );
  return (
    <div className={styles.container}>
      <input
        type={type}
        className={inputClasses}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};
Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};
export default Input;
