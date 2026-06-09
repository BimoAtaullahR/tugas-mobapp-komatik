function validateTaskForm(title, description) {
  const errors = {};
  let isValid = true;

  if (!title || title.trim().length < 3) {
    errors.title = 'Judul minimal 3 karakter.';
    isValid = false;
  }

  if (!description || description.trim().length < 10) {
    errors.description = 'Deskripsi minimal 10 karakter.';
    isValid = false;
  }

  return { isValid, errors };
}

module.exports = { validateTaskForm };
