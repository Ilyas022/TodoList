import cn from 'classnames'
import AddTodoBar from './AddTodoBar'

interface IHeader {
  className?: string
}

const Header: React.FC<IHeader> = ({ className }: IHeader): JSX.Element => {
  return (
    <div className={cn('font-sans text-4xl text-center', className && className)}>
      <div className="mb-6">Todo list</div>
      <AddTodoBar />
    </div>
  )
}

export default Header
