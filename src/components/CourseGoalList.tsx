import { type ReactNode } from "react";

import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";
import { type Goal, type RemoveGoal } from "../App";

export default function CourseGoalList({
  goals,
  onRemoveGoal,
}: {
  goals: Goal[];
  onRemoveGoal: RemoveGoal;
}) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">You have no goals yet. Start adding some!</InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length > 5) {
    warningBox = (
      <InfoBox mode="warning">
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal
              title={goal.title}
              goalId={goal.id}
              onRemove={onRemoveGoal}
            >
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
