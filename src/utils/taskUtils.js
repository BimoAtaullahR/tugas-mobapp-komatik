// taskUtils.js
// Deep module for manipulating tasks array

function addTask(tasks, newTask) {
  const taskWithDefaults = {
    ...newTask,
    id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
    status: 'Belum'
  };
  return [...tasks, taskWithDefaults];
}

module.exports = {
  addTask
};
