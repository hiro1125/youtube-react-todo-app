import React, {useState} from 'react'

export const InputForm = ({taskList, setTaskList}) => {

  const [inputText, setInputText] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (inputText !== "" && inputText.trim(0)) {
      setTaskList([
        ...taskList,
        {id: taskList.length, text: inputText, completed: false, time: new Date().toLocaleString(),
        },
      ]);
      setInputText("");
    }

  };


const handleChange = (event) => {
  setInputText(event.target.value);
};

const handleAllDelete = () => {
  alert('本当にすべてを削除しますか');
  return setTaskList([]);
}

  return (
    <div className='inputForm'>
      <form onSubmit={addTask}>
        <input type = "text" onChange={handleChange} value={inputText} />
        <button  className='AddButton' onClick={addTask}>
        <i className="fas fa-plus-square"></i>
        </button>
        <button className='AllDelete'
        onClick={handleAllDelete}
        disabled={taskList.length === 0}
        >
          <i className="fas fa-trash"></i>
        </button>
      </form>
    </div>
  );
};
