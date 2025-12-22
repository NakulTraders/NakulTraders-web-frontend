import React from "react";

const ButtonLoader = ({ size = 18, color = "white" }) => {
  return (
    <span
      className="inline-block animate-spin rounded-full border-2 border-solid border-current border-t-transparent"
      style={{
        width: size,
        height: size,
        color: color
      }}
    />
  );
};

export default ButtonLoader;
