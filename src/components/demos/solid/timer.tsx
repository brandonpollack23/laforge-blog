import { createSignal, createEffect } from "solid-js";

export const Timer = () => {
  let [time, setTime] = createSignal(0);
  let [running, setRunning] = createSignal(true);

  let interval: NodeJS.Timeout;
  createEffect(() => {
    if (running()) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 100); // Update every 100ms (1/10th of a second)
    } else {
      return clearInterval(interval);
    }
  });

  const buttonStyle =
    "px-2 py-1 text-blue-600 bg-gray-200 rounded border-solid border-black border-opacity-75";
  return (
    <div>
      <p>Time: {time() / 10} seconds</p>
      <ul class="space-x-2">
        <button class={buttonStyle} onClick={() => setRunning(true)}>
          Start
        </button>
        <button class={buttonStyle} onClick={() => setRunning(false)}>
          Stop
        </button>
        <button class={buttonStyle} onClick={() => setTime(0)}>
          Reset
        </button>
      </ul>
    </div>
  );
};
