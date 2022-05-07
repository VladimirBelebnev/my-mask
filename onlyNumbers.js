const onlyNumbers = () => {
  const number = document.querySelectorAll(selector);

  number.forEach(item => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/, '');
    });
  });
};

export default onlyNumbers;
