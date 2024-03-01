// Import the hook
import { useDispatch } from 'react-redux';
// Import the action generator
import { deleteTask } from '../../redux/actions';
export const Task = ({ task }) => {
  // Get a link to the function for sending actions
  const dispatch = useDispatch();
  // Call the action generator and pass the task ID
  // Send the result - task deletion action
  const handleDelete = () => dispatch(deleteTask(task.id));
  return (
    <div>
      <input type="checkbox" />
      <p>{task.text}</p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
