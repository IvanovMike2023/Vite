import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})
export const DecksAPI={
  getDecks(){
    return instance.get<DecksType>('v2/decks')
  },
  addDecks(params:AddDeckParams){
    return instance.post<Decks>('v1/decks',params)
  }
}

export type DecksType = {
  "items": Decks[]
  "pagination":  Pagination
  }
export type Decks =
  {
    "author": Autor
    "id": string
    "userId": string
    "name": string
    "isPrivate": boolean
    "cover": string
    "created": string
    "updated": string
    "cardsCount": number
  }
export type AddDeckParams={
    name:string
}
export type Autor={
  "id": string
  "name": string
}
export type Pagination={
  "currentPage": number
  "itemsPerPage": number
  "totalPages": number
  "totalItems": number
}
// {
//   "items": [
//   {
//     "author": {
//       "id": "string",
//       "name": "string"
//     },
//     "id": "string",
//     "userId": "string",
//     "name": "string",
//     "isPrivate": true,
//     "cover": "string",
//     "created": "2024-04-07T08:37:13.105Z",
//     "updated": "2024-04-07T08:37:13.105Z",
//     "cardsCount": 0
//   }
// ],
//     "pagination": {
//   "currentPage": 0,
//       "itemsPerPage": 0,
//       "totalPages": 0,
//       "totalItems": 0
// }
// }