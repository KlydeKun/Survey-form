import React from "react";
import StarButton from "./StartButton";


// Define types for props
interface Question {
  id: number;
  question: string;
}

interface Part {
  partId: number;
  questions: Question[];
}

interface Office {
  office: string;
  parts: Part[];
}

interface ResponseOption {
  id: number;
  option: string;
}

interface SurveyTableProps {
  data: Office[];
  responseOptions: ResponseOption[];
  ratings: { [key: number]: number };
  handleRatingChange: (id: number, ratingValue: number) => void;
  range: number[];
}

// QuestionRow Component
interface QuestionRowProps {
  item: Question;
  range: number[];
  ratings: { [key: number]: number };
  handleRatingChange: (id: number, newRating: number) => void;
}

const QuestionRow: React.FC<QuestionRowProps> = ({
  item,
  range,
  ratings,
  handleRatingChange,
}) => (
  <tr key={item.id} className="bg-white border border-black">
    <td className="p-2">
      {item.id}. {item.question}
    </td>
    {range.map((ratingValue) => (
      <td key={ratingValue} className="text-center border border-black">
        <StarButton
          ratingValue={ratingValue}
          currentRating={ratings[item.id] || 0}
          onRatingChange={(newRating: number) =>
            handleRatingChange(item.id, newRating)
          }
        />
      </td>
    ))}
  </tr>
);

// PartTable Component
interface PartTableProps {
  part: Part;
  range: number[];
  ratings: { [key: number]: number };
  handleRatingChange: (id: number, newRating: number) => void;
}

const PartTable: React.FC<PartTableProps> = ({
  part,
  range,
  ratings,
  handleRatingChange,
}) => (
  <>
    {part.questions.map((item) => (
      <QuestionRow
        key={item.id}
        item={item}
        range={range}
        ratings={ratings}
        handleRatingChange={handleRatingChange}
      />
    ))}
  </>
);

// OfficeTable Component
interface OfficeTableProps {
  data: Office[];
  range: number[];
  ratings: { [key: number]: number };
  handleRatingChange: (id: number, newRating: number) => void;
}

const OfficeTable: React.FC<OfficeTableProps> = ({
  data,
  range,
  ratings,
  handleRatingChange,
}) => (
  <>
    {data.map((office) =>
      office.parts.map((part) => (
        <PartTable
          key={part.partId}
          part={part}
          range={range}
          ratings={ratings}
          handleRatingChange={handleRatingChange}
        />
      ))
    )}
  </>
);

// Main TableForm Component
const TableForm: React.FC<SurveyTableProps> = ({
  data,
  responseOptions,
  ratings,
  handleRatingChange,
  range,
}) => {
  return (
    <table className="table w-auto m-5">
      <thead>
        <tr className="bg-white">
          <th className="w-full border border-black">RDaFest...</th>
          {responseOptions.map((responseValue) => (
            <th key={responseValue.id} className="p-3 border border-black">
              {responseValue.option}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <OfficeTable
          data={data}
          range={range}
          ratings={ratings}
          handleRatingChange={handleRatingChange}
        />
      </tbody>
    </table>
  );
};

export default TableForm;
