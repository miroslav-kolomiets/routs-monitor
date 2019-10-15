function reducer (
  state = {data: '', startDate: new Date (), endDate: new Date ()},
  action
) {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        data: action.data,
      };
    case 'START_DATE':
      return {
        ...state,
        startDate: action.startDate,
      };
    case 'END_DATE':
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
}

export default reducer;
