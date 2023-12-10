import React, { ReactNode, useState } from "react";

interface AuthContextInterface {
  isAuth: boolean | null;
  authHandler: (state: boolean) => void;
}

const AuthContext = React.createContext<AuthContextInterface>({
  isAuth: null,
  authHandler: (state) => {},
});

export default AuthContext;

export const AuthContextProvider: React.FC<{ children?: ReactNode }> = ({
  children,
}) => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  const authHandler = (state: boolean) => {
    setIsAuth(state);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        authHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
