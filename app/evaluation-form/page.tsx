import Link from "next/link";
import { Button } from "primereact/button";

export default function SurveyFormPage() {
  return (
    <div className="flex flex-col gap-3 w-fit p-10">
      <Link href="evaluation-form/government/part1/1">
        <Button label="Government" className="bg-slate-700 p-2 text-white w-full" />
      </Link>
      <Link href="evaluation-form/academe-student/part1/1">
        <Button
          label="Academe-student"
          className="bg-slate-700 p-2 text-white w-full"
        />
      </Link>
      <Link href="evaluation-form/academe-faculty/part1/1">
        <Button
          label="Academe-faculty"
          className="bg-slate-700 p-2 text-white w-full"
        />
      </Link>
      <Link href="evaluation-form/private-sector/part1/1">
        <Button
          label="private-sector"
          className="bg-slate-700 p-2 text-white w-full"
        />
      </Link>
      <Link href="evaluation-form/media/part1/1">
        <Button label="media" className="bg-slate-700 p-2 text-white w-full" />
      </Link>
      <Link href="evaluation-form/others/part1/1">
        <Button label="others" className="bg-slate-700 p-2 text-white w-full" />
      </Link>
    </div>
  );
}
