"use client";

import { SnackbarProvider, closeSnackbar } from "notistack";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ToastProvider = ({ children }: Props) => {
  return (
    <SnackbarProvider
      dense
      preventDuplicate
      maxSnack={3}
      autoHideDuration={2000}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      action={(id) => (
        <button className="close-button" onClick={() => closeSnackbar(id)}>
          Close
        </button>
      )}
      iconVariant={{
        success: (
          <i className="fi fi-sr-check-circle text-lg text-emerald-400"></i>
        ),
        error: <i className="fi fi-sr-cross-circle text-lg text-rose-400"></i>,
        warning: (
          <i className="fi fi-sr-triangle-warning text-lg text-orange-400"></i>
        ),
        info: <i className="fi fi-sr-info text-lg text-blue-400"></i>,
      }}
    >
      {children}
    </SnackbarProvider>
  );
};

export default ToastProvider;
