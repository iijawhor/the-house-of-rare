import React from "react";
function Input({
  labelName,
  type,
  placeholder,
  value,
  onClick,
  onChange,
  className,
  name
}) {
  return (
    <div className="w-full flex gap-4 items-center text-center">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onClick={onClick}
        onChange={onChange}
        className={`flex p-2 border outline-none ${className}`}
        name={name}
      />
      <label
        htmlFor=""
        className="text-xs font-jost text-black font-base tracking-widest uppercase"
      >
        {labelName}
      </label>
    </div>
  );
}

export default Input;
