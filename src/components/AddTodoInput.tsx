interface IAddTodoInput {
  value: string
  onChange: React.Dispatch<React.SetStateAction<string>>
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const AddTodoInput: React.FC<IAddTodoInput> = ({
  value,
  onChange,
  onKeyDown: handleKeyDown,
}: IAddTodoInput): JSX.Element => {
  return (
    <input
      className="text-xl bg-purple-300 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-gray-500 focus-visible:outline-none block w-full p-2.5 "
      type="text"
      placeholder="Add todo"
      value={value}
      onKeyDown={(e) => handleKeyDown && handleKeyDown(e)}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.currentTarget.value)}
    />
  )
}

export default AddTodoInput
