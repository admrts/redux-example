import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

const Form = () => {
  const dispatch = useDispatch();
  const [textTodo, setTextTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: textTodo,
      isDone: false,
      date: new Date(),
    };
    dispatch(addTodo(newTodo));
    setTextTodo("");
  };
  return (
    <form className="flex gap-5 w-full justify-center" onSubmit={handleSubmit}>
      <input
        value={textTodo}
        onChange={(e) => setTextTodo(e.target.value)}
        className="border shadow-sm border-emerald-300 rounded-sm outline-none px-2 py-1 w-full"
      />
      <button className="bg-emerald-300 px-4 py-1 rounded-sm" type="submit">
        Ekle
      </button>
    </form>
  );
};

export default Form;
