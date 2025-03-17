import { useState } from 'react';
import Header from './Header';
import List from './List';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

  const handleSubmit = () => {
    if (inputValue.trim()) {
      if (isEditing) {
        const updatedTasks = tasks.map((task, index) =>
          index === currentTaskIndex ? inputValue : task
        );
        setTasks(updatedTasks);
        setIsEditing(false);
        setCurrentTaskIndex(null);
      } else {
        setTasks([...tasks, inputValue]);
      }
      setInputValue('');
    }
  };

  const removeTask = (index) => {
    const newTasks = [];
    for (let i = 0; i < tasks.length; i++) {
      if (i !== index) {
        newTasks.push(tasks[i]);
      }
    }
    setTasks(newTasks);
  };

  const editTask = (index) => {
    setInputValue(tasks[index]);
    setIsEditing(true);
    setCurrentTaskIndex(index);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-md">
        <Header count={tasks.length} />

        <List tasks={tasks} onRemove={removeTask} onEdit={editTask} />

        <div className="flex p-4 gap-2">
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter Item" className="flex-1 px-4 py-2 border rounded-md focus:outline-none" />
            
          <button onClick={handleSubmit} className="px-4 py-2 bg-gray-100 text-gray-600 rounded-md border hover:bg-gray-200">
            {isEditing ? 'Update' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;