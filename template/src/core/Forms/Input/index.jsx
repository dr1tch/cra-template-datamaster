import React from "react";
import { Input, InputNumber as NumberInput } from "antd";
// import "./index.css";

export const InputText = ({
  placeholder,
  type = "text",
  onChange,
  isDisabled = false,
  ...rest
}) => {
  return (
    <Input
      className={`w-full rounded-md font-semibold border-[1.5px] px-3 py-2 focus:border-green-700`}
      allowClear
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      disabled={isDisabled}
      {...rest}
    />
  );
};

export const InputPassword = ({ placeholder, isDisabled = false, ...rest }) => {
  return (
    <Input.Password
      className={`w-full rounded-md font-semibold border-[1.5px] px-3 py-2 focus:border-green-700`}
      allowClear
      placeholder={placeholder}
      disabled={isDisabled}
      {...rest}
    />
  );
};

export const InputNumber = ({ isDisabled, placeholder, ...rest }) => {
  return (
    <NumberInput disabled={isDisabled} placeholder={placeholder} {...rest} />
  );
};
