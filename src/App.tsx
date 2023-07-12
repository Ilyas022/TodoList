import Header from './components/Header'
import TodoList from './components/TodoList'

const App: React.FC = (): JSX.Element => {
  return (
    <div className="h-full w-full bg-gray-600 flex items-center justify-center">
      <div className="p-3 bg-purple-400 w-full sm:w-5/6 max-w-[750px]">
        <Header className="mb-10" />
        <TodoList />
      </div>
    </div>
  )
}

export default App
