import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import CreateTask from './components/CreateTask';
import ListTask from './components/ListTask';

const App = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")))
  }, []);
  console.log(tasks);
  return (
    <DndProvider backend={HTML5Backend}>
    <Toaster></Toaster>
      <div className="bg-slate-100 w-screen h-screen flex flex-col items-center gap-16 pt-32">
        <CreateTask tasks={tasks} setTasks={setTasks}></CreateTask>
        <ListTask tasks={tasks} setTasks={setTasks}></ListTask>
      </div>
    </DndProvider>
  );
};

export default App;