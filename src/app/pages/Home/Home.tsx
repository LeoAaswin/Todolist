"use client";
import { useState, KeyboardEvent, ChangeEvent } from 'react';
import './Home.scss';

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const removeTask = (index: number) => {
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      addTask();
    }
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <div className='input'>
        <textarea
          placeholder='Enter your task.......'
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button className='btn' onClick={addTask}>Add</button>
      </div>
      <div className='list'>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button className='remove-btn' onClick={() => removeTask(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
