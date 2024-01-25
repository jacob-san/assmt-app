import React, {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
} from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  setAuthenticated: (val: boolean) => void;
  country: string | undefined;
  setCountry: (val: string) => void;
  lang: string | undefined;
  setLang: (val: string) => void;
}

const AuthContext = createContext({
  isAuthenticated: false,
  setAuthenticated: (val: boolean) => {},
  country: '',
  setCountry: (val: string) => {},
  lang: '',
  setLang: (val: string) => {},
});

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
  const [country, setCountry] = useState<string>('');
  const [lang, setLang] = useState<string>('');

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setAuthenticated,
        country,
        setCountry,
        lang,
        setLang,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
