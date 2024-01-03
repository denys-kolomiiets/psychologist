import Button from '@mui/material/Button';
import './style.scss';
import { useState } from 'react';
import Modal from '../Modal';

export const AppointmentCard = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="appointment__card">
            <div className="appointment__text">
                <p>Бажаєте записатись на прийом?</p>
            </div>
            <Button onClick={() => setOpen(true)} disableRipple variant="contained">
                Записатись
            </Button>
            <Modal open={open} onClose={() => setOpen(false)} />
        </div>
    );
};
