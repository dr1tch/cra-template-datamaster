import { Form as Formulaire } from "antd";
import React from "react";
import "./style.css";

const Form = ({
  initialValues,
  onChange,
  onFinish,
  fields,
  onFieldsChange,
  onFinishFailed,
  children,
  name,
  ...rest
}) => {
  return (
    <Formulaire
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24,
      }}
      initialValues={initialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="on"
      layout="vertical"
      requiredMark={false}
      scrollToFirstError={true}
      labelWrap
      fields={fields}
      {...rest}
      name={name}
    >
      <div className="flex flex-col gap-1">{children}</div>
    </Formulaire>
  );
};
export default Form;
