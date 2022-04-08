import React from "react";
import { Input } from "antd";
import "./index.css";

const TextArea = ({
  maxLength,
  placeholder,
  onChange,
  isDisabled = false,
  ...rest
}) => {
  return (
    <Input.TextArea
      allowClear
      showCount={!!maxLength}
      autoSize
      maxLength={maxLength}
      //   className={`w-full rounded-md font-semibold border-[1.5px] px-3 py-2 focus:border-green-700`}
      placeholder={placeholder}
      onChange={onChange}
      disabled={isDisabled}
      {...rest}
    />
  );
};
export default TextArea;
