import React from 'react';

const List = ({ tasks, onRemove, onEdit }) => {
  return (
    <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
      {tasks.map((task, index) => (
        <div key={index} className="flex justify-between items-center px-6 py-4">
          <span className="text-gray-700">{task}</span>
          <div className="flex gap-2">
            <button className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-300"
              onClick={() => onEdit(index)}> ✎ </button>
            <button className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-300"
              onClick={() => onRemove(index)}> × </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;