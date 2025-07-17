import React from "react";
import PropTypes from "prop-types";
import { classNames } from "../../../shared/utils";
import styles from "./Button.module.css";
const Button = ({
  variant = "primary",
  size = "md",
  disabled = false,
  children,
  onClick,
  type = "button",
  className,
  ...props
}) => {
  const buttonClasses = classNames(
    styles.button,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
    className,
  );
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "outline", "ghost"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
};
export default Button;
