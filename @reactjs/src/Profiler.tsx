import { Profiler } from "react";
import { TodoList } from "./hoc/example";

export function ProfilerExample() {
  const renderCallback = (
    id,
    phase,
    actualDirection,
    baseDuration,
    startTime,
    commitTime,
    interactions
  ) => {
    console.log({
      id,
      phase,
      actualDirection,
      baseDuration,
      startTime,
      commitTime
    });
    console.log(commitTime - startTime);
    console.log(interactions.values());
  };

  return (
    <Profiler id="todoList" onRender={renderCallback}>
      <TodoList />
    </Profiler>
  );
}
