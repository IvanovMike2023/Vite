import s from './DecksList.module.css'
import {DecksAPI} from "../decks-api";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {SetDecksAC} from "../decks-reducer";
import {DeckItem} from "./DeckItem/DeckItem";
import {useAppDispatch, useAppSelector} from "../../../app/store";
import {SetDecksThunkCreator} from "../decks-thunks";

export const DecksList = () => {

    const dispatch = useAppDispatch()
    const decks = useAppSelector((state) => state.decksReducer.decks)

    useEffect(() => {
       dispatch(SetDecksThunkCreator(decks))
    }, [])
    return <ul className={s.list}>{decks.map(el => <DeckItem deck={el} key={el.id}/>)}</ul>
}
