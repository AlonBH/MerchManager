import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import useStyles from './styles';

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
          <MenuItem value={1}>מספר בקשה פלסטיני</MenuItem>
          <MenuItem value={2}>מספר בקשה פנימי</MenuItem>
          <MenuItem value={3}>מספר תיאום פלסטיני</MenuItem>
          <MenuItem value={4}>מספר תיאום פנימי</MenuItem>
        </Select>
      </FormControl>
      {searching && <TextField id="outlined-basic" label="מספר כאן..." variant="outlined"/>}
    </form>
  );
};

export default RequestSearch;
