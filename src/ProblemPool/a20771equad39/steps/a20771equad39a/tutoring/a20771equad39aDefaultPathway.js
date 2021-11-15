var hints = [{id: "a20771equad39a-h1", type: "hint", dependencies: [], title: "Simplify", text: "Move the constant term(22) to the right side by adding 22 to both sides", variabilization: {}}, {id: "a20771equad39a-h2", type: "hint", dependencies: ["a20771equad39a-h1"], title: "Add", text: "Add $${\\left(\\frac{9}{2}\\right)}^2$$ to both sides", variabilization: {}}, {id: "a20771equad39a-h3", type: "hint", dependencies: ["a20771equad39a-h2"], title: "Simplify", text: "Now simplify the expression $$x^2-\\left(9\\right) x+\\frac{81}{4}=\\left(22\\right)+\\frac{81}{4}$$ as a factor squared", variabilization: {}}, {id: "a20771equad39a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$${\\left(x-\\frac{9}{2}\\right)}^2=\\left(22\\right)+\\frac{81}{4}$$"], dependencies: ["a20771equad39a-h3"], title: "Simplify", text: "What do we get after rewriting the left-hand side?", choices: ["$${\\left(x-\\frac{9}{2}\\right)}^2=\\left(22\\right)+\\frac{81}{4}$$", "$${\\left(x+\\frac{9}{3}\\right)}^2=\\left(22\\right)+\\frac{81}{4}$$", "$${\\left(x-\\frac{3}{2}\\right)}^2=\\left(22\\right)+\\frac{81}{4}$$"], variabilization: {}}, {id: "a20771equad39a-h5", type: "hint", dependencies: ["a20771equad39a-h4"], title: "Simplify", text: "Calculate the right hand side $$\\left(22\\right)+\\frac{81}{16}$$, which is equal to $$\\frac{169}{4}$$.", variabilization: {}}, {id: "a20771equad39a-h6", type: "hint", dependencies: ["a20771equad39a-h5"], title: "Square Root", text: "Take the square root of both sides", variabilization: {}}, {id: "a20771equad39a-h7", type: "hint", dependencies: ["a20771equad39a-h6"], title: "Add", text: "Add $$\\frac{9}{2}$$ to both values", variabilization: {}}, ]; export {hints};