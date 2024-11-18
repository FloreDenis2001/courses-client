"use client";

import React, { useContext } from "react";
import { LoginContext } from "@/modules/context/LoginProvider";
import LoginContextType from "@/modules/context/LoginContextType";
import { europeanCountries } from "@/modules/utils/utils";

const DeliveryInformation: React.FC = () => {
  const { user } = useContext(LoginContext) as LoginContextType;

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <form className="grid grid-cols-1 gap-6">
        <input
          type="text"
          placeholder="Name"
          className="p-3 border rounded w-full"
          defaultValue={user?.lastName +" "+ user?.firstName || ""}
        />
        <input
          type="tel"
          placeholder="Mobile Number"
          className="p-3 border rounded w-full"
          defaultValue={user?.phoneNumber || ""}
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 border rounded w-full"
          defaultValue={user?.email || ""}
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="City"
            className="p-3 border rounded w-full"
          />
          <input
            type="text"
            placeholder="ZIP"
            className="p-3 border rounded w-full"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
        <select className="p-3 border rounded w-full">
            <option value="">Select Country</option>
            {europeanCountries.map((country, index) => (
              <option key={index} value={country}>{country}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Address"
            className="p-3 border rounded w-full"
           
          />
        </div>
      </form>
    </div>
  );
};

export default DeliveryInformation;
