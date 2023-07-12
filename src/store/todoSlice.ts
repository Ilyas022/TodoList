import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ITodo {
  id: number
  completed: boolean
  text: string
}

interface IInitialState {
  todos: ITodo[]
}

const initialState: IInitialState = {
  todos: [
    { id: 0, text: 'make dinner', completed: false },
    { id: 1, text: 'go for a walk', completed: false },
    { id: 2, text: 'coock chicken', completed: false },
  ],
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const todo = { id: state.todos.length, text: action.payload, completed: false }
      state.todos.push(todo)
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload)
    },
    updateTodoText: (state, action: PayloadAction<{ id: number; text: string }>) => {
      const todo = state.todos.find((item) => item.id === action.payload.id)
      todo!.text = action.payload.text
    },
    updateTodoState: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((item) => item.id === action.payload)
      todo!.completed = !todo!.completed
    },
  },
})

export default todoSlice
