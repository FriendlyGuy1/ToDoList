
const TaskList = (props) => {
    console.log(props.list)
  return (
    <table>
        <thead>
            <tr>
                <th>Nr.</th>
                <th>task</th>
                <th>is complete</th>
            </tr>
        </thead>
        <tbody>
        {
            props.list.map((task,index) =>(
                <tr key={index} >
                    <td>{index + 1}</td>
                    <td>{task.text}</td>
                    <td>{task.isCompleted ? "Completed" : "In progress"}</td>
                </tr>
            ))
        }
        </tbody>
    </table>
  )
}

export default TaskList