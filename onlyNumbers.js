const onlyNumbers = () => {
  const number = document.querySelector(selector);

  number.forEach(item => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/, '');
    });
  });
}

export default onlyNumbers;
