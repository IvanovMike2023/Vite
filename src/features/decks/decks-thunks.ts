import {Arrayitems, DecksAPI} from "./decks-api";
import {Dispatch} from "redux";
import {SetDecksAC} from "./decks-reducer";

export const SetDecksThunkCreator = (data:Arrayitems[]) => (dispatch: Dispatch) => {

    DecksAPI.getDecks().then((res) => {
        // console.log(res.data)
        dispatch(SetDecksAC(res.data.items))

    })
}