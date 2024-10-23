import React from "react"
function Result({ secretNum, term }) {
    let result;
    if (term) {
        if (term > secretNum) {
            result = "Higher";
        }
        else if (term < secretNum) {
            result = "Lower"
        }
        else if (term == secretNum) {
            result = "correct 🎉"
        }
        else {
            result = "Enter valid Number"
        }
    }
    return (
        <h3>Your Guess is {result}</h3>
    );
}
export default Result;