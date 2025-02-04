"use client"
import React, { createContext, useContext, useState } from 'react';

const FamilyContext = createContext();

export const FamilyProvider = ({ children }) => {
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [familyAges, setFamilyAges] = useState({});
  const [showMore, setShowMore] = useState(false);
  const [currentScreen, setCurrentScreen] = useState(1);

  const toggleMember = (member) => {
    setSelectedMembers((prev) =>
      prev.includes(member) ? prev.filter((m) => m !== member) : [...prev, member]
    );
  };

  const addChild = (type) => {
    setFamilyAges((prev) => ({ ...prev, [type + Object.keys(prev).length]: '' }));
  };

  const removeChild = (key) => {
    setFamilyAges((prev) => {
      const updated = { ...prev };
      delete updated[key];
      return updated;
    });
  };

  return (
    <FamilyContext.Provider value={{
      selectedMembers, toggleMember, familyAges, setFamilyAges, addChild, removeChild,
      showMore, setShowMore, currentScreen, setCurrentScreen
    }}>
      {children}
    </FamilyContext.Provider>
  );
};

export const useFamily = () => useContext(FamilyContext);