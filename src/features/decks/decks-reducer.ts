import {Arrayitems, DecksType} from "./decks-api";

const initialState = {
  decks: [] as Arrayitems[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET-DECKS':
      return {...state,decks: action.data}

    default:
      return state
  }
}
export const SetDecksAC=(data:Arrayitems[])=>({type:'SET-DECKS' as const,data } )
type DecksActions =ReturnType<typeof SetDecksAC>
