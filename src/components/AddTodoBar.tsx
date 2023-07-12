import { useState } from 'react'
import { useActions } from '../store/hooks/useActions'
import AddTodoInput from './AddTodoInput'

const AddTodoBar: React.FC = (): JSX.Element => {
  const [todoText, setTodoText] = useState<string>('')
  const { addTodo } = useActions()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (todoText.trim().length !== 0) {
      addTodo(todoText)
      setTodoText('')
    }
  }

  return (
    <form className="flex gap-4" onSubmit={(e) => handleSubmit(e)}>
      <AddTodoInput value={todoText} onChange={setTodoText} />
      <button
        type="submit"
        className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded"
      >
        Add
      </button>
    </form>
  )
}

export default AddTodoBar
