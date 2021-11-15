var hints = [{id: "quad23a-h1", type: "hint", dependencies: [], title: "Factoring a Quadratic Equation", text: "To factor a quadratic expression $${ax}^2+bx+c=0$$, the first step is to divide both sides by a.", variabilization: {}}, {id: "quad23a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$x^2+\\frac{17}{6} x+\\frac{5}{6}=0$$"], dependencies: ["quad23a-h1"], title: "Dividing Both Sides of the Equation", text: "After dividing both sides by a, what does the equation turn into?", choices: ["$$x^2+17x+\\frac{5}{6}=0$$", "$$x^2+\\frac{17}{6} x+\\frac{5}{6}=0$$", "$$x^2+\\frac{17}{6} x+5=0$$"], variabilization: {}}, {id: "quad23a-h3", type: "hint", dependencies: ["quad23a-h2"], title: "Factoring a Quadratic Equation", text: "The second step is to find two numbers, p and q, for which $$p q=c$$ and $$p+q=b$$.", variabilization: {}}, {id: "quad23a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{5}{6}$$"], dependencies: ["quad23a-h3"], title: "Product of Factors", text: "What is the product of $$\\frac{5}{2} \\frac{1}{3}$$?", variabilization: {}}, {id: "quad23a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{17}{6}$$"], dependencies: ["quad23a-h3"], title: "Sum of Factors", text: "What is the sum of $$\\frac{5}{2}+\\frac{1}{3}$$?", variabilization: {}}, {id: "quad23a-h6", type: "hint", dependencies: ["quad23a-h3", "quad23a-h4", "quad23a-h5"], title: "Rewriting the Expression", text: "Then, rewrite the equation as $$\\left(x+p\\right) \\left(x+q\\right)=0$$.", variabilization: {}}, {id: "quad23a-h7", type: "hint", dependencies: ["quad23a-h6"], title: "Answers of a Quadratic Equation", text: "The answers of a quadratic equation are its roots, the p and q values that make the expression 0.", variabilization: {}}, {id: "quad23a-h8", type: "hint", dependencies: ["quad23a-h7"], title: "Significance of p and q", text: "When $$x=-p$$ and -q, $$\\left(x+p\\right) \\left(x+q\\right)=0$$.", variabilization: {}}, ]; export {hints};