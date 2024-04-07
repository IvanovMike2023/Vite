import {AddDeckParams, Decks, DecksAPI} from "./decks-api";
import {Dispatch} from "redux";
import {SetDecksAC, SetNameDecksAC} from "./decks-reducer";

export const SetDecksThunkCreator = () => (dispatch: Dispatch) => {

    DecksAPI.getDecks().then((res) => {
        dispatch(SetDecksAC(res.data.items))

    })
}
export const addDecksThunkCreator = (params: AddDeckParams) =>async (dispatch: Dispatch) => {
    return DecksAPI.addDecks(params).then((res) => {
        dispatch(SetNameDecksAC(res.data))

    })
}