import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/actions";

const SingleTodo = ({ todo }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };
  return (
    <div className="w-full p-2 rounded-sm shadow-sm border border-neutral-200 flex justify-between">
      <div>{todo.text}</div>
      <button className="bg-red-300 px-4 rounded-sm" onClick={handleDelete}>
        Sil
      </button>
    </div>
  );
};

export default SingleTodo;
