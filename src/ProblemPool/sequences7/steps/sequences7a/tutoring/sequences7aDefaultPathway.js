var hints = [{id: "sequences7a-h1", type: "hint", dependencies: [], title: "Pattern Among the Signs", text: "Terms are all positive", variabilization: {}}, {id: "sequences7a-h2", type: "hint", dependencies: ["sequences7a-h1"], title: "Write in Explicit Form", text: "Write a formula for $$a_n$$ in terms of n", variabilization: {}}, {id: "sequences7a-s1", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\frac{2^n}{2n}$$"], dependencies: ["sequences7a-h2"], title: "Selecting Formula", text: "What is the explicit formula?", choices: ["$$\\frac{2^n}{2n}$$", "$$4n^2$$", "$$\\frac{2n}{2^n}$$", "$$5n+1$$"], variabilization: {}}, ]; export {hints};