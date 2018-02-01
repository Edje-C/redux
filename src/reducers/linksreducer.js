const defaultState = {
  allMemes: [
    {id: "1", title: 'Slender Man', url: `http://knowyourmeme.com/memes/slender-man`},
    {id: "2", title: 'Doge', url: `http://knowyourmeme.com/memes/doge`},
    {id: "3", title: 'Arrow in the Knee', url: `http://knowyourmeme.com/memes/i-took-an-arrow-in-the-knee`},
    {id: "4", title: 'Tide Pods', url: `http://knowyourmeme.com/memes/tide-pod-challenge`},
    {id: "5", title: 'Whomst', url: `http://knowyourmeme.com/memes/whomst`}
  ],
  oneMeme: []
};

export default (state = defaultState, action) => {
  let newState = state;

  switch (action.type) {
    case "GET_ALL_MEMES":
      return newState;
    case "GET_ONE_MEME":
      let theOne = newState.allMemes.filter((meme) => meme.id === action.id);

      if (theOne[0]) {
        return ({
          allMemes: newState.allMemes,
          oneMeme: theOne[0]
        });
      } else {
        return newState;
      }
    case "ADD_MEME":
      let newMeme = {id: (newState.length+1).toString(), title: action.title, url: action.url}
      newState.allMemes.push(newMeme)
      return newState
    default:
      return newState;
  }

};
