import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

const DateButton = ({ onClickButton }) => (
  <div className="button-container">
    <Button
	  data-testid="date-button"
      variant="contained"
      onClick={ onClickButton }
      color="primary">
      Display Date
    </Button>
  </div>
);


DateButton.propTypes = {
    onClickButton: PropTypes.func
}

export default DateButton;