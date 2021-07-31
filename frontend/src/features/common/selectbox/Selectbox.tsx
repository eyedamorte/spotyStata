import React, { FC } from "react";
import { Input } from "antd";

interface CustomSelectboxProps {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  style: React.CSSProperties;
  placeholder: string;
}

const CustomSelectbox: FC<CustomSelectboxProps> = ({
  onChange,
  style,
  placeholder,
}) => {
  return <Input placeholder={placeholder} {...{ onChange, style }} />;
};

export default CustomSelectbox;
