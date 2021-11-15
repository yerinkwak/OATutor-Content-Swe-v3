var hints = [{id: "inverse11b-h1", type: "hint", dependencies: [], title: "Plugging in 0", text: "The y-intercept lies at the point of a function where the x-value is zero.", variabilization: {}}, {id: "inverse11b-h2", type: "hint", dependencies: ["inverse11b-h1"], title: "Plugging in 0", text: "So, we have to set the equation to: $$f(0)=x^3-27$$.", variabilization: {}}, {id: "inverse11b-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-27"], dependencies: ["inverse11b-h2"], title: "Plugging in 0", text: "What is the value of f(0)?", variabilization: {}}, {id: "inverse11b-h4", type: "hint", dependencies: ["inverse11b-h3"], title: "Simplifying the Equation", text: "When we plug in 0 into the function, we get $$0^3-27$$.", variabilization: {}}, {id: "inverse11b-h5", type: "hint", dependencies: ["inverse11b-h4"], title: "Simplifying the Equation", text: "Since $$0^3=0$$, we are left with 0-27.", variabilization: {}}, {id: "inverse11b-h6", type: "hint", dependencies: ["inverse11b-h5"], title: "Simplifying the Equation", text: "We add the constants: $$0-27=-27$$.", variabilization: {}}, ]; export {hints};