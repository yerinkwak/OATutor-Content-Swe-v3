var hints = [{id: "aadff92AppQuad4a-h1", type: "hint", dependencies: [], title: "Set the Equation", text: "Let n be the first odd number, and the second consecutive number will be $$n+2$$. The equation will be $$n\\left(n+2\\right)=1023$$.", variabilization: {}}, {id: "aadff92AppQuad4a-h2", type: "hint", dependencies: ["aadff92AppQuad4a-h1"], title: "Solve the Equation", text: "Solve $$n\\left(n+2\\right)=1023$$. You foil out the equation as $$n^2+2n=1023$$. $$n^2+2n-1023=0$$.", variabilization: {}}, {id: "aadff92AppQuad4a-h3", type: "hint", dependencies: ["aadff92AppQuad4a-h2"], title: "Apply Quadratic Equation to solve for n.", text: "Given $${ax}^2+bx+c=0$$, $$x=\\frac{\\left(-b\\pm\\sqrt{b^2-4ac}\\right)}{2a}$$.", variabilization: {}}, {id: "aadff92AppQuad4a-h4", type: "scaffold", problemType: "TextBox", answerType: "string", hintAnswer: ["(-33,31)"], dependencies: ["aadff92AppQuad4a-h3"], title: "Apply Quadratic Equation to solve for n.", text: "Apply Quadratic Equation to solve for n when $$n^2+2n-1023=0$$. Enter your answer as (a,b) where $$a<b$$.", variabilization: {}}, {id: "aadff92AppQuad4a-h5", type: "hint", dependencies: ["aadff92AppQuad4a-h4"], title: "Find Answer Pairs", text: "When the first consecutive number is -33, the second consecutive number is $$-33+2=-31$$. When the first consecutive number is 31, the second consecutive number is $$31+2=33$$. The final answer is (-33,-31),(31,33).", variabilization: {}}, ]; export {hints};