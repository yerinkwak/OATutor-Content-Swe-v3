var hints = [{id: "Visualize17a-h1", type: "hint", dependencies: [], title: "General Approach", text: "To simplify an expression with a fraction bar, we first simplify the expression in the numerator and the expression in the denominator. Second, we simplify the fraction.", variabilization: {}}, {id: "Visualize17a-h2", type: "hint", dependencies: ["Visualize17a-h1"], title: "Simplifying Numerator", text: "What is 4-2(3)?", variabilization: {}}, {id: "Visualize17a-h3", type: "hint", dependencies: ["Visualize17a-h1"], title: "Simplifying Denominator", text: "What is $$2^2+2$$?", variabilization: {}}, {id: "Visualize17a-h4", type: "hint", dependencies: ["Visualize17a-h2", "Visualize17a-h3"], title: "Putting Top and Bottom Together", text: "Putting the simplified expressions together, we get the fraction $$\\frac{-2}{6}$$, which we will then try to simplify if possible.", variabilization: {}}, {id: "Visualize17a-h5", type: "hint", dependencies: ["Visualize17a-h4"], title: "Determining the Sign", text: "A negative divided by a positive is negative.", variabilization: {}}, {id: "Visualize17a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["Visualize17a-h5"], title: "Checking for Common Factors", text: "Do 2 and 6 have any common factors?", choices: ["Yes", "No"], variabilization: {}}, {id: "Visualize17a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2"], dependencies: ["Visualize17a-h6"], title: "Finding Largest Common Factor", text: "What is the largest common factor between the numerator and the denominator?", variabilization: {}}, {id: "Visualize17a-h8", type: "hint", dependencies: ["Visualize17a-h7"], title: "Simplifying", text: "To simplify the fraction, we can divide both the numerator and the denominator by their largest common factor.", variabilization: {}}, {id: "Visualize17a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1"], dependencies: ["Visualize17a-h8"], title: "Dividing Numerator", text: "What is $$\\frac{2}{2}$$?", variabilization: {}}, {id: "Visualize17a-h10", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3"], dependencies: ["Visualize17a-h8"], title: "Dividing Denominator", text: "What is $$\\frac{6}{2}$$?", variabilization: {}}, {id: "Visualize17a-h11", type: "hint", dependencies: ["Visualize17a-h9", "Visualize17a-h10"], title: "Final Answer", text: "So $$\\frac{-1}{3}$$ is our final answer.", variabilization: {}}, ]; export {hints};