var hints = [{id: "other19a-h1", type: "hint", dependencies: [], title: "Writing Two Equations", text: "The first step is to rewrite the absolute value equation into two equations, $$6x+4=8$$ and $$6x+4=-8$$.", variabilization: {}}, {id: "other19a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{2}{3}$$"], dependencies: ["other19a-h1"], title: "Solving Equation One", text: "$$6x+4=8$$, $$x=$$?", variabilization: {}}, {id: "other19a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-2"], dependencies: ["other19a-h1"], title: "Solving Equation Two", text: "$$6x+4=-8$$, $$x=$$?", variabilization: {}}, {id: "other19a-h4", type: "hint", dependencies: ["other19a-h2", "other19a-h3"], title: "Final Answer", text: "The answers to the first and second equations are the answer to the original absolute value equation.", variabilization: {}}, ]; export {hints};