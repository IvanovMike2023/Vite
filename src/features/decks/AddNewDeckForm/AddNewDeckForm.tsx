import s from './AddNewPostForm.module.css'
import { useForm } from 'react-hook-form'
import {useAppDispatch} from "../../../app/store";
import {addDecksThunkCreator} from "../decks-thunks";

type FormValues = {
  name: string
}

export const AddNewDeckForm = () => {
  const dispatch =useAppDispatch()
  const {
    register,
      reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
    },
  })

  const onSubmit = (data: FormValues) => {
    dispatch(addDecksThunkCreator(data)).then(()=>reset())
    //console.log(data)

  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={s.label}>
        Deck name
        <input
          {...register('name', {
            required: 'Name is required',
            minLength: {
              value: 3,
              message: 'Name must be longer than or equal to 3 characters',
            },
          })}
          autoComplete="off"
        />
        <p className={s.errorMessage}>{errors.name && errors.name.message}</p>
      </label>
      <button type="submit">Add new deck</button>
    </form>
  )
}
