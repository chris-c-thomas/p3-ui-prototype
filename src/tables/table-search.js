
import React, { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';

// icons
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import DownloadIcon from '@material-ui/icons/CloudDownloadOutlined';
import FilterIcon from '@material-ui/icons/FilterListRounded';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import useDebounce from '../utils/use-debounce';



export default function TableControls(props) {
  const {onSearch, enableTableOptions, searchPlaceholder} = props;

  const [query, setQuery] = useState(null);
  const debounceQuery = useDebounce(query, 300);

  useEffect(() => {
    onSearch({query})
  }, [debounceQuery]);

  return (
    <Grid container>
      <Grid item xs={4}>
        <TextField
          placeholder={searchPlaceholder || 'Search keywords'}
          onChange={e => { setQuery(e.target.value); }}
          fullWidth
          InputProps={{
            style: {height: 36},
            startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
          }}
          variant="outlined"
        />
      </Grid>

      {
        enableTableOptions &&
        <Grid item xs={2}>
          <Tooltip title="filter">
            <IconButton aria-label="filter">
              <FilterIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="download">
            <IconButton aria-label="download">
              <DownloadIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      }

    </Grid>
  )
};