"use client";
import { useState } from "react";
import AgeSelection from "./components/AgeSelection";
import MemberSelection from "./components/MemberSelection";
import { useFamily } from "./context/FamilyContext";
import CitySelector from "./components/CitySelect";
import MedicalHistory from "./components/MedicalHistory";

const FamilyPlanPage = () => {
  const [index, setIndex] = useState(4);
  let content;

  switch (index) {
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
      content = <>Loading...</>;
  }

  return <>{content}</>;
};

export default FamilyPlanPage;
