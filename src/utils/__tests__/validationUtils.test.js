const { validateTaskForm } = require('../validationUtils');

describe('validationUtils', () => {
  describe('validateTaskForm', () => {
    it('should return errors if title is less than 3 chars', () => {
      const result = validateTaskForm('ab', '1234567890');
      expect(result.isValid).toBe(false);
      expect(result.errors.title).toBe('Judul minimal 3 karakter.');
      expect(result.errors.description).toBeUndefined();
    });

    it('should return errors if description is less than 10 chars', () => {
      const result = validateTaskForm('abc', '123456789');
      expect(result.isValid).toBe(false);
      expect(result.errors.title).toBeUndefined();
      expect(result.errors.description).toBe('Deskripsi minimal 10 karakter.');
    });

    it('should return multiple errors if both are invalid', () => {
      const result = validateTaskForm('ab', 'short');
      expect(result.isValid).toBe(false);
      expect(result.errors.title).toBe('Judul minimal 3 karakter.');
      expect(result.errors.description).toBe('Deskripsi minimal 10 karakter.');
    });

    it('should return isValid true if both are valid', () => {
      const result = validateTaskForm('Tugas Akhir', 'Ini adalah deskripsi yang cukup panjang');
      expect(result.isValid).toBe(true);
      expect(result.errors).toEqual({});
    });
  });
});
