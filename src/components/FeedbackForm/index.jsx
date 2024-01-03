import { useState } from 'react';
import { Button, Container, TextField } from '@mui/material';
import { PhoneInput } from '../PhoneInput';
import { validation } from '../../helpers/validation';
import './style.scss';

export const FeedbackForm = () => {
    // const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    // const [serverError, setServerError] = React.useState('');
    const [formState, setFormState] = useState({
        values: {
            name: '',
            phone: '',
        },
        errors: {
            name: '',
            phone: '',
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            values: {
                ...prevState.values,
                [name]: value,
            },
        }));
    };

    const handleFocus = (name) => {
        setFormState((prevState) => ({
            ...prevState,
            errors: {
                ...prevState.errors,
                [name]: '',
            },
        }));
    };

    const clearForm = () => {
        setFormState((prevState) => ({
            ...prevState,
            values: {
                name: '',
                phone: '',
            },
        }));
    };
    const submit = (e) => {
        e.preventDefault();
        const fieldsToValidate = ['name', 'phone'];
        const validationErrors = validation(formState, fieldsToValidate);
        setFormState((prevState) => ({
            ...prevState,
            errors: validationErrors,
        }));

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        // setIsSubmitting(true);
        setIsSuccess(false);

        // dispatch(userLogIn(formState.values))
        //     .then(() => navigate('/dashboard'))
        //     .catch((error) => {
        //         setServerError(serverErrorMessage(error));
        //     });

        setFormState({
            values: {
                name: '',
                phone: '',
            },
            errors: {
                name: '',
                phone: '',
            },
        });
    };
    return (
        <section className="feedback">
            <Container maxWidth="lg">
                <h2 className="feedback__title">Для отримання зворотнього зв'язку, будь ласка, залиште свої дані:</h2>
                <div className="feedback__form">
                    <div className="feedback__form_inputs">
                        <TextField
                            onChange={handleChange}
                            margin="dense"
                            id="name"
                            label="Ім'я"
                            type="text"
                            fullWidth
                            variant="standard"
                            name="name"
                            helperText={formState.errors.name}
                            onFocus={() => handleFocus('name')}
                            error={!!formState.errors.name}
                            value={formState.values.name}
                        />

                        <PhoneInput
                            onFocus={() => handleFocus('phone')}
                            onChange={handleChange}
                            value={formState.values.phone}
                            error={!!formState.errors.phone}
                            helperText={formState.errors.phone}
                        />
                    </div>
                    <div className="feedback__form_btns">
                        <Button variant="contained" onClick={submit}>
                            Відправити
                        </Button>
                        <Button variant="outlined" onClick={clearForm}>
                            Скасувати
                        </Button>
                    </div>
                </div>
                <h3 className="feedback__subtitle">Або скористайтеся контактами, що наведені нижче:</h3>
            </Container>
        </section>
    );
};
