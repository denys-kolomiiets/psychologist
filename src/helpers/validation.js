/* eslint-disable no-useless-escape */
export function validation(state, fieldsToValidate) {
    const errors = {};

    const shouldValidateField = (fieldName) => !fieldsToValidate || fieldsToValidate.includes(fieldName);

    // name
    if (shouldValidateField('name')) {
        if (state.values.name === '') {
            errors.name = 'Заповніть поле!';
        } else if (!/^[A-Za-zА-Яа-яЁёЇїІіЄє]{2,30}$/.test(state.values.name)) {
            errors.name = "Введіть коректне ім'я!";
        }
    }

    // Phone
    if (shouldValidateField('phone')) {
        if (!state.values.phone) {
            errors.phone = 'Заповніть поле!';
        } else if (
            !/((\+?3|8)[ \-] ?)?((\(\d{3}\))|(\d{3}))?([ \-])?(\d{3}[\- ]?\d{2}[\- ]?\d{2})$/.test(state.values.phone)
        ) {
            errors.phone = 'Введіть коректний телефонний номер!';
        }
    }
    return errors;
}
