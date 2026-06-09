const { addTask, toggleTaskStatus } = require('../taskUtils');

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

describe('taskUtils - toggleTaskStatus', () => {
  it('should toggle task status from Belum to Selesai', () => {
    const tasks = [
      { id: '1', title: 'Task 1', status: 'Belum' },
      { id: '2', title: 'Task 2', status: 'Belum' }
    ];
    
    const result = toggleTaskStatus(tasks, '1');
    
    expect(result[0].status).toBe('Selesai');
    expect(result[1].status).toBe('Belum');
    expect(tasks[0].status).toBe('Belum'); // pure function check
  });

  it('should toggle task status from Selesai to Belum', () => {
    const tasks = [
      { id: '1', title: 'Task 1', status: 'Selesai' }
    ];
    
    const result = toggleTaskStatus(tasks, '1');
    
    expect(result[0].status).toBe('Belum');
  });

  it('should not change other tasks', () => {
    const tasks = [
      { id: '1', title: 'Task 1', status: 'Selesai' },
      { id: '2', title: 'Task 2', status: 'Belum' }
    ];
    
    const result = toggleTaskStatus(tasks, '3'); // non-existent ID
    
    expect(result).toEqual(tasks);
  });
});
