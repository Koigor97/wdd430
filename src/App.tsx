import { useState } from "react";

import Header from "./components/Header";
import NewGoal from "./components/NewGoal";
import CourseGoalList from "./components/CourseGoalList";

import logoImg from "./assets/goals.jpg";

export type Goal = {
  title: string;
  description: string;
  id: number;
};

export type RemoveGoal = (goalId: number) => void;

function App() {
  const [goals, setGoals] = useState<Goal[]>([]);

  function handleAddGoal(newGoal: Goal) {
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  }

  const handleRemoveGoal: RemoveGoal = (goalId: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== goalId));
  };

  return (
    <main>
      <Header image={{ src: logoImg, alt: "A goal" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onRemoveGoal={handleRemoveGoal} />
    </main>
  );
}

export default App;
