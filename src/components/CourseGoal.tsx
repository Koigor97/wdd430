import { type RemoveGoal } from "../App";

type CourseGoalProps = {
  title: string;
  goalId: number;
  children: React.ReactNode;
};

export default function CourseGoal({
  title,
  goalId,
  children,
  onRemove,
}: CourseGoalProps & {
  onRemove: RemoveGoal;
}) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onRemove(goalId)}>Delete</button>
    </article>
  );
}
