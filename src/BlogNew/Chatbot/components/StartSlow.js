import React from 'react';
import Button from '@mui/material/Button';

export default function StartSlow(props) {

    const preference = (preference) => {
        const { name, age } = props.state.userData;
        const category = props.state.userData.category;
        const product = props.state.data[category][preference];
        props.state.userData.product = product;
        props.actions.finalResult(name, age, preference, product.name);
    }

    return (
        <div>
            <Button variant="outlined" onClick={() => preference("fast")}>Photoshop</Button>
            <Button variant="outlined" onClick={() => preference("slow")}>ReactJS</Button>
        </div >
    )
}
