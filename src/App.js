import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  // useState
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  // Adding the search form
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const [newTask, setNewTask] = useState(''); // Displace to UseState area
  const addTask = (task) => {
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const myNewTask = { id, description: task, completed: false };
    const listTasks = [...tasks, myNewTask];
    setTasks(listTasks);
  };

  const HandleAdd = (e) => {
    e.preventDefault();
    if (!newTask) return;
    addTask(newTask);
    setNewTask('');
  };

  const HandleCheck = (id) => {
    const listTasks = tasks.map((task) => (
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    setTasks(listTasks);
  };

  const HandleDelete = (id) => {
    const listTasks = tasks.filter((task) => task.id !== id);
    setTasks(listTasks);
  };

  // Adding ClearAllCompleted
  const [clearCompleted, setClearCompleted] = useState('');
  const HandleClearCompleted = () => {
    const listTasks = tasks.filter((task) => !task.completed);
    setTasks(listTasks);
  };

  return (
    <div className="App">
      <Header
        title="your daily list"
        length={tasks.length}
      />

      <Content
        newTask={newTask}
        setNewTask={setNewTask}
        HandleAdd={HandleAdd}
        // search handler
        search={search}
        setSearch={setSearch}
        // Check and Delete handlers
        tasks={tasks}
        HandleCheck={HandleCheck}
        HandleDelete={HandleDelete}
        // Clear completed tasks handlers
        clearCompleted={clearCompleted}
        setClearCompleted={setClearCompleted}
        HandleClearCompleted={HandleClearCompleted}
      />
      <Footer />
    </div>
  );
}

export default App;
