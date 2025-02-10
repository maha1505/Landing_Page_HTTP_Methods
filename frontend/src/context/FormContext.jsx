import React, { createContext, useState } from "react";

// Create Context
export const FormContext = createContext();

// Provider Component
export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState([]);

  const addFormData = (data) => {
    setFormData((prevData) => [...prevData, data]);
  };

  return (
    <FormContext.Provider value={{ formData, addFormData }}>
      {children}
    </FormContext.Provider>
  );
};
