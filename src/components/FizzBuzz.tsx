import { useState } from "react";
import { fizzBuzz } from "../utils/FizzBuzz";

function playFizzBuzz(): JSX.Element {
    const [storedIndices, setStoredIndices] = useState([0]);
    const [storedReturns, setStoredReturns] = useState<(string | number)[]>([])

    const HandleNextButton () => {
        setStoredIndices(prevStoredIndices => [...prevStoredIndices, storedIndices[storedIndices.length-1]])
        setStoredReturns(prevStoredReturns => [...prevStoredReturns, fizzBuzz(storedIndices[storedIndices.length-1])])
    };

    return (
        <>
        </>
    )
}