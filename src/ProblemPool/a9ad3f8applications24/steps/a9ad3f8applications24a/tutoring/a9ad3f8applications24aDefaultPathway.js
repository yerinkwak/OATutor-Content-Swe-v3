var hints = [{id: "a9ad3f8applications24a-h1", type: "hint", dependencies: [], title: "Create Variables", text: "We are looking to find the measure of two angles. Let $$x=measure$$ of first angle and $$y=measure$$ of second angle.", variabilization: {}}, {id: "a9ad3f8applications24a-h2", type: "hint", dependencies: ["a9ad3f8applications24a-h1"], title: "Translate to a System of Equations", text: "The two angles are complementary, translating into $$x+y=90$$. The two angles have a difference of 20, translating into $$x-y=20$$.", variabilization: {}}, {id: "a9ad3f8applications24a-h3", type: "hint", dependencies: ["a9ad3f8applications24a-h2"], title: "Solve the System", text: "Using elimination we can add the two equations together. \\n $$x+y=90$$ \\n $$x-y=20$$ \\n y is elimnated which allows us to solve for x. \\n $$\\left(2\\right) x=110$$", variabilization: {}}, {id: "a9ad3f8applications24a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["55"], dependencies: ["a9ad3f8applications24a-h3"], title: "Finding Angle 1", text: "What is the measure of angle x?", variabilization: {}}, {id: "a9ad3f8applications24a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["35"], dependencies: ["a9ad3f8applications24a-h4"], title: "Finding Angle 2", text: "Given $$x=55$$, plug the known value into one of the two systems to solve for y. What is the measure of angle y?", variabilization: {}}, ]; export {hints};