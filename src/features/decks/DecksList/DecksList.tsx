import s from './DecksList.module.css'
import {DeckItem} from "./DeckItem/DeckItem";
import {UseDecks} from "./DeckItem/UseDecks";

export const DecksList = () => {

   const {decks}=UseDecks()
    return <ul className={s.list}>{decks.map(el => <DeckItem deck={el} key={el.id}/>)}</ul>
}
