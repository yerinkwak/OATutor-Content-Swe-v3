var hints = [{id: "ac0c1d3spe17a-h1", type: "hint", dependencies: [], title: "Subtraction Binomial Square Formula", text: "We compare our expression to the subtraction binomial square formula: $${\\left(a-b\\right)}^2=a^2-\\left(2\\right) a b+b^2$$.", variabilization: {}}, {id: "ac0c1d3spe17a-h2", type: "hint", dependencies: ["ac0c1d3spe17a-h1"], title: "Compare the Binomial", text: "$${\\left(a-b\\right)}^2$$ $${\\left(\\left(3\\right) x-y\\right)}^2$$", variabilization: {}}, {id: "ac0c1d3spe17a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(3\\right) x$$"], dependencies: ["ac0c1d3spe17a-h2"], title: "Identify a", text: "What is a in the expression?", variabilization: {}}, {id: "ac0c1d3spe17a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["y"], dependencies: ["ac0c1d3spe17a-h3"], title: "Identify b", text: "What is b in the expression?", variabilization: {}}, {id: "ac0c1d3spe17a-h5", type: "hint", dependencies: ["ac0c1d3spe17a-h3", "ac0c1d3spe17a-h4"], title: "Plug in the Terms", text: "Substitute $$a=\\left(3\\right) x$$ and $$b=y$$ into the subtraction binomial square formula: $${\\left(a-b\\right)}^2=a^2+\\left(2\\right) a b+b^2$$ $${\\left(\\left(3\\right) x-y\\right)}^2={\\left(\\left(3\\right) x\\right)}^2-\\left(2\\right) \\left(3\\right) x y+y^2$$", variabilization: {}}, {id: "ac0c1d3spe17a-h6", type: "hint", dependencies: ["ac0c1d3spe17a-h5"], title: "Simplify", text: "$$\\left(9\\right) x^2-\\left(6\\right) x y+y^2$$", variabilization: {}}, ]; export {hints};