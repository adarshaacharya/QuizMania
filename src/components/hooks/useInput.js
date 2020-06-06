import { useState } from "react";

const useInput = () => {
  const [formData, setFormData] = useState("");

  const handleInput = (e) => {
    const { value } = e.target;
    setFormData(value);
  };

  return [formData, handleInput];
};

export default useInput;
