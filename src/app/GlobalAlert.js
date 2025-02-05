"use client"
import { useState, useEffect } from "react";

let showAlertFn = () => {};

const GlobalAlert = () => {
  const [alert, setAlert] = useState({ type: "", message: "", visible: false });

  useEffect(() => {
    showAlertFn = (type, message, duration = 2000) => {
      setAlert({ type, message, visible: true });
      setTimeout(() => {
        setAlert({ type, message, visible: false });
      }, duration);
    };
  }, []);

  if (!alert.visible) return null;

  return (
    <div
      className={`fixed top-10 left-10 px-4 py-2 text-white rounded-md shadow-lg transition-all duration-300 
        ${alert.type === "success" ? "bg-green-500" : ""}
        ${alert.type === "error" ? "bg-red-500" : ""}
        ${alert.type === "warning" ? "bg-yellow-500" : ""}
        ${alert.type === "info" ? "bg-blue-500" : ""}`}
    >
      {alert.message}
    </div>
  );
};

export { showAlertFn }; 
export default GlobalAlert;
