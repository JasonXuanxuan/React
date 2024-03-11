import './App.css';
import { Fragment, useState, useReducer } from 'react';

let nextId = 3;
const initialTasks = [
  { id: 0, text: '参观卡夫卡博物馆', done: true },
  { id: 1, text: '看木偶戏', done: false },
  { id: 2, text: '打卡列侬墙', done: false },
];

function App() {
  // 把所有的逻辑处理放到了tasksReducer(tasks,action)中
  function tasksReducer(tasks, action) {
    switch (action.type) {
      case 'added': {
        return [
          ...tasks,
          {
            id: action.id,
            text: action.text,
            done: false,
          },
        ];
      }
      case 'changed': {
        return tasks.map((t) => {
          if (t.id === action.task.id) {
            return action.task;
          } else {
            return t;
          }
        });
      }
      case 'deleted': {
        return tasks.filter((t) => t.id !== action.id);
      }
      default: {
        throw Error('未知 action: ' + action.type);
      }
    }
  }
  // 在所有事件响应函数中分配了dispatch
  function handleAddTask(text) {
    dispatch({
      // 以下构成了一个action对象
      type: 'added',
      id: nextId++,
      text: text,  
    })
  }
  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task,     
    })
  }
  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted', 
      id: taskId,      
    })
  }
  // 1. 定义常量tasks,将initialTasks的值赋给tasks 
  // 2. 在每个事件函数中定义dispatch({type:'',id:}), dispatch中的{}数据格式为一个action对象 
  // 3. 定义一个tasksReducer(tasksti,acon)函数, 承担事件函数逻辑处理。 tasks的值为1.中的tasks, action是事件函数中定义的{type:'',id:}
  const [tasks,dispatch] = useReducer(tasksReducer,initialTasks)
  
  return (
    <Fragment>
      <h1>布拉格的行程安排</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </Fragment>
  );
}
export function AddTask({ onAddTask }) {
  const [text, setText] = useState('');
  return (
    <Fragment>
      <input
        placeholder="添加任务"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText('');
          onAddTask(text);
        }}>
        添加
      </button>
    </Fragment>
  );
}
export function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <Fragment>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>保存</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>编辑</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {taskContent}
      <button onClick={() => onDelete(task.id)}>删除</button>
    </label>
  );
}
export default App;
