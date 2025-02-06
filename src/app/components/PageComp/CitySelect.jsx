"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Building2, X } from "lucide-react";
import { useFamily } from "../../context/FamilyContext";
import Back from "../Back";
import { showAlertFn } from "../../GlobalAlert";

function CitySelector() {
  const { movePrev, moveNext, userCity, setUserCity } = useFamily();

  const popularCities = [
    "Mumbai",
    "Bangalore",
    "Chennai",
    "Delhi",
    "Goa",
    "Kochi",
    "Kolkata",
    "Mangalore",
    "Hyderabad",
  ];

  const handleCitySelect = (city) => {
    setUserCity(city);
  };

  const clearSelection = () => {
    setUserCity("");
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-6 md:w-[80%] lg:w-[50%] mx-auto">
      <div className="flex items-center mb-6 w-full max-w-md">
        <Back onPress={movePrev} />
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Select your city
      </h1>

      <div className="relative mb-6 w-full max-w-md">
        <Input
          type="text"
          value={userCity}
          onChange={(e) => setUserCity(e.target.value)}
          className="w-full pl-4 pr-10 py-2 border rounded-md font-medium"
          placeholder="Search city"
        />
        {userCity && (
          <button
            onClick={clearSelection}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            <X className="h-4 w-4 text-gray-500" />
          </button>
        )}
      </div>

      <div className="mb-6 w-full max-w-md">
        <p className="text-sm font-medium text-gray-600 mb-3">Popular cities</p>
        <div className="flex flex-wrap gap-2">
          {popularCities.map((city) => (
            <Button
              key={city}
              variant={userCity === city ? "default" : "outline"}
              className={`rounded-md text-sm px-3 py-2 md:px-4 md:py-2.5 ${
                userCity === city ? "bg-black text-white" : "bg-white"
              }`}
              onClick={() => handleCitySelect(city)}
            >
              {city}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex items-start gap-3 mb-8 p-4 bg-gray-50 rounded-md w-full max-w-md">
        <Building2 className="h-5 w-5 mt-1" />
        <p className="text-sm">
          This will help us in finding the network of
          <br />
          <span className="font-semibold">Cashless Hospitals in your city</span>
        </p>
      </div>

      <Button
        onClick={userCity === "" ? () => showAlertFn("error", "Select your city!") : moveNext}
        className="w-full max-w-md bg-black text-white hover:bg-gray-800"
      >
        Continue
      </Button>
    </div>
  );
}

export default CitySelector;
