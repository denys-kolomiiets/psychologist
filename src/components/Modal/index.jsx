import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { validation } from '../../helpers/validation';
// import CircularProgress from '@mui/material/CircularProgress';
// import { serverErrorMessage } from '../../helpers/serverErrorMsg';
import { PhoneInput } from '../PhoneInput';
import './style.scss';

export default function Modal(props) {
    const { open, onClose } = props;
    // const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);
    // const [serverError, setServerError] = React.useState('');
    const [formState, setFormState] = React.useState({
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
        <div>
            <Dialog open={open} onClose={onClose}>
                <DialogContent>
                    <DialogContentText>
                        {isSuccess
                            ? 'Дякуємо за звернення! Очікуйте на дзвінок!'
                            : "Будь ласка, залиште свої дані для зворотнього зв'язку:"}
                    </DialogContentText>
                </DialogContent>
                {!isSuccess && (
                    <>
                        <DialogContent>
                            <TextField
                                onChange={handleChange}
                                autoFocus
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
                        </DialogContent>
                        <DialogActions sx={{ position: 'relative' }}>
                            <div className="spinner" style={{ position: 'absolute', top: '-20%', left: '40%' }}>
                                {/* {isSubmitting && <CircularProgress />} */}
                            </div>
                            <Button variant="outlined" onClick={onClose}>
                                Скасувати
                            </Button>

                            <Button variant="contained" onClick={submit}>
                                Відправити
                            </Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>
        </div>
    );
}
