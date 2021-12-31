import { createContext, useContext, useState } from "react";

const InsertContext = createContext();

export const useInsertData = () => {
  return useContext(InsertContext);
};

function DataInsertProvider({ children }) {
  const [isInsertForm, setIsInsertForm] = useState(false);

  const insertFormHandler = () => {
    setIsInsertForm(!isInsertForm);
  };

  let value = { insertFormHandler, isInsertForm };

  return (
    <InsertContext.Provider value={value}>{children}</InsertContext.Provider>
  );
}

export default DataInsertProvider;
