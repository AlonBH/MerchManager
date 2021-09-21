import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import useStyles from './styles';

import requestSearchOptions from './data';

const RequestSearch = () => {
  const classes = useStyles();
  const [searching, setSearching] = useState(false);

  const beginSearch = () => setSearching(true);

  return (
    <form className={classes.root}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel>לפי מה לחפש?</InputLabel>
        <Select
        onChange={beginSearch}
        >
          {requestSearchOptions.map( (option: string) => (
            <MenuItem value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
      {searching && <TextField id="outlined-basic" label="מספר כאן..." variant="outlined"/>}
    </form>
  );
};

export default RequestSearch;
