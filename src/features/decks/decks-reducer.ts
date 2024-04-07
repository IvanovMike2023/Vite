import {Decks, DecksType} from "./decks-api";

const initialState = {
    decks: [] as Decks[], // todo: add type
    searchParams: {
        name: '',
    },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
    //console.log(state)
    switch (action.type) {
        case 'SET-DECKS':
            return {...state, decks: action.data}
        case 'SET-NAME-DECKS':
            console.log(action.deck)
            return {...state,decks: [action.deck,...state.decks]}

        default:
            return state
    }
}
export const SetDecksAC = (data: Decks[]) => ({type: 'SET-DECKS' as const, data})
export const SetNameDecksAC = (deck: Decks) => ({type: 'SET-NAME-DECKS' as const, deck})
type SetActions = ReturnType<typeof SetDecksAC>
type PostActions = ReturnType<typeof SetNameDecksAC>
type DecksActions = SetActions | PostActions
