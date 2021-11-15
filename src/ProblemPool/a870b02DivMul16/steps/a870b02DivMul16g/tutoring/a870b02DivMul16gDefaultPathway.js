var hints = [{id: "a870b02DivMul16g-h1", type: "hint", dependencies: [], title: "Multiplication property of equality", text: "If you multiply both sides of an equation by the same number, you still have equality.", variabilization: {}}, {id: "a870b02DivMul16g-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{x}{4} \\left(4\\right)=\\left(35\\right) \\left(4\\right)$$"], dependencies: ["a870b02DivMul16g-h1"], title: "Multiplication", text: "Multiple 4 from each side.", variabilization: {}}, {id: "a870b02DivMul16g-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["140"], dependencies: ["a870b02DivMul16g-h2"], title: "Simplification", text: "What do we get for x after simplifying the equation?", variabilization: {}}, {id: "a870b02DivMul16g-h4", type: "hint", dependencies: ["a870b02DivMul16g-h3"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "a870b02DivMul16g-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["a870b02DivMul16g-h4"], title: "Verification", text: "Check whether $$\\frac{140}{4}$$ equals 35.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};