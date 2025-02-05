"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useFamily } from "../context/FamilyContext";
import { showAlertFn } from "../GlobalAlert";

// Utility function to conditionally join classNames
const cn = (...classes) => classes.filter(Boolean).join(" ");

export default function InsuranceSelector() {
  const { moveNext, gender, setGender, selectedMembers, toggleMember } =
    useFamily();
  const [showAllMembers, setShowAllMembers] = useState(false);

  const Members = [
    { id: "self", label: "Self", icon: User },
    { id: "wife", label: "Wife", icon: User },
    { id: "son", label: "Son", icon: User },
    { id: "daughter", label: "Daughter", icon: User },
    { id: "father", label: "Father", icon: User },
    { id: "mother", label: "Mother", icon: User },
  ];

  const additionalMembers = [
    { id: "brother", label: "Brother", icon: User },
    { id: "sister", label: "Sister", icon: User },
    { id: "grandfather", label: "Grandfather", icon: User },
    { id: "grandmother", label: "Grandmother", icon: User },
  ];

  const members = showAllMembers
    ? [...Members, ...additionalMembers]
    : Members;


  const toggleShowAllMembers = () => {
    setShowAllMembers((prev) => !prev);
  };

  function handleContinue() {
    if (!gender || selectedMembers.length === 0) {
      showAlertFn("error",!gender && selectedMembers.length === 0 
        ? "Select Members and Gender" 
        : !gender 
          ? "Select Gender!" 
          : "Select Members"
      );
      return;
    }
    moveNext();
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col space-y-10 items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-center text-gray-900">
          Find the best plan for your family
        </h1>
      <div className="max-w-2xl w-full space-y-8 bg-white p-8 rounded-xl shadow-sm">
        <div className="flex justify-center gap-2">
          <Button
            variant={gender === "male" ? "default" : "outline"}
            onClick={() => setGender("male")}
            className="w-24"
          >
            Male
          </Button>
          <Button
            variant={gender === "female" ? "default" : "outline"}
            onClick={() => setGender("female")}
            className="w-24"
          >
            Female
          </Button>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Select members you want to insure
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {members.map((member) => {
              const Icon = member.icon;
              return (
                <Card
                  key={member.id}
                  className={cn(
                    "p-4 cursor-pointer transition-colors",
                    selectedMembers.includes(member.label)
                      ? "bg-blue-50 border-blue-200"
                      : "hover:bg-gray-50"
                  )}
                  onClick={() => toggleMember(member.label)}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-gray-500" />
                    <span className="font-medium text-gray-900">
                      {member.label}
                    </span>
                  </div>
                </Card>
              );
            })}
          </div>

          <Button
            variant="ghost"
            className="w-full"
            onClick={toggleShowAllMembers}
          >
            {showAllMembers ? "See less" : "More members"}
            {showAllMembers ? (
              <ChevronUp className="ml-2 h-4 w-4" />
            ) : (
              <ChevronDown className="ml-2 h-4 w-4" />
            )}
          </Button>
        </div>

        <div className="space-y-4">
          <Button className="w-full py-6 text-lg" onClick={handleContinue}>
            Continue
          </Button>

          <p className="text-center text-sm text-gray-500">
            By clicking on "Continue", you agree to our{" "}
            <a href="#" className="text-primary font-semibold hover:underline">
              Privacy Policy
            </a>
            ,{" "}
            <a href="#" className="text-primary font-semibold hover:underline">
              Terms of Use
            </a>{" "}
            &{" "}
            <a href="#" className="text-primary font-semibold hover:underline">
              Disclaimer
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
