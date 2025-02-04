"use client"
import React, { createContext, useContext, useState } from 'react';

const FamilyContext = createContext();

export const FamilyProvider = ({ children }) => {
  const [selectedMembers, setSelectedMembers] = useState(["self"]);
  const [gender, setGender] = useState('');
  const [currentScreen, setCurrentScreen] = useState(1);

  const toggleMember = (member) => {
    setSelectedMembers((prev) =>
      prev.includes(member) ? prev.filter((m) => m !== member) : [...prev, member]
    );
  };

  function moveNext(){
    setCurrentScreen(currentScreen+1);
  }
  function movePrev(){
    setCurrentScreen(currentScreen-1);
  }

  // const addChild = (type) => {
  //   setFamilyAges((prev) => ({ ...prev, [type + Object.keys(prev).length]: '' }));
  // };

  // const removeChild = (key) => {
  //   setFamilyAges((prev) => {
  //     const updated = { ...prev };
  //     delete updated[key];
  //     return updated;
  //   });
  // };

  return (
    <FamilyContext.Provider value={{
      selectedMembers, setSelectedMembers, toggleMember,
       currentScreen,moveNext,movePrev,gender, setGender
    }}>
      {children}
    </FamilyContext.Provider>
  );
};

export const useFamily = () => useContext(FamilyContext);