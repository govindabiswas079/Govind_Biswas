import * as React from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import Telegram from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';

export default function SpeedDialTooltipOpen() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const FacebookUrl = () => {
        window.open('https://www.facebook.com/govinda.biswas.980');
        setOpen(false);
    }
    const InstagramUrl = () => {
        window.open('https://www.instagram.com/prembiswas_07/');
        setOpen(false);
    }
    const TelegramUrl = () => {
        window.open('https://twitter.com/@Govinda_079');
        setOpen(false);
    }
    const LinkedInUrl = () => {
        window.open('https://www.linkedin.com/in/govinda-biswas-82b94a1b7');
        setOpen(false);
    }
    const GitHubUrl = () => {
        window.open('https://github.com/prem-pb');
        setOpen(false);
    }

    return (
        <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
            <Backdrop open={open} />
            <SpeedDial
                ariaLabel="SpeedDial tooltip example"
                sx={{ position: 'absolute', bottom: 16, left: 16 }}
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                <SpeedDialAction icon={<Facebook style={{ color: 'blue' }} />} tooltipTitle='Facebook' onClick={() => FacebookUrl()} />
                <SpeedDialAction icon={<Instagram style={{ color: 'purple' }} />} tooltipTitle='Instagram' onClick={() => InstagramUrl()} />
                <SpeedDialAction icon={<Telegram style={{ color: 'blue' }} />} tooltipTitle='Telegram' onClick={() => TelegramUrl()} />
                <SpeedDialAction icon={<LinkedIn style={{ color: 'blue' }} />} tooltipTitle='LinkedIn' onClick={() => LinkedInUrl()} />
                <SpeedDialAction icon={<GitHub />} tooltipTitle='GitHub' onClick={() => GitHubUrl()} />
            </SpeedDial>
        </Box>
    );
}
