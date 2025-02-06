"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const FamilyContext = createContext();

export const FamilyProvider = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [gender, setGender] = useState("");
  const [userCity,setUserCity] = useState('Bangalore')
  const [selectedMembers, setSelectedMembers] = useState(["Self"]);
  const [membersAge, setMembersAge] = useState([
    {id: '1', member: 'Self', age: ''}]);
  const [isAllAgeSet, setIsAllAgeSet] = useState(false);
  const toggleMember = (memberId) => {
    const toggleKey = membersAge.some(member => member.member === memberId);
    console.log(toggleKey);
    setSelectedMembers((prev) =>
      prev.includes(memberId)
        ? prev.filter((id) => id !== memberId)
        : [...prev, memberId]
    );
    if (!toggleKey) {
      const newMemberAge = {
        id: Date.now().toString(),
        member: memberId,
        age: "",
      };
      setMembersAge([...membersAge, newMemberAge]);
    } else {
      setMembersAge(membersAge.filter(membersAge => membersAge.member !== memberId))
    }
  };

  useEffect(()=>{
    const allAgesAreNumbers = membersAge.every(
      (m) => m.age !== ''
    );
    setIsAllAgeSet(allAgesAreNumbers);
  },[membersAge]);

  function moveNext() {
    setCurrentScreen(currentScreen + 1);
  }
  function movePrev() {
    setCurrentScreen(currentScreen - 1);
  }


  return (
    <FamilyContext.Provider
      value={{
        selectedMembers,
        setSelectedMembers,
        toggleMember,
        currentScreen,
        moveNext,
        movePrev,
        gender,
        setGender,
        membersAge, 
        setMembersAge,
        userCity,
        setUserCity,
        isAllAgeSet, 
        setIsAllAgeSet,
      }}
    >
      {children}
    </FamilyContext.Provider>
  );
};

export const useFamily = () => useContext(FamilyContext);
