var hints = [{id: "a8e6481uni14a-h1", type: "hint", dependencies: [], title: "Identify", text: "Identify what you are solving for.", variabilization: {}}, {id: "a8e6481uni14a-h2", type: "hint", dependencies: ["a8e6481uni14a-h1"], title: "What Are You Solving For", text: "You are solving for the Cruz's running speed.", variabilization: {}}, {id: "a8e6481uni14a-h3", type: "hint", dependencies: ["a8e6481uni14a-h2"], title: "Make a Variable", text: "Create a variable to represent his running speed. Let the variable be x.", variabilization: {}}, {id: "a8e6481uni14a-h4", type: "hint", dependencies: ["a8e6481uni14a-h3"], title: "Time Elapsed", text: "Determine how much time each part of the journey took using subtraction.", variabilization: {}}, {id: "a8e6481uni14a-h5", type: "hint", dependencies: ["a8e6481uni14a-h4"], title: "Time Elapsed Answer", text: "6:00 PM to 7:30 PM is 1.5 hours. 7:30 PM to 9:45 PM is 2.25 hours long. So, he spent 1.5 hours running and 2.25 hours biking.", variabilization: {}}, {id: "a8e6481uni14a-h6", type: "hint", dependencies: ["a8e6481uni14a-h5"], title: "Translate to Equation", text: "Translate the situation into an equation using the variable. Remember that $$distance=speed time$$.", variabilization: {}}, {id: "a8e6481uni14a-h7", type: "hint", dependencies: ["a8e6481uni14a-h6"], title: "The Equation", text: "Multiply the speeds by the time it takes for each respective part of the training to get the equation $$\\left(1.5\\right) x+\\operatorname{2.25}\\left(\\left(1.6\\right) x\\right)=51$$ (this is the overall distance).", variabilization: {}}, {id: "a8e6481uni14a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["10"], dependencies: ["a8e6481uni14a-h7"], title: "Solving the Equation", text: "After solving the equation, what do you get for x?", subHints: [{id: "a8e6481uni14a-h8-s1", type: "hint", dependencies: [], title: "Solving the Equation", text: "To solve the equation $$\\left(1.5\\right) x+\\operatorname{2.25}\\left(\\left(1.6\\right) x\\right)=51$$, we follow these steps: 1.5x+ 3.6x=51-->5.1x=51-->x=10.", variabilization: {}}], variabilization: {}}, ]; export {hints};