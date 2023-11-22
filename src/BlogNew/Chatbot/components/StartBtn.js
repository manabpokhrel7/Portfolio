import React from 'react';

import Button from '@mui/material/Button';

export default function StartBtn(props) {

    const initialAction = () => {
        props.actions.initialAction();
    }

    return (
        <div>
            <Button variant="outlined" onClick={() => initialAction()}>Click me to start</Button>
        </div >
    )
}
