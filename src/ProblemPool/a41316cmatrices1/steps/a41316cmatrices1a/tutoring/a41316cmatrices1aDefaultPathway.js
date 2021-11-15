var hints = [{id: "a41316cmatrices1a-h1", type: "hint", dependencies: [], title: "Adding and Subtracting Matrices", text: "Given matrices A and B of like dimensions, addition and subtraction of A and B will produce matrix C or matrix D of the same dimension. \\n $$A+B=C$$ such that $$a_{ij}+b_{ij}=c_{ij}$$ \\n $$A-B=D$$ such that $$a_{ij}-b_{ij}=d_{ij}$$", variabilization: {}}, {id: "a41316cmatrices1a-h2", type: "hint", dependencies: ["a41316cmatrices1a-h1"], title: "Adding Corresponding Entries", text: "Since the dimension of the matrices are the same, we perform matrix addition $$A+B=C$$ such that $$a_{ij}+b_{ij}=c_{ij}$$.", variabilization: {}}, {id: "a41316cmatrices1a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["11"], dependencies: ["a41316cmatrices1a-h2"], title: "Adding Corresponding Entries", text: "We will start by adding the top left entry of C, $$c_{11}$$, and D, $$d_{11}$$. What is $$c_{11}+d_{11}$$?", variabilization: {}}, {id: "a41316cmatrices1a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["19"], dependencies: ["a41316cmatrices1a-h3"], title: "Adding Corresponding Entries", text: "We will next add the top right entry of C, $$c_{12}$$, and D, $$d_{12}$$. What is $$c_{12}+d_{12}$$?", variabilization: {}}, {id: "a41316cmatrices1a-h5", type: "hint", dependencies: ["a41316cmatrices1a-h4"], title: "Adding Corresponding Entries", text: "Repeat the same process for each corresponding entries to compute the addition of the two matrices.", variabilization: {}}, ]; export {hints};