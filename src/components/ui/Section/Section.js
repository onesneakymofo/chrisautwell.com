import React from "react";
import classnames from "classnames";

const Section = ({ className, children }) => {
  
  const defaultClass = 'text-gray-800 p-2 rounded-lg';

  const classObject = {
    [defaultClass]: true,
    [className]: true
  };

  return <section className={classnames(classObject)}>{children}</section>;
};

export {Section};
