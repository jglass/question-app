const InitialData = [
    { questionValue: "Question A",
    questionText: "Reggae",
    nextChoices: [
        { questionValue: "Question E",
        questionText: "Bob Marley",
        nextChoices: {
          recommendation: "Peter Tosh",
        }},
        { questionValue: "Question F",
        questionText: "Ziggy Marley",
        nextChoices: {
          recommendation: "Miriam Makeba",
        }},
        { questionValue: "Question G",
        questionText: "Jimmy Cliff",
        nextChoices: {
          recommendation: "Burning Spear",
        }},
        { questionValue: "Question H",
        questionText: "Lee 'Scratch' Perry",
        nextChoices: {
          recommendation: "UB40",
        }},
    ] },
    { questionValue: "Question B",
      questionText: "Rock",
    nextChoices: [
        { questionValue: "Question E",
        questionText: "Beatles",
        nextChoices: {
          recommendation: "Wilco",
        }},
          { questionValue: "Question F",
          questionText: "Pink Floyd",
          nextChoices: {
            recommendation: "Primus",
          }},
          { questionValue: "Question G",
          questionText: "Rolling Stones",
          nextChoices: {
            recommendation: "Red Hot Chili Peppers",
          }},
          { questionValue: "Question H",
          questionText: "The Who",
          nextChoices: {
            recommendation: "Radiohead",
          }},
       ]
    },
    { questionValue: "Question C",
      questionText: "Jazz",
      step: 1 },
    { questionValue: "Question D",
      questionText: "Classical",
      step: 1 },

];

export default InitialData;
