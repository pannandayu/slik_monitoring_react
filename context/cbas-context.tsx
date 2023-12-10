import React, { ReactNode, useState } from "react";

interface CBASContextInterface {
  isError: boolean | null;
  errorMessage: string | null;
  errorHandler: (state: boolean, message: string | null) => void;
}

const CBASContext = React.createContext<CBASContextInterface>({
  isError: null,
  errorMessage: null,
  errorHandler: (state, message) => {},
});

export default CBASContext;

export const CBASContextProvider: React.FC<{ children?: ReactNode }> = ({
  children,
}) => {
  const [isError, setIsError] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const errorHandler = (state: boolean, message: string | null) => {
    setIsError(state);
    setErrorMessage(message);
  };

  return (
    <CBASContext.Provider
      value={{
        isError,
        errorMessage,
        errorHandler,
      }}
    >
      {children}
    </CBASContext.Provider>
  );
};
