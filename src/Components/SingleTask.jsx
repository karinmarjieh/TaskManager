export default function SingleTask({task}) {
 
    return (
      <>
        <h3>{task.taskTitle}</h3>
        <span>{task.taskDescription}</span>
      </>
    );
  };

