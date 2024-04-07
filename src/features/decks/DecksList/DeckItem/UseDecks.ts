import {useAppDispatch, useAppSelector} from "../../../../app/store";
import {useEffect} from "react";
import {SetDecksThunkCreator} from "../../decks-thunks";

export const UseDecks=()=>{
    const dispatch = useAppDispatch()
    const decks = useAppSelector((state) => state.decksReducer.decks)

    useEffect(() => {
        dispatch(SetDecksThunkCreator())
    }, [])
return {decks}
}
