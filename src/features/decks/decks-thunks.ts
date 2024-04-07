import {AddDeckParams, Decks, DecksAPI} from "./decks-api";
import {Dispatch} from "redux";
import {SetDecksAC, SetNameDecksAC} from "./decks-reducer";

export const SetDecksThunkCreator = () => (dispatch: Dispatch) => {

    DecksAPI.getDecks().then((res) => {
        // console.log(res.data)
        dispatch(SetDecksAC(res.data.items))

    })
}
export const addDecksThunkCreator = (params: AddDeckParams) => (dispatch: Dispatch) => {
    DecksAPI.addDecks(params).then((res) => {
         console.log(res.data)
        dispatch(SetNameDecksAC(res.data))

    })
}