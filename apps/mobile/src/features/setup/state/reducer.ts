import * as Actions from './actions';

export const initialState: any = {};
export default function (state = initialState, action: any) {
  switch (action.type) {
    case Actions.SELECT_THEME:
      return {...state, ...action.payload};
    default:
      return state;
  }
}
