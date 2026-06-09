const { addTask } = require('../taskUtils');

describe('taskUtils - addTask', () => {
  it('should add a new task to the array and return a new array', () => {
    const existingTasks = [
      { id: '1', title: 'Task 1', description: 'Desc 1', category: 'Kuliah', status: 'Belum' }
    ];
    const newTask = {
      title: 'Task 2',
      description: 'Desc 2',
      category: 'Pribadi'
    };
    
    const result = addTask(existingTasks, newTask);
    
    expect(result).toHaveLength(2);
    expect(result[1].title).toBe('Task 2');
    expect(result[1].status).toBe('Belum'); // Default status
    expect(result[1].id).toBeDefined(); // Should assign an ID
    // Verify pure function (no mutation)
    expect(existingTasks).toHaveLength(1);
  });
});
