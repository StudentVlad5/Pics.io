import { useDispatch } from "react-redux";
import { ReactComponent as MdClose } from "../../img/icons8-close.svg";
import { deleteTask, toggleCompleted } from "../../redux/tasksSlice";
import css from "./Task.module.css";
// import axios from "axios";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
        dispatch(deleteTask(task.id));
  };

  const handleToggle = () => {
        dispatch(toggleCompleted(task.id));
  };

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleToggle}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
