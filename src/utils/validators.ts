export const productFormValidator = (field: string, inputValue: string | { [key: string]: string }) => {
  const validateFields = ['name', 'price', 'image', 'weight', 'brand', 'category'];
  let value = '';

  if (!validateFields.includes(field)) {
    return null;
  }

  if (typeof inputValue === 'string') {
    value = inputValue.trim();
  }

  if (typeof inputValue === 'object') {
    if (inputValue.id) {
      value = inputValue.id.trim();
    } else {
      value = '';
    }
  }

  if (value.length === 0) {
    return {
      [field]: 'Поле не может быть пустым',
    };
  }

  if (field === 'image') {
    const regexp = /(https?:\/\/.*\.(?:png|jpg|jpeg))/;
    const isImageUrl = regexp.test(value);

    if (isImageUrl) return null;

    return {
      [field]: 'Укажите прямую ссылку на изображение с расширением .png, .jpg, jpeg',
    };
  }

  return null;
};

export const categoryFormValidator = (field: string, inputValue: string | { [key: string]: string }) => {
  const validateFields = ['name', 'url'];

  if (!validateFields.includes(field) || typeof inputValue === 'object') {
    return null;
  }

  if (inputValue.trim().length === 0) {
    return {
      [field]: 'Поле не может быть пустым',
    };
  }

  if (field === 'url') {
    const regexp = /^[0-9A-Za-z-]+$/;
    const url = regexp.test(inputValue);

    if (url) return null;

    return {
      [field]: 'URL может содержать только цифры, буквы и дефисы',
    };
  }
  return null;
};

export const brandFormValidator = (field: string, inputValue: string | { [key: string]: string }) => {
  const validateFields = ['name', 'url'];

  if (!validateFields.includes(field) || typeof inputValue === 'object') {
    return null;
  }

  if (inputValue.trim().length === 0) {
    return {
      [field]: 'Поле не может быть пустым',
    };
  }

  if (field === 'url') {
    const regexp = /^[0-9A-Za-z-]+$/;
    const url = regexp.test(inputValue);

    if (url) return null;

    return {
      [field]: 'URL может содержать только цифры, буквы и дефисы',
    };
  }
  return null;
};

export const cartFormValidator = (field: string, inputValue: string | { [key: string]: string }) => {
  const validateFields = ['name', 'phone', 'address'];

  if (!validateFields.includes(field) || typeof inputValue === 'object') {
    return null;
  }

  if (field === 'name') {
    if (inputValue.replace(/[a-zA-Zа-яА-Я\s]/g, '').length > 0){
      return {
        [field]: 'Поле не может содержать цифру',
      };
    }
  }

  if (inputValue.trim().length === 0) {
    return {
      [field]: 'Поле не может быть пустым',
    };
  } else if (inputValue.trim().length < 3) {
    return {
      [field]: 'Минимальная число букв 3',
    };
  }
  return null;
};
