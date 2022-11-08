import { useState } from "react";
import { fizzBuzz } from "../utils/FizzBuzz";

export default function PlayFizzBuzz(): JSX.Element {
  const [storedIndices, setStoredIndices] = useState([0]);
  const [storedReturns, setStoredReturns] = useState<(string | number)[]>([]);

  const handleNextButton = () => {
    setStoredIndices((prevStoredIndices) => [
      ...prevStoredIndices,
      storedIndices[storedIndices.length - 1] + 1,
    ]);
    setStoredReturns((prevStoredReturns) => [
      ...prevStoredReturns,
      `${fizzBuzz(storedIndices[storedIndices.length - 1])} `,
    ]);
  };

  return (
    <>
      <h1>FIZZBUZZ</h1>
      <hr />
      <p>
        <big>{storedReturns}</big>
      </p>
      <button onClick={handleNextButton}>Next</button>
    </>
  );
}
