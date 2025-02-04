"use client";

import React, { useEffect} from "react";
import { ChevronLeft, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFamily } from "../context/FamilyContext";

function FamilyMemberSelector() {
  const {
    movePrev,
    moveNext,
    membersAge,
    setMembersAge,
    isAllAgeSet,
  } = useFamily();
  const multiList = ["Son", "Daughter", "Brother", "Sister"];
  useEffect(() => {
    console.log(membersAge);
  }, []);

  const addMember = (memberId) => {
    const newMemberAge = {
      id: Date.now().toString(),
      member: memberId,
      age: "",
    };
    setMembersAge([...membersAge, newMemberAge]);
  };

  const removeMember = (memberId) => {
    setMembersAge(
      membersAge.filter((membersAge) => membersAge.id !== memberId)
    );
  };

  const updateAge = (id, age) => {
    setMembersAge(
      membersAge.map((member) =>
        member.id === id ? { ...member, age: age } : member
      )
    );
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <div className="flex items-center mb-6">
        <Button variant="ghost" className="mr-2" onClick={movePrev}>
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-semibold">
          Select age of covered member(s)
        </h1>
      </div>

      <div className="space-y-6">
        {membersAge.map((member, index) => {
          const firstOccurrenceId = membersAge.find(
            (m) => m.member === member.member
          )?.id;
          return (
            <div key={index} className="flex items-center gap-4">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-pink-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>

              <div className="flex-1">
                <label className="block text-sm mb-1">
                  {member.member === "Self" ? "Your" : `${member.member}'s`} age
                </label>
                <Select
                  value={member.age}
                  onValueChange={(age) => updateAge(member.id, age)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select age" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 83 }, (_, i) => i + 18).map((age) => (
                      <SelectItem key={age} value={age.toString()}>
                        {age} yr
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-2">
                {multiList.includes(member.member) && (
                  <>
                    {firstOccurrenceId != member.id && (
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => removeMember(member.id)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    )}
                    {true && (
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => addMember(member.member)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    )}
                  </>
                )}
              </div>
            </div>
          );
        })}
        <Button
          onClick={()=>{isAllAgeSet ? moveNext() : alert("select all members age!")}}
          className="w-full bg-black text-white hover:bg-gray-800"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

export default FamilyMemberSelector;
