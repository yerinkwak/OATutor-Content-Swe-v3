var hints = [{id: "a61c721rational19a-h1", type: "hint", dependencies: [], title: "Common Denominator", text: "The first step is to find the least common denominator of two rational expressions.", variabilization: {}}, {id: "a61c721rational19a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(y-\\left(2\\right)\\right) \\left(y+\\left(1\\right)\\right)$$"], dependencies: ["a61c721rational19a-h1"], title: "Common Denominator", text: "What is the least common denominator?", variabilization: {}}, {id: "a61c721rational19a-h3", type: "hint", dependencies: ["a61c721rational19a-h2"], title: "Common Denominator", text: "Since we do not know the value of y, the least common multiple of the denominators is their product. So, the LCD is $$\\left(y-\\left(2\\right)\\right) \\left(y+\\left(1\\right)\\right)$$.", variabilization: {}}, {id: "a61c721rational19a-h4", type: "hint", dependencies: ["a61c721rational19a-h3"], title: "Multiplying the First Expression", text: "Now we need to multiply both expressions by a factor equal to 1 that makes the denominators equal to the LCD. Starting with the first expression, we can multiply $$\\frac{y+\\left(3\\right)}{y+\\left(1\\right)}$$ by a factor to make the denominator $$\\left(y-\\left(2\\right)\\right) \\left(y+\\left(1\\right)\\right)$$.", variabilization: {}}, {id: "a61c721rational19a-h5", type: "hint", dependencies: ["a61c721rational19a-h4"], title: "Multiplying the First Expression", text: "The denominator of $$\\frac{y+\\left(3\\right)}{y-\\left(2\\right)}$$ multiplied by $$y+\\left(1\\right)$$ equals $$\\left(y-\\left(2\\right)\\right) \\left(y+\\left(1\\right)\\right)$$. So, we need to multiply $$\\frac{y+\\left(3\\right)}{y+\\left(1\\right)}$$ by $$\\left(y+\\left(1\\right)\\right) \\left(y+\\left(1\\right)\\right)$$.", variabilization: {}}, {id: "a61c721rational19a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(y**2+4y+3/((y-2)(y+1))"], dependencies: ["a61c721rational19a-h5"], title: "Multiplying the First Expression", text: "What is $$\\frac{y+\\left(3\\right)}{y-\\left(2\\right)} \\left(y+\\left(1\\right)\\right) \\left(y+\\left(1\\right)\\right)$$?", variabilization: {}}, {id: "a61c721rational19a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$y^2+\\left(4\\right) y+\\left(3\\right)$$"], dependencies: ["a61c721rational19a-h6"], title: "Multiplying the First Expression", text: "$$\\left(y+\\left(3\\right)\\right) \\left(y+\\left(1\\right)\\right)$$", variabilization: {}}, {id: "a61c721rational19a-h8", type: "hint", dependencies: ["a61c721rational19a-h7"], title: "Multiplying the First Expression", text: "When multiplying polynomials, we need to use FOIL.", variabilization: {}}, {id: "a61c721rational19a-h9", type: "hint", dependencies: ["a61c721rational19a-h8"], title: "Multiplying the First Expression", text: "First, multiply the first value in each polynomial: $$y y=y^2$$. Next, multiply the outside values: $$y \\left(1\\right)=y$$. Then, multiply the inside values: $$\\left(3\\right) y=3y$$. Lastly, multiply the last values: $$\\left(3\\right) \\left(1\\right)=3$$. Finally, combine like terms: $$y+\\left(3\\right) y=4y$$. So, the expression reads $$y^2+\\left(4\\right) y+\\left(3\\right)$$.", variabilization: {}}, {id: "a61c721rational19a-h10", type: "hint", dependencies: ["a61c721rational19a-h9"], title: "Multiplying the Second Expression", text: "Next, we need to multiply the second expression by a fraction to make the denominator equal to the LCD. Because the denominator of $$\\frac{y-\\left(3\\right)}{y+\\left(1\\right)}$$ needs to by multiplied by y-2 to become $$\\left(y-\\left(2\\right)\\right) \\left(y+\\left(1\\right)\\right)$$, we need to $$\\frac{y-\\left(3\\right)}{y+\\left(1\\right)}$$ by (y-2)(y-2).", variabilization: {}}, {id: "a61c721rational19a-h11", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["y**2-5y+6/((y-2)(y+1)"], dependencies: ["a61c721rational19a-h10"], title: "Multiplying the Second Expression", text: "What is $$\\frac{y+\\left(3\\right)}{y-\\left(2\\right)} \\frac{y+\\left(1\\right)}{y+\\left(1\\right)}$$?", variabilization: {}}, {id: "a61c721rational19a-h12", type: "hint", dependencies: ["a61c721rational19a-h11"], title: "Multiplying the Second Expression", text: "When multiplying polynomials, we need to use FOIL.", variabilization: {}}, {id: "a61c721rational19a-h13", type: "hint", dependencies: ["a61c721rational19a-h12"], title: "Multiplying the Second Expression", text: "First, multiply the first value in each polynomial: $$y y=y^2$$. Next, multiply the outside values: $$y \\left(1\\right)=y$$. Then, multiply the inside values: $$\\left(3\\right) y=3y$$. Lastly, multiply the last values: $$\\left(3\\right) \\left(1\\right)=3$$. Finally, combine like terms: $$y+\\left(3\\right) y=4y$$. So, the expression reads $$y^2+\\left(4\\right) y+\\left(3\\right)$$.", variabilization: {}}, {id: "a61c721rational19a-h14", type: "hint", dependencies: ["a61c721rational19a-h13"], title: "Adding the Expressions", text: "Because the expressions now have the same denominator, we can add the numerators to get the sum of the two expressions. We'll leave the denominator as it is, but combine the numerator's like terms.", variabilization: {}}, {id: "a61c721rational19a-h15", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["9a"], dependencies: ["a61c721rational19a-h14"], title: "Adding the Expressions", text: "What is $$y^2+\\left(4\\right) y+\\left(3\\right)-y^2-\\left(5\\right) y+\\left(6\\right)$$?", variabilization: {}}, {id: "a61c721rational19a-h16", type: "hint", dependencies: ["a61c721rational19a-h15"], title: "Adding the Expressions", text: "Combine the like terms: $$y^2-y^2=0;$$ $$\\left(4\\right) y+\\left(5\\right) y=9y;$$ $$3-6=-3$$.", variabilization: {}}, {id: "a61c721rational19a-h17", type: "hint", dependencies: ["a61c721rational19a-h16"], title: "Final Expression", text: "Now we have our final expression: $$\\frac{\\left(2\\right) y^2-y+\\left(9\\right)}{\\left(y-\\left(2\\right)\\right) \\left(y+\\left(1\\right)\\right)}$$.", variabilization: {}}, ]; export {hints};