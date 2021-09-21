import React, { ChangeEvent, useState } from 'react';
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
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <form className={classes.root}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel>לפי מה לחפש?</InputLabel>
        <Select
        onChange={(event) => setSelectedOption((event as ChangeEvent<HTMLSelectElement>).target.value)}
        >
          {requestSearchOptions.map( (option: string) => (
            <MenuItem value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
      {selectedOption && <TextField id="outlined-basic" label="מספר כאן..." variant="outlined"/>}
    </form>
  );
};

export default RequestSearch;
