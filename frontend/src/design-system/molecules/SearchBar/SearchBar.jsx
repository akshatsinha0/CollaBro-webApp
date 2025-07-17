import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";
import { Input } from "../../atoms";
import { debounce } from "../../../shared/utils";
import styles from "./SearchBar.module.css";
const SearchBar = ({
  placeholder = "Search...",
  onSearch,
  delay = 300,
  className,
}) => {
  const [value, setValue] = useState("");
  const debouncedSearch = useCallback(
    debounce((searchTerm) => {
      onSearch?.(searchTerm);
    }, delay),
    [onSearch, delay],
  );
  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    debouncedSearch(newValue);
  };
  return (
    <div className={`${styles.container} ${className || ""}`}>
      <FaSearch className={styles.icon} />
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={styles.input}
      />
    </div>
  );
};
SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func,
  delay: PropTypes.number,
  className: PropTypes.string,
};
export default SearchBar;
