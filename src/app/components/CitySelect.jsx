"use client"

import { useState } from "react"
import { ChevronLeft, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Building2 } from "lucide-react"

function CitySelector() {
  const [selectedCity, setSelectedCity] = useState("Bangalore")

  const popularCities = ["Mumbai", "Bangalore", "Chennai", "Delhi", "Goa", "Kochi", "Kolkata", "Mangalore", "Hyderabad"]

  const handleCitySelect = (city) => {
    setSelectedCity(city)
  }

  const clearSelection = () => {
    setSelectedCity("")
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <div className="flex items-center mb-6">
        <Button variant="ghost" className="mr-2">
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>

      <h1 className="text-2xl font-semibold text-center mb-6">Select your city</h1>

      <div className="relative mb-6">
        <Input
          type="text"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="w-full pl-4 pr-10 py-2 border rounded-lg"
          placeholder="Search city"
        />
        {selectedCity && (
          <button onClick={clearSelection} className="absolute right-3 top-1/2 -translate-y-1/2">
            <X className="h-4 w-4 text-gray-500" />
          </button>
        )}
      </div>

      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-3">Popular cities</p>
        <div className="flex flex-wrap gap-2">
          {popularCities.map((city) => (
            <Button
              key={city}
              variant={selectedCity === city ? "default" : "outline"}
              className={`rounded-full ${selectedCity === city ? "bg-black text-white" : "bg-white"}`}
              onClick={() => handleCitySelect(city)}
            >
              {city}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex items-start gap-3 mb-8 p-4 bg-gray-50 rounded-lg">
        <Building2 className="h-5 w-5 mt-1" />
        <p className="text-sm">
          This will help us in finding the network of
          <br />
          <span className="font-semibold">Cashless Hospitals in your city</span>
        </p>
      </div>

      <Button className="w-full bg-black text-white hover:bg-gray-800">Continue</Button>
    </div>
  )
}

export default CitySelector

