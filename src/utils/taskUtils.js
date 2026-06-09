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

function toggleTaskStatus(tasks, taskId) {
  return tasks.map(task => {
    if (task.id === taskId) {
      return {
        ...task,
        status: task.status === 'Belum' ? 'Selesai' : 'Belum'
      };
    }
    return task;
  });
}

function deleteTask(tasks, taskId) {
  return tasks.filter(task => task.id !== taskId);
}

function filterTasksByStatus(tasks, status) {
  if (status === 'Semua') {
    return tasks;
  }
  return tasks.filter(task => task.status === status);
}

module.exports = {
  addTask,
  toggleTaskStatus,
  deleteTask,
  filterTasksByStatus
};
