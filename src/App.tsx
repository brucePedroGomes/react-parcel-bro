import { ChangeEvent, FormEvent, useState } from "react";
import Parcel from "single-spa-react/parcel";

export const App = ({ name }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatchEvent(
      new CustomEvent("@rpg/react-parcel-bro/todo/add-task", {
        detail: {
          id: Math.random().toPrecision(3),
          describe: task,
        },
      })
    );
    setTask("");
  };

  const handleClick = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  return (
    <>
      <h1>{name}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleClick} value={task} />
        <button type="submit">Add</button>
      </form>
      <Parcel config={() => System.import("@rpg/react-parcel")} />
    </>
  );
};
