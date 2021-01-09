import { ADD_TASK, DONE_TASK, EDIT_TASK } from "../actionsTypes/Constants";
const initialState = {
  list: [],
  isDone: false
};

//my suggestion would be
const ReducerTask = (state = initialState, action) => {
  const {type , payload} = action;

  switch (type) {
    case ADD_TASK:
      return{
        ...state,
        list: [payload , ...state.list],
      }
      case DONE_TASK:
        return{
          ...state,
          isDone:true,
         
        }

      
      
  
    default:
      return state;
  }
}
//Your work
// const ReducerTask = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TASK:
//       return { ...state, list: [action.payload, ...state.list] };
//     case DONE_TASK:
//       return {
//         state,
//         list: state.list.map((el) =>
//           el.payload === action.payload ? { ...el, isDone: !el.isDone } : state
//         ),
//       };
//     case EDIT_TASK:
//       return {
//         ...state,
//         list: state.list.map((el) =>
//           el.id === action.payload.id ? action.payload : el
//         ),
//       };
//     default:
//       return state;
//   }
// };

export default ReducerTask;
