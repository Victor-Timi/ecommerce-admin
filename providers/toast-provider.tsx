"use client";

import { Toaster } from "react-hot-toast";

import React from "react";

const ToasterProvider = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          backgroundColor: "#333333",
          color: "#FFFFFF",
          borderRadius: "1px",
        },
      }}
    />
  );
};

export default ToasterProvider;
