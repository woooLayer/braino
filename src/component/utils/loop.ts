export class LoopTask {
  private taskFn: () => void;
  private intervalId: number;
  private intervalTime: number;

  constructor(intervalTime: number, taskFn: () => void) {
    this.taskFn = taskFn;
    this.intervalId = 0;
    this.intervalTime = intervalTime;
  }

  // Start loop task
  start() {
    this.intervalId = setInterval(this.taskFn, this.intervalTime);
  }

  // Stop loop task
  stop() {
    clearInterval(this.intervalId);
  }
}
