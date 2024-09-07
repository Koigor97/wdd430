import { type FormEvent, useRef } from "react";
import { type Goal } from "../App";

export default function NewGoal({
  onAddGoal,
}: {
  onAddGoal: (newGoal: Goal) => void;
}) {
  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const goal = goalRef.current?.value ?? "";
    const summary = summaryRef.current?.value ?? "";
    const newGoal: Goal = {
      title: goal,
      description: summary,
      id: Math.random(),
    };
    onAddGoal(newGoal);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input type="text" id="goal" ref={goalRef} />
      </p>
      <p>
        <label htmlFor="summary">Summary</label>
        <input type="text" id="summary" ref={summaryRef} />
      </p>
      <button>Add Goal</button>
    </form>
  );
}
