interface IRemoveButton {
  onClick: any
}

const RemoveButton: React.FC<IRemoveButton> = ({ onClick }: IRemoveButton): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={'bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'}
    >
      Remove
    </button>
  )
}

export default RemoveButton
