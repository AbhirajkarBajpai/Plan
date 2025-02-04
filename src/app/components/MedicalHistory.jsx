"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, LightbulbIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { useFamily } from "../context/FamilyContext"

function MedicalHistory() {
  const {moveNext,movePrev}=useFamily();
  const [conditions, setConditions] = useState({
    diabetes: false,
    bloodPressure: false,
    heartDisease: false,
    anySurgery: false,
    thyroid: false,
    asthma: false,
    otherDisease: false,
    noneOfThese: false,
  })

  const handleConditionChange = (condition) => {
    if (condition === "noneOfThese") {
      setConditions({
        ...Object.keys(conditions).reduce(
          (acc, key) => ({
            ...acc,
            [key]: false,
          }),
          {},
        ),
        noneOfThese: !conditions.noneOfThese,
      })
    } else {
      setConditions({
        ...conditions,
        [condition]: !conditions[condition],
        noneOfThese: false,
      })
    }
  }

  const [whatsappUpdates, setWhatsappUpdates] = useState(false)

  return (
    <div className="max-w-xl mx-auto p-6">
      <div className="flex items-center mb-6">
        <Button onClick={movePrev} variant="ghost" className="mr-2">
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <span className="text-sm text-gray-500">Back</span>
      </div>

      <h1 className="text-2xl font-semibold text-center mb-4">Medical History</h1>

      <p className="text-center text-gray-600 mb-8">
        Do any member(s) have any existing illnesses for which they take regular medication?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {Object.entries({
          Diabetes: "diabetes",
          "Blood Pressure": "bloodPressure",
          "Heart Disease": "heartDisease",
          "Any Surgery": "anySurgery",
          Thyroid: "thyroid",
          Asthma: "asthma",
          "Other Disease": "otherDisease",
          "None of These": "noneOfThese",
        }).map(([label, key]) => (
          <div key={key} className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-gray-50">
            <Checkbox id={key} checked={conditions[key]} onCheckedChange={() => handleConditionChange(key)} />
            <label
              htmlFor={key}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {label}
            </label>
          </div>
        ))}
      </div>

      <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 mb-8 flex items-start gap-3">
        <LightbulbIcon className="h-5 w-5 text-yellow-500 mt-0.5" />
        <p className="text-sm">We will find you plans that cover your condition.</p>
      </div>

      <div className="flex items-center justify-between mb-8">
        <span className="text-sm font-medium">Get Updates on WhatsApp</span>
        <Switch checked={whatsappUpdates} onCheckedChange={setWhatsappUpdates} />
      </div>

      <Button onClick={moveNext} className="w-full bg-black text-white hover:bg-gray-800">
        Continue
        <ChevronRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  )
}

export default MedicalHistory

