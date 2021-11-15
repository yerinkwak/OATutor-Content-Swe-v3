var hints = [{id: "a9ad3f8applications5a-h1", type: "hint", dependencies: [], title: "Identify", text: "We are looking for the age of Noelle and her dad.", variabilization: {}}, {id: "a9ad3f8applications5a-h2", type: "hint", dependencies: ["a9ad3f8applications5a-h1"], title: "First equation", text: "Since their ages together are 74, we can write the first equation as $$n+d=74$$", variabilization: {}}, {id: "a9ad3f8applications5a-h3", type: "hint", dependencies: ["a9ad3f8applications5a-h2"], title: "Second equation", text: "Since the age of Noelle’s dad is six less than three times Noelle’s age, we can write the second equation as $$d=3n-6$$", variabilization: {}}, {id: "a9ad3f8applications5a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["20"], dependencies: ["a9ad3f8applications5a-h3"], title: "Solve", text: "Next, using the system of equations just created, solve for n. What does it equal?", variabilization: {}}, {id: "a9ad3f8applications5a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["54"], dependencies: ["a9ad3f8applications5a-h4"], title: "Solve", text: "What does d equal?", variabilization: {}}, {id: "a9ad3f8applications5a-h6", type: "hint", dependencies: ["a9ad3f8applications5a-h5"], title: "Answer", text: "Noelle is 20 and her dad is 54.", variabilization: {}}, ]; export {hints};