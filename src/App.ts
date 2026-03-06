import React, { useState, useEffect } from 'react';
import './styles/theme.css';
import { Task, Column } from './types/index';

const App = () => {
  const [columns, setColumns] = useState<Column[]>([
    {: 1, title: 'A Fazer', tasks: []    { id: 2, title: 'Em Curso', tasks [] },
    { id: 3, title: 'Concluído', tasks: [] },
  ]);

  [tasks, setTasks] = useState<Task[]);
  const [TaskTitle, setNewTaskTitle] =('');
  const [TaskDescription, setNewTaskDescription] = useState('');
  const [TaskPriority, setNewTaskPriority] = useState('low');
  const [searchQuery, setSearchQuery] =('');
  const [draggedTask, setDragTask] = useState<Task | null>(null);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (stored) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    const newTask: Task = {
      id: tasks.length + 1,
      title: newTaskTitle,
      description: newTaskDescription,
      priority: newTaskPriority,
      done: false,
    };
    setTasks([...tasks,Task]);
    setNewTaskTitle('');
    setNewTaskDescription('');
  };

  const handleTaskUpdate = (task: Task) => {
    const updatedTasks = tasks.map((t) => (t.id === task.id ? task : t));
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (task: Task) => {
    const updatedTasks = tasks.filter((t) => t.id !== task.id);
    setTasksTasks);
  };

 const handleDoneTask = (task: Task) => {
    const updatedTask: Task = { ...task, done: true };
    const updatedTasks = tasks.map((t) => (t.id === task.id ? updatedTask : t));
    setTasks(updatedTasks);
  };

  const handleDragStart = (task: Task) => {
    setDraggedTask(task);
  };

  const handleDragOver = (column: Column) => {
    if (draggedTask) {
      const updatedTasks = tasks.filter((t) => t.id !== draggedTask.id);
      const updatedColumn = { ..., tasks: [...column.tasks, draggedTask] };
      const updatedColumns = columns((c) => (c.id === updatedColumn.id ? updatedColumn : c));
      setColumns(updatedColumns);
      setTasks(updatedTasks);
    }
  };

  const handle = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="kanban-board">
      {columns.map((column) => (
        <div key={column.id} className="column" onDragOver={() => handleDragOver)}>
          <div className="column-header">
            <h2 className="column-title">{column}</h2>
          </div>
          <ul className="task">
            {column.tasks
              .filter((task) => task.title.toLowerCase().includes(searchQuery.toLowerCase()))
              .((task) => (
                <li key={task.id} className="task" draggable onDragStart={() => handleDragStart(task)}>
                 h3 className="task-title">{task.title}</h3>
                  <p>{task.description}</p>
                  <div className={`priority-indicator ${task.priority}-priority`}></div>
                  <button className="edit-task-button" onClick={() => handleTaskUpdate(task)}>
                   ar
                  </button>
                  <button className="delete-task-button onClick={() => handleDeleteTask(task)}>
                    Eliminar
                  </button>
                  <button className="done-task-button" onClick={() => handleDoneTask(task)}>
                    Concluído
                  </button>
               li>
              ))}
          </ul>
        </div>
      ))}
      <div className="add-task-form">
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Título da tarefa"
          className="search-input"
        />
        <input
          type="text"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
          placeholder="Descrição da tarefa"
          className="search-input"
        />
        <select value={newTaskPriority} onChange={(e) => setNewTaskPriority(e.target.value)}>
          <option value="low">Baixa</option>
          <option value="medium">Média</option>
          <option value="high">Alta</option>
        </select>
        <button className="add-task-button" onClick={handleAddTask}>
          Adicionar Tarefa
        </button>
      </div>
      <input
        type="text        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Pesquisar tarefas"
        className="search-input"
      />
    </div>
  );
};

export default App;