import { useSelector } from "react-redux";
import SingleTodo from "./SingleTodo";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todoReducer);

  return (
    <div className="flex flex-col gap-3">
      {todos.map((todo, idx) => (
        <SingleTodo todo={todo} key={idx} />
      ))}
    </div>
  );
};

export default TodoList;
