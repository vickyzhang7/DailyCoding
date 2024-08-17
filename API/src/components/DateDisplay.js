import React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Paper } from '@mui/material';

const DateDisplay = (({day,month,year}) => (
  <Paper className="container">
      <List>
          <ListItem>
          <ListItemText data-testid="day">Day: {day} </ListItemText>
      </ListItem>
      <ListItem>
          <ListItemText data-testid="month">Month: {month}</ListItemText>
      </ListItem>
      <ListItem>
          <ListItemText data-testid="year">Year: {year}</ListItemText>
      </ListItem>
      </List>
  </Paper>
));

DateDisplay.propTypes = {
  day:PropTypes.number,
  month:PropTypes.number,
  year:PropTypes.number
}

export default DateDisplay;