import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TodoList, { DateTodo } from './components/task2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoList />
    <DateTodo weekdayLabel="Wednesday" />
  </StrictMode>,
)