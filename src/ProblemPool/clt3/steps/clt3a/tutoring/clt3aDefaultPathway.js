var hints = [{id: "clt3a-h1", type: "hint", dependencies: [], title: "", text: "Identify parts of the problem", variabilization: {}}, {id: "clt3a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["29321"], dependencies: ["clt3a-h1"], title: "", text: "What is the mean $$μ$$?", variabilization: {}}, {id: "clt3a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2120"], dependencies: ["clt3a-h1"], title: "", text: "What is the standard deviation $$σ$$?", variabilization: {}}, {id: "clt3a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["100"], dependencies: ["clt3a-h1"], title: "", text: "What is the sample size n?", variabilization: {}}, {id: "clt3a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["29000"], dependencies: ["clt3a-h1"], title: "", text: "What is the sample mean $$x̅$$?", variabilization: {}}, {id: "clt3a-h6", type: "hint", dependencies: ["clt3a-h2", "clt3a-h3", "clt3a-h4", "clt3a-h5"], title: "", text: "Draw a graph. Label the center with the mean. Shade the area roughly below.", variabilization: {}}, {id: "clt3a-h7", type: "hint", dependencies: ["clt3a-h6"], title: "", text: "Find the z-score", variabilization: {}}, {id: "clt3a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{-321}{212}$$"], dependencies: ["clt3a-h7"], title: "", text: "Use the following formula and plug in to find z-score: z $$=$$ (x̅ - μ)/(σ/sqrt(n))", variabilization: {}}, {id: "clt3a-h9", type: "hint", dependencies: ["clt3a-h8"], title: "", text: "Determine the probability.", variabilization: {}}, {id: "clt3a-h10", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.9345"], dependencies: ["clt3a-h9"], title: "", text: "Look up the z-score you calculated in the z-table. What the probability when the z-score is -1.51?", variabilization: {}}, {id: "clt3a-h11", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.0655"], dependencies: ["clt3a-h10"], title: "", text: "However, this is not the answer, as the question is asking for LESS THAN, and 93.45% is the area “greater than” so you need to subtract from 100%.", subHints: [{id: "clt3a-h11-s1", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.0655"], dependencies: [], title: "", text: "What is 1 - 0.9345?", variabilization: {}}, {id: "clt3a-h11-s2", type: "scaffold", problemType: "TextBox", answerType: "string", hintAnswer: ["6.55%"], dependencies: [], title: "", text: "Convert decimal to percentage.", variabilization: {}}], variabilization: {}}, ]; export {hints};