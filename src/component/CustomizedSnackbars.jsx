import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({ show, showError, handleClose, error }) {

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={show} autoHideDuration={10000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Your message has been successfully sent. I will contact you soon.
                </Alert>
            </Snackbar>
            <Snackbar open={showError} autoHideDuration={10000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                   We facing some server issues, Please re-send message.
                </Alert>
            </Snackbar>
            <Snackbar open={error} autoHideDuration={10000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    unable to send your message. Please try again.
                </Alert>
            </Snackbar>
        </Stack>
    );
}
