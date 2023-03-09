import { useState } from "react"

import NewTask from "./NewTask"
import TaskList from "./TaskList"

    const ToDoMain = () => {
        const [tasks,setTasks] = useState([
            {
                id: "1",
                text: "Go fishing",
                isCompleted: true
            },
            {
                id: "2",
                text: "Go pet your cat",
                isCompleted: false
            },
            {
                id: "3",
                text: "Do your homework",
                isCompleted: false
            }
        ]);

console.log(tasks)

        return (
            <div>
                <TaskList list={tasks}/>
                <NewTask/>
            </div> 
        ) 
    }

export default ToDoMain