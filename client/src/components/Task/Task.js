import { useDispatch } from "react-redux";
import { ReactComponent as MdClose } from "../../img/icons8-close.svg";
import { deleteTask, toggleCompleted } from "../../redux/tasksSlice";
import css from "./Task.module.css";
import axios from "axios";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    axios
      .delete("http://pics-io.vercel.app/api/message/delete", {
        data: {
          id: task.id,
        },
      })
      .then(function (response) {
        // handle success
        dispatch(deleteTask(task.id));
      })
      .catch(function (error) {
        // handle error
      })
      .finally(function () {
        // always executed
      });
  };

  const handleToggle = () => {
    axios
      .put("http://pics-io.vercel.app/api/message/update", {
        data: {
          id: task.id,
          body: task.text,
          completed: !task.completed,
        },
      })
      .then(function (response) {
        // handle success
        dispatch(toggleCompleted(task.id));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
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
