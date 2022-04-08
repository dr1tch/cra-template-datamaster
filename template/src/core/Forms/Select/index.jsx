import { Select as Selectionner } from "antd";
import React from "react";
import "./index.css";
const { Option } = Selectionner;

const Select = ({
  placeholder,
  options,
  isDisabled = false,
  onChange,
  ...rest
}) => {
  return (
    <Selectionner
      className={`w-full text-gray-900`}
      onChange={onChange}
      disabled={isDisabled}
      placeholder={placeholder}
      allowClear
      {...rest}
    >
      {options.length > 0 &&
        options.map((op, idx) => {
          return (
            <Option key={idx} value={op.value}>
              {op.title}
            </Option>
          );
        })}
    </Selectionner>
  );
};

export default Select;
