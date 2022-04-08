import React from "react";
import { DatePicker as Calendrier } from "antd";
import moment from "moment";
import "./index.css";

const DatePicker = ({ placeholder, onChange, isDisabled = false, ...rest }) => {
  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().startOf("day");
  }
  return (
    <Calendrier
      {...rest}
      allowClear
      autoComplete="false"
      disabledDate={disabledDate}
      onChange={onChange}
      //   size="large"
      format="DD-MM-YYYY"
      placeholder={placeholder}
      style={{ width: "100%" }}
      disabled={isDisabled}
    />
  );
};
export default DatePicker;
