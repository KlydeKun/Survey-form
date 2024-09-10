"use client";

import { useRouter } from "next/navigation";
import { Button } from "primereact/button";

export function BackButton() {
  const router = useRouter();
  return (
    <div>
      <Button
        label="Back"
        className="bg-blue-900 p-2 text-white"
        onClick={() => router.back()}
      />
    </div>
  );
}

export function NextButton({ handleClick }: { handleClick: () => void }) {
  return (
    <div>
      <Button
        label="Next"
        className="bg-blue-900 p-2 text-white"
        onClick={handleClick}
      />
    </div>
  );
}
