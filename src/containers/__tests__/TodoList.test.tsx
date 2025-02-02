import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import { TodoList } from '../TodoList'
import { Todo } from '../../types/todo'

describe('TodoList', () => {
  const mockTodos: Todo[] = [
    { id: 1, text: 'テストタスク1', completed: false },
    { id: 2, text: 'テストタスク2', completed: true }
  ]
  const mockOnToggle = vi.fn()
  const mockOnDelete = vi.fn()

  test('すべてのTodoアイテムが表示されること', () => {
    render(
      <TodoList
        todos={mockTodos}
        onToggle={mockOnToggle}
        onDelete={mockOnDelete}
      />
    )

    expect(screen.getByText('テストタスク1')).toBeInTheDocument()
    expect(screen.getByText('テストタスク2')).toBeInTheDocument()
  })

  test('Todoアイテムのトグルが正しく動作すること', () => {
    render(
      <TodoList
        todos={mockTodos}
        onToggle={mockOnToggle}
        onDelete={mockOnDelete}
      />
    )

    const checkboxes = screen.getAllByRole('checkbox')
    fireEvent.click(checkboxes[0])

    expect(mockOnToggle).toHaveBeenCalledWith(1)
  })

  test('Todoアイテムの削除が正しく動作すること', () => {
    render(
      <TodoList
        todos={mockTodos}
        onToggle={mockOnToggle}
        onDelete={mockOnDelete}
      />
    )

    const deleteButtons = screen.getAllByRole('button', { name: /削除/i })
    fireEvent.click(deleteButtons[0])

    expect(mockOnDelete).toHaveBeenCalledWith(1)
  })
})
