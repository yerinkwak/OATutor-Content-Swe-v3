var hints = [{id: "FracDec4a-h1", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["20"], dependencies: [], title: "Getting Rid of Fraction Denominators", text: "What is the LCD (largest common denominator) of $$\\frac{1}{2}$$, $$\\frac{2}{5}$$, and $$\\frac{-3}{4}$$?", variabilization: {}}, {id: "FracDec4a-h2", type: "hint", dependencies: ["FracDec4a-h1"], title: "Getting Rid of Fraction Denominators", text: "We must now multiply both sides of the equation by the LCD to get rid of the fractions. We now have $$6\\times20=\\operatorname{20}\\left(\\frac{1}{2} v\\right)+\\operatorname{20}\\left(\\frac{2}{5} v\\right)-\\operatorname{20}\\left(\\frac{3}{4} v\\right)$$. This simplifies to $$120=3v$$", variabilization: {}}, {id: "FracDec4a-h3", type: "hint", dependencies: ["FracDec4a-h2"], title: "Solving the New Equation", text: "To solve this equation for v, we must first isolate the \"v\" term in the equation.", variabilization: {}}, {id: "FracDec4a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["40"], dependencies: ["FracDec4a-h3"], title: "Solving the New Equation", text: "We can isolate v by dividing both sides of the equation by 3. What is the value of v?", variabilization: {}}, ]; export {hints};