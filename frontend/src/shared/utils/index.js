export const formatUsername = (fullName) =>
  fullName?.replace(/\s+/g, "").toLowerCase() || "";
export const getInitials = (name) =>
  name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase() || "";
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};
export const classNames = (...classes) => classes.filter(Boolean).join(" ");
