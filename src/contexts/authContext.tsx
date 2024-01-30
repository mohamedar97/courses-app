"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface UserData {
  fullName: string;
  id: string;
}
interface authContextProps {
  user: UserData | null;
  setUsername: React.Dispatch<React.SetStateAction<UserData | null>>;
}

const AuthContext = createContext<authContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUsername] = useState<UserData | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUsername }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }
  return context;
};
