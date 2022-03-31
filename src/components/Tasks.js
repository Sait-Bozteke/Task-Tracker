import Duty from "./Duty";

const Tasks = ({ tasks, deleteTask, toggleDone, deleteAllTasks}) => {
  return (
    <div>
      <div>
        {tasks.map((task) => (
          <Duty duty={task} deleteTask={deleteTask} toggleDone={toggleDone} />
        ))}
      </div>

      <div className="header">
        <button
          className="btn"
          style={{ backgroundColor: "red" }}
          onClick={deleteAllTasks}
        >
          
          DELETE ALL TASKS LIST
        </button>
      </div>
    </div>
  );
};

export default Tasks;
