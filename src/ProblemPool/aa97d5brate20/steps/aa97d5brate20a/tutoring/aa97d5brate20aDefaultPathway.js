var hints = [{id: "aa97d5brate20a-h1", type: "hint", dependencies: [], title: "The difference $$y_2-y_1$$", text: "We should first calculate the difference of the function evaluated at the two endpoints.", variabilization: {}}, {id: "aa97d5brate20a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$a^2+\\left(2\\right) a-\\left(35\\right)$$"], dependencies: ["aa97d5brate20a-h1"], title: "The difference $$y_2-y_1$$", text: "What is the difference between f(a) and f(5)?", choices: ["$$a^2+\\left(2\\right) a+\\left(19\\right)$$", "$$a^2+\\left(2\\right) a-\\left(35\\right)$$", "$$a^2+\\left(2\\right) a-\\left(49\\right)$$"], variabilization: {}}, {id: "aa97d5brate20a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\left(a+\\left(7\\right)\\right) \\left(a-\\left(5\\right)\\right)$$"], dependencies: ["aa97d5brate20a-h2"], title: "Rearrangement", text: "How can we rearrange the above expression?", choices: ["$$\\left(a+\\left(7\\right)\\right) \\left(a-\\left(5\\right)\\right)$$", "$$\\left(a+\\left(5\\right)\\right) \\left(a-\\left(7\\right)\\right)$$", "$$\\left(a+\\left(7\\right)\\right) \\left(a-\\left(7\\right)\\right)$$"], variabilization: {}}, {id: "aa97d5brate20a-h4", type: "hint", dependencies: ["aa97d5brate20a-h3"], title: "The difference $$x_2-x_1$$", text: "We should then calculate the difference of the two endpoints x values.", variabilization: {}}, {id: "aa97d5brate20a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["a-5"], dependencies: ["aa97d5brate20a-h4"], title: "The difference $$x_2-x_1$$", text: "What is the difference between a and 5?", variabilization: {}}, {id: "aa97d5brate20a-h6", type: "hint", dependencies: ["aa97d5brate20a-h5"], title: "The ratio", text: "We should last find the ratio of the difference in y and the difference in x.", variabilization: {}}, {id: "aa97d5brate20a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$a+\\left(7\\right)$$"], dependencies: ["aa97d5brate20a-h6"], title: "The ratio", text: "What is the ratio of the difference in y and the difference in x?", variabilization: {}}, ]; export {hints};