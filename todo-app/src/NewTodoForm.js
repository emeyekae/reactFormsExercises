import React, { useState} from "react";
import { v4 as uuid } from 'uuid';

function NewTodoForm({ addTodo}) {
    const [task, setTask] = useState("");
    
    const handleChange = evt => {setTask(evt.target.value);
    };

    const getInput = evt => {
        evt.preventDefault();
        addTodo({ task, id: uuid() });
        setTask("");
    }

return (
    <div>
        <form onSubmit={ getInput }> 
        <label htmlFor="task">Task:</label>
        <input
            id="task" name="task" type="text" onChange={handleChange} value={task}
        />
        <button>New Todo</button>
        </form>
     </div>
    );
}

export default NewTodoForm;