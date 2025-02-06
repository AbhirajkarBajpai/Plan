"use client";
import { useState } from "react";
import AgeSelection from "./components/PageComp/AgeSelection";
import MemberSelection from "./components/PageComp/MemberSelection";
import { useFamily } from "./context/FamilyContext";
import CitySelector from "./components/PageComp/CitySelect";
import MedicalHistory from "./components/PageComp/MedicalHistory";

const FamilyPlanPage = () => {
  const { currentScreen } = useFamily();
  let content;

  switch (currentScreen) {
    case 1:
      content = <MemberSelection />;
      break;
    case 2:
      content = <AgeSelection />;
      break;
    case 3:
      content = <CitySelector />;
      break;
    case 4:
      content = <MedicalHistory />;
      break;
    default:
      content = (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white shadow-lg rounded-2xl p-6 max-w-sm text-center border border-gray-200">
            <svg
              className="w-16 h-16 text-green-500 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
              ></path>
            </svg>
            <h2 className="text-lg font-semibold text-gray-900">Thank You!</h2>
            <p className="text-gray-600 mt-2">
              Your data has been saved with us. Our team will contact you soon.
            </p>
          </div>
        </div>
      );
  }

  return <>{content}</>;
};

export default FamilyPlanPage;
