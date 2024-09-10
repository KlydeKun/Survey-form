"use client";

import { BackButton } from "@/app/evaluation-form/_component/Buttons";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";

export default function Page({ params }: { params: { office: string } }) {
  const router = useRouter();

  return (
    <div className="m-10 space-y-3">
      <h1>Office: {params.office}</h1>
      <div className="flex gap-10">
        <BackButton />
        <Button
          label="Next"
          className="bg-blue-900 p-2 text-white"
          onClick={() => router.push("/evaluation-form/government/part2/1")}
        />
      </div>
    </div>
  );
}
