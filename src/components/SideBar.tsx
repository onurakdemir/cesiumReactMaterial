import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { FormControl, InputLabel, Input, FormHelperText, Checkbox } from '@material-ui/core';
import PaymentForm from './PaymentForm';
import SimpleCard from './SimpleCard';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import PeopleIcon from '@material-ui/icons/People';
// import BarChartIcon from '@material-ui/icons/BarChart';
// import LayersIcon from '@material-ui/icons/Layers';
// import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
  <div>
   <SimpleCard/>
   <PaymentForm/>
  </div>
);

export const secondaryListItems = (
  <div>
  </div>
);
