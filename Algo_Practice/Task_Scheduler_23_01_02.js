// leetcode.com/problems/task-scheduler

// Runtime:  281 ms (beats 15.68%)
// Memory Usage:  52.6 MB (beats 10.45%)
// Comment:  definitely overthought it (other solutions solved algebraically).

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  if (n === 0) return tasks.length;

  // loop through tasks, storing the freq of each in a hashmap/array
  const taskFrequencies = new Map();
  for (const task of tasks) {
    taskFrequencies.has(task)
      ? taskFrequencies.set(task, taskFrequencies.get(task) + 1)
      : taskFrequencies.set(task, 1);
  }

  // add each task in a priority queue, with its frequency as the priority
  const priorityQueue = new MaxPriorityQueue();
  let taskPriorities = taskFrequencies.entries();
  for (const [task, frequency] of taskPriorities) {
    priorityQueue.enqueue(task, frequency);
  }

  let timeUnits = 0;
  while (priorityQueue.size() > 0) {
    let countTasksCompletedInLoop = 0;
    let stillUnfinishedTasks = [];
    // loop through the tasks by their priority until number completed is n + 1 (enough 'cooldown' to return to first task)
    while (countTasksCompletedInLoop < n + 1 && priorityQueue.size() > 0) {
      const taskObject = priorityQueue.dequeue();
      if (taskObject.priority > 1) {
        // add task to array, if it is not complete
        taskObject.priority--;
        stillUnfinishedTasks.push(taskObject);
      }
      countTasksCompletedInLoop++;
      timeUnits++;
    }

    // add unfinished tasks back to the priority queue
    while (completedTasks.length > 0) {
      let taskObject = completedTasks.pop();
      priorityQueue.enqueue(taskObject.element, taskObject.priority);
    }

    // if queue is empty, all tasks are complete and no need for additional cooldown time.
    if (priorityQueue.size() == 0) return timeUnits;

    // if the count of tasks completed is less than n, then the system will need to 'idle' and cooldown, so add the difference to the time
    if (countTasksCompletedInLoop < n + 1)
      timeUnits = timeUnits + (n + 1 - countTasksCompletedInLoop);
  }
};
