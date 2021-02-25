import React from 'react'; import { InlineMath } from 'react-katex';import hints from "./comp1b-index.js"; const step = {id: "comp1b", stepAnswer: ["$$x+\\left(1\\right)$$"], problemType: "MultipleChoice", stepTitle: <div> Find and simplify the function <InlineMath math="\frac{g}{f} x"/>, given <InlineMath math="f x=x-\left(1\right)"/> and <InlineMath math="g x=x^2-\left(1\right)"/>.</div>, stepBody: "", choices: ["$$x-\\left(1\\right)$$", "$$x^2+\\left(1\\right)$$", "$$x+\\left(1\\right)$$"], answerType: "string", hints: hints}; export {step};