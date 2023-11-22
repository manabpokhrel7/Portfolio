// StartSlow.js

import React from 'react';
import Button from '@mui/material/Button';

export default function StartSlow(props) {
  const { category } = props.state.userData;

  const preference = (preference) => {
    const { name, age } = props.state.userData;
    const product = props.state.data[category][preference];
    props.state.userData.product = product;
    props.actions.finalResult(name, age, preference, product.name);
  };

  const renderButtons = () => {
    if (category === 'kid') {
      return (
        <>
          <Button variant="outlined" onClick={() => preference('photoshop')}>
            Photoshop
          </Button>
          <Button variant="outlined" onClick={() => preference('reactJS')}>
            ReactJS
          </Button>
        </>
      );
    } else if (category === 'adult') {
      // Customize buttons for adults
      return (
        <>
          <Button variant="outlined" onClick={() => preference('home')}>
            Go To Home
          </Button>
        </>
      );
    }

    return null;
  };

  return <div>{renderButtons()}</div>;
}
