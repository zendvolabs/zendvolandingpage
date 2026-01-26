'use client'
import { useState } from "react";
import IconSelect from "./SelectField";

const countries = [
  { value: "us", label: "United States", icon: "🇺🇸" },
  { value: "uk", label: "United Kingdom", icon: "🇬🇧" },
  { value: "ng", label: "Nigeria", icon: "🇳🇬" },
];

export default function CountrySelect() {
  const [country, setCountry] = useState(countries[0]);

  return (
    <IconSelect
      label="Select country"
      value={country}
      options={countries}
      // onChange={setCountry}
    />
  );
}
