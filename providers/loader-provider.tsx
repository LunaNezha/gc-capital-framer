"use client";

import React, { createContext, useContext, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";

type LoaderContextProps = {
  showLoader: (message?: string) => void;
  hideLoader: () => void;
  message: string;
};

const defaultContextValue: LoaderContextProps = {
  showLoader: (message?: string) => {},
  hideLoader: () => {},
  message: "Loading...",
};

type LoaderProviderProps = {
  children: React.ReactNode;
};

const LoaderContext = createContext<LoaderContextProps>(defaultContextValue);

export const LoaderProvider = ({ children }: LoaderProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const showLoader = (message: string = "") => {
    setMessage(message);
    setIsLoading(true);
  };

  const hideLoader = () => {
    setIsLoading(false);
    setMessage("");
  };

  const contextValue: LoaderContextProps = {
    showLoader,
    hideLoader,
    message,
  };

  return (
    <LoaderContext.Provider value={contextValue}>
      {isLoading && (
        <div className="loader-wrapper">
          <div>
            <InfinitySpin color="#6366f1" />
            <span>{message}</span>
          </div>
        </div>
      )}
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = (): LoaderContextProps => {
  const context = useContext(LoaderContext);

  if (!context) {
    throw new Error("useLoader must be used within a LoaderProvider");
  }

  return context;
};
