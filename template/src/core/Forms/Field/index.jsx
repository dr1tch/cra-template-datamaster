import FormItem from "antd/lib/form/FormItem";
import React from "react";
import "./style.css";

const Field = ({
  name,
  label,
  // isRequired,
  children,
  rules,
  hasFeedback = false,
  ...rest
}) => {
  return (
    <FormItem
      name={name}
      label={label}
      rules={rules}
      hasFeedback={hasFeedback}
      {...rest}
    >
      {children}
    </FormItem>
  );
};
export default Field;
