import MaskedInput from 'react-text-mask';
import { TextField } from '@mui/material';
export const PhoneInput = (props) => {
    const { onFocus, onChange, value, error, helperText } = props;
    const phoneMask = ['+', '3', '8', '(', /\d/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

    return (
        <>
            <MaskedInput
                mask={phoneMask}
                onFocus={onFocus}
                onChange={onChange}
                name="phone"
                placeholder="+38(0__)___-__-__"
                render={(innerRef, props) => (
                    <TextField
                        {...props}
                        value={value}
                        type="tel"
                        margin="dense"
                        variant="standard"
                        helperText={helperText}
                        error={error}
                        fullWidth
                        label="Номер телефону"
                        inputRef={innerRef}
                    />
                )}
            />
        </>
    );
};
