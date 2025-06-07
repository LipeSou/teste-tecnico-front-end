"use client";

import { useEffect } from "react";

const AxeCore = () => {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      process.env.NODE_ENV !== "production"
    ) {
      Promise.all([
        import("@axe-core/react"),
        import("react-dom"),
        import("react"),
      ]).then(([axe, ReactDOM, ReactModule]) => {
        const React = ReactModule.default;
        axe.default(React, ReactDOM, 1000);
        console.log("%c[axe-core] Acessibilidade habilitada", "color: #0f0;");
      });
    }
  }, []);

  return null;
};

export default AxeCore;
