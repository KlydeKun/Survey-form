"use client";

import React, { useState } from "react";
import { Button } from "primereact/button";
import TableForm from "../../components/Table";
import { govData, range, responseRating } from "../../libs/Data";

// Type definitions based on govData structure
interface Question {
  id: number;
}

interface Part {
  questions: Question[];
}

interface GovDataItem {
  parts: Part[];
}

interface Ratings {
  [key: number]: number;
}

// Helper function to get all question IDs from govData
const getQuestionIds = (data: GovDataItem): number[] => {
  return data.parts.flatMap((part) => part.questions.map((item) => item.id));
};

// Helper function to check if all questions have been rated
const areAllQuestionsRated = (govData: GovDataItem[], ratings: Ratings): boolean => {
  return govData.every((data) => {
    const questionIds = getQuestionIds(data);
    return questionIds.every((id) => ratings[id] !== undefined);
  });
};

export default function TableOne() {
  const [ratings, setRatings] = useState<{ [key: number]: number }>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleRatingChange = (id: number, ratingValue: number) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [id]: ratingValue,
    }));
  };

  const handleSubmit = () => {
    const allRated = areAllQuestionsRated(govData, ratings);

    if (allRated) {
      setErrorMessage(null);
      console.log(ratings);
    } else {
      setErrorMessage("Please rate all questions before submitting.");
    }
    setRatings({});
  };

  return (
    <div>
      <TableForm
        data={govData}
        responseOptions={responseRating}
        ratings={ratings}
        handleRatingChange={handleRatingChange}
        range={range}
      />
      {errorMessage && <p className="text-red-500 mx-5">{errorMessage}</p>}
      <div className="m-5 flex justify-end">
        <Button
          label="Submit"
          className="bg-blue-600 rounded-sm p-2 text-white"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}
