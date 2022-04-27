const textMask = (selector) => {
    const textInputs = document.querySelectorAll(selector);

    textInputs.forEach(input => {
        input.addEventListener('keypress', event => {
            if (event.key.match(/[^а-яё 0-9]/ig)) {
                event.preventDefault();
            }
            if (input.value.match(/[a-z]/ig)) {
                input.value = '';
            }
        }); 
    });
};

export default textMask;
