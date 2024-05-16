const initState = {
  memes: [
    {
      id: 0,
      title: "Say sike",
      url: "https://i.redd.it/j6wu6o9ncfv51.gif",
      author: "n1GG99",
      preview: [
        "https://preview.redd.it/j6wu6o9ncfv51.gif?width=108&crop=smart&format=png8&s=3b110a4d83a383b7bfebaf09ea60d89619cddfb3",
        "https://preview.redd.it/j6wu6o9ncfv51.gif?width=216&crop=smart&format=png8&s=ba5808992b3245a6518dfe759cbe4af24e042f2d",
        "https://preview.redd.it/j6wu6o9ncfv51.gif?width=320&crop=smart&format=png8&s=7567bb64e639223e3603236f774eeca149551313",
      ],
      upvotes: 0,
      downvotes: 0,
      favourite: false,
    },
    {
      id: 1,
      title: "I forgot how hard it is to think of a title",
      url: "https://i.redd.it/jk12rq8nrhv51.jpg",
      author: "TheRealKyJoe01",
      preview: [
        "https://preview.redd.it/jk12rq8nrhv51.jpg?width=216&crop=smart&auto=webp&s=b560b78301afd8c173f8c702fbd791214c1d7f61",
        "https://preview.redd.it/jk12rq8nrhv51.jpg?width=320&crop=smart&auto=webp&s=3cd427240b2185a3691a818774214fd2a0de124d",
        "https://preview.redd.it/jk12rq8nrhv51.jpg?width=640&crop=smart&auto=webp&s=1142cc19a746b8b5d8335679d1d36127f4a677b9",
      ],
      upvotes: 0,
      downvotes: 0,
      favourite: false,
    },
  ],
};

export const memeReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_MEMES": {
      return { ...state, memes: action.payload };
    }
    case "UPVOTE_MEME": {
      return {
        ...state,
        memes: state.memes.map((meme) =>
          meme.id === action.payload
            ? {
                ...meme,
                upvotes: meme.upvotes + 1,
              }
            : meme
        ),
      };
    }
    case "TOGGLE_FAVOURITE": {
      return {
        ...state,
        memes: state.memes.map((meme) =>
          meme.id === action.payload
            ? {
                ...meme,
                favourite: !meme.favourite,
              }
            : meme
        ),
      };
    }
    default:
      return state;
  }
};
