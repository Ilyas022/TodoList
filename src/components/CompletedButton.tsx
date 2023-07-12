interface ICompletedButton {
  isCompleted: boolean
  onClick: any
}
const CompletedButton: React.FC<ICompletedButton> = ({
  isCompleted,
  onClick,
}: ICompletedButton): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={
        isCompleted
          ? 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
          : 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      }
    >
      {isCompleted ? 'Not Done' : 'Done'}
    </button>
  )
}

export default CompletedButton
