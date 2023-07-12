import { useTypedSelector } from '../store/hooks/useTypedSelector'
import TodoItem from './TodoItem'

const TodoList: React.FC = (): JSX.Element => {
  const { todos } = useTypedSelector((state) => state.todos)
  return (
    <div className="flex flex-col gap-5 overflow-auto max-h-[50vh] scrollbar pr-3">
      {todos.map((item) => {
        return <TodoItem key={item.id} id={item.id} text={item.text} isCompleted={item.completed} />
      })}
    </div>
  )
}

export default TodoList
