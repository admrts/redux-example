import React from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="container mx-auto flex justify-center mt-5 flex-col gap-3">
      <Form />
      <TodoList />
    </div>
  );
};

export default App;
