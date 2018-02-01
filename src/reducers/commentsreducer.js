const defaultState = {
  allComments: [
    {id: "1", memeid: '2', comment: 'Wow. So link. Such click. Very website. Much lol.'},
    {id: "2", memeid: '4', comment: '2018 is tooooo much.'},
    {id: "3", memeid: '4', comment: 'Our generation needs help.'},
    {id: "4", memeid: '3', comment: 'I used to be an adventurer like you once.'},
    {id: "5", memeid: '1', comment: 'look behind you'},
    {id: "6", memeid: '3', comment: 'What happened?'},
    {id: "7", memeid: '5', comment: 'This is the dumbest meme.'},
    {id: "8", memeid: '5', comment: 'Whomst doth thou think thine art to judge the quality of such fine memes.'},
    {id: "9", memeid: '2', comment: '^lol'},
  ],
  oneComment: []
};

export default (state = defaultState, action) => {
  let newState = state;

  switch (action.type) {
    case "GET_ALL_COMMENTS":
      return newState;

    case "GET_ONE_COMMENT":
      let theOne = newState.allComments.filter((comment) => comment.id === action.id);

      if (theOne[0]) {
        return ({
          allComments: newState.allComments,
          oneComment: theOne[0]
        });
      } else {
        return newState;
      }

    case "ADD_COMMENT":
      let newComment = {id: (newState.length+1).toString(), memeid: action.memeid, comment: action.comment}
      newState.allComments.push(newComment)
      return newState

    default:
      return newState;
  }

};
