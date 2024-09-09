"use client";

import { Button } from "primereact/button";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import React, { useState } from "react";

interface Office {
  id: number;
  name: string;
}

const Data = [
  {
    id: 1,
    message:
      "helped me establish strategic connections with other participants.",
  },
  {
    id: 2,
    message:
      "resulted in positive outcomes from the collaborations initiated or strengthened.",
  },
  {
    id: 3,
    message:
      "strengthened existing partnerships between my organization and other sectors.",
  },
  {
    id: 4,
    message:
      "helped me understand the importance of official statistics in society.",
  },
];

export default function DropdownOffice() {
  const [selectedOffice, setSelectedOffice] = useState<Office | null>({
    id: 0,
    name: "",
  });
  const [submitOffice, setSubmitOffice] = useState<Office | null>(null);

  const offices: Office[] = [
    { id: 1, name: "Government" },
    { id: 2, name: "Media" },
    { id: 3, name: "Private Sector (non-academe)" },
    { id: 4, name: "Academe" },
  ];

  const submit = () => {
    console.log(selectedOffice);
    setSubmitOffice(selectedOffice);
  };

  return (
    <div className="m-4">
      <div className="flex gap-5 mb-5">
        <Dropdown
          value={selectedOffice}
          onChange={(e: DropdownChangeEvent) => setSelectedOffice(e.value)}
          options={offices}
          placeholder="Select a Office"
          optionLabel="name"
          className="border-2 border-slate-700"
        />
        <Button
          label="Submit"
          className="bg-blue-500 px-4 text-white"
          onClick={submit}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th className="border-2 border-slate-900 p-2">ID</th>
            <th className="border-2 border-slate-900 p-2">Question</th>
          </tr>
        </thead>
        <tbody>
          {Data.map(
            (item) =>
              submitOffice?.id === item.id && (
                <tr key={item.id}>
                  <td className="border-2 border-slate-900 p-2">{item.id}</td>
                  <td className="border-2 border-slate-900 p-2">
                    {item.message}
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
}
