const InitialData = [
    { questionValue: "Question A",
    questionText: "Reggae",
    deezerId: 7010,
    imageUrl: "https://e-cdns-images.dzcdn.net/images/artist/1ca0ae3450579ac579bb61dffd1a51fa/250x250-000000-80-0-0.jpg",
    nextChoices: [
        { questionValue: "Question E",
        questionText: "Bob Marley",
        imageUrl: "https://e-cdns-images.dzcdn.net/images/artist/cc3b1efce691fc86644748dba8affa21/250x250-000000-80-0-0.jpg",
        deezerId: 4803754,
        nextChoices: {
          recommendation: "Peter Tosh",
          deezerId: 2326,
          imageUrl: "https://e-cdns-images.dzcdn.net/images/artist/31c0c1dfc699039efb7921adeed33721/250x250-000000-80-0-0.jpg",
        }},
        { questionValue: "Question F",
        questionText: "Ziggy Marley",
        imageUrl: "https://e-cdns-images.dzcdn.net/images/artist/d9dcaa9371cc2d08d9152a27f3e86fd9/250x250-000000-80-0-0.jpg",
        deezerId: 5995,
        nextChoices: {
          recommendation: "Miriam Makeba",
          deezerId: 8514,
          imageUrl: "https://e-cdns-images.dzcdn.net/images/artist/3d031ce32e450c4f7b83f5d1d35bc870/250x250-000000-80-0-0.jpg",
        }},
        { questionValue: "Question G",
        questionText: "Jimmy Cliff",
        imageUrl: "https://e-cdns-images.dzcdn.net/images/artist/686b0d6e829a9067ad2d9071d5e2f421/250x250-000000-80-0-0.jpg",
        deezerId: 2425,
        nextChoices: {
          recommendation: "Burning Spear",
          deezerId: 2325,
          imageUrl: "https://e-cdns-images.dzcdn.net/images/artist/111b5d86ce29b3bb1bd2f942571e418d/250x250-000000-80-0-0.jpg",
        }},
        { questionValue: "Question H",
        questionText: "Lee 'Scratch' Perry",
        imageUrl: "https://e-cdns-images.dzcdn.net/images/artist/8e36ef73d28e10192c5c103294fff588/250x250-000000-80-0-0.jpg",
        deezerId: 3757,
        nextChoices: {
          recommendation: "UB40",
          deezerId: 3167612,
          imageUrl: "https://e-cdns-images.dzcdn.net/images/artist/9d18886e3f768e9b1f05be42a6653909/250x250-000000-80-0-0.jpg",
        }},
    ] },
    { questionValue: "Question B",
      questionText: "Rock",
      deezerId: 415,
      imageUrl: "https://e-cdns-images.dzcdn.net/images/artist/3ec5542ff520ee74e2befdaba32ef2ef/250x250-000000-80-0-0.jpg",
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
      deezerId: 2692,
      imageUrl: "https://e-cdns-images.dzcdn.net/images/artist/060e81d8e7473ac865a4e0b17a38b14b/250x250-000000-80-0-0.jpg",
      step: 1 },
    { questionValue: "Question D",
      questionText: "Classical",
      deezerId: 4717408,
      imageUrl: "https://e-cdns-images.dzcdn.net/images/artist/cec69ef56680e52981d8db236755972d/250x250-000000-80-0-0.jpg",
      step: 1 },

];

export default InitialData;
