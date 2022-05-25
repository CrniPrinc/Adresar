import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const SelectControl = ({options,value,name,label}) =>{

    const [values, setValue] = React.useState();

    React.useEffect(() => {
        setValue(value);
    },[values])

    const handleChange = (event) => {
        setValue(event.target.value);
      };

    const generateMenuItems = () =>{
        let result = [];

        for(let item of options){
            result.push(<MenuItem value={item.id}>{item.name}</MenuItem>)
        }
        return result;
    }

    return(
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name={name}
          value={values}
          label={label}
          onChange={handleChange}
        >
          {generateMenuItems()}
          
        </Select>
      </FormControl>

    </Box>
    );
}

export default SelectControl;