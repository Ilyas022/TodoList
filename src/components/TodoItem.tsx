import { useState } from 'react'
import { useActions } from '../store/hooks/useActions'
import CompletedButton from './CompletedButton'
import EditButton from './EditButton'
import RemoveButton from './RemoveButton'
import AddTodoInput from './AddTodoInput'
import cn from 'classnames'

interface ITodoItem {
  text: string
  isCompleted: boolean
  id: number
}

const TodoItem: React.FC<ITodoItem> = ({ isCompleted, text, id }: ITodoItem): JSX.Element => {
  const { removeTodo, updateTodoText, updateTodoState } = useActions()
  const [isTodoEditing, setisTodoEditing] = useState<boolean>(false)
  const [editedText, setEditedText] = useState<string>(text)

  const handleEdit = () => {
    if (!isTodoEditing) {
      setisTodoEditing(true)
      return
    }
    if (editedText.trim()) {
      updateTodoText({ id, text: editedText })
      setisTodoEditing(false)
      return
    }
    setEditedText(text)
    setisTodoEditing(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleEdit()
    }
  }

  return (
    <div className="flex justify-between gap-4 items-center flex-col sm:flex-row">
      {isTodoEditing ? (
        <AddTodoInput value={editedText} onKeyDown={handleKeyDown} onChange={setEditedText} />
      ) : (
        <div
          className={cn(
            isCompleted ? 'text-sky-700 line-through' : undefined,
            'sm:max-w-xs self-start'
          )}
        >
          {text}
        </div>
      )}
      <div className="flex flex-row gap-3">
        <EditButton onClick={() => handleEdit()} />
        <CompletedButton isCompleted={isCompleted} onClick={() => updateTodoState(id)} />
        <RemoveButton onClick={() => removeTodo(id)} />
      </div>
    </div>
  )
}

export default TodoItem
