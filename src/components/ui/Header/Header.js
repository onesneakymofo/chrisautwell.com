import React from "react";
import classnames from "classnames";
import styles from "./style";

const Header = ({ size, className, children }) => {
  const headerMap = {
    xl: "h1",
    lg: "h2",
    md: "h3",
    sm: "h4",
    xs: "h5",
  };

  const classObject = {
    [styles.className[size]]: true,
    [className]: true
  };

  const HeaderTag = headerMap[size];
  return <HeaderTag className={classnames(classObject)}>{children}</HeaderTag>;
};

export {Header};
