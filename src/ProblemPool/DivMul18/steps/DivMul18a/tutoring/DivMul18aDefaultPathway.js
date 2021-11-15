var hints = [{id: "DivMul18a-h1", type: "hint", dependencies: [], title: "Simplification", text: "With these more complicated equations the first step is to simplify both sides of the equation as much as possible.", variabilization: {}}, {id: "DivMul18a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$-9=3c$$"], dependencies: ["DivMul18a-h1"], title: "Simplification", text: "Simplify both sides of the equation.", variabilization: {}}, {id: "DivMul18a-h3", type: "hint", dependencies: ["DivMul18a-h2"], title: "Isolation", text: "Using multiplication property, division property etc. to isolate the variable.", variabilization: {}}, {id: "DivMul18a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$c=-3$$"], dependencies: ["DivMul18a-h3"], title: "Division", text: "Divide both sides by 3 to isolate c.", variabilization: {}}, {id: "DivMul18a-h5", type: "hint", dependencies: ["DivMul18a-h4"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "DivMul18a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["DivMul18a-h5"], title: "Verification", text: "Check whether 18-27 equals $$15\\times3-9\\times3-3\\times3$$.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};