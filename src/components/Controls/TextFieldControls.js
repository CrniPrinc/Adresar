import TextField from "@mui/material/TextField";

const TextFieldControl = ({ name, label, value, onTextChange }) => {
  return (
    <div>
      <TextField
      fullWidth
        name={name}
        label={label}
        // id="id"
        onChange={onTextChange}
        value={value}
      />   
    </div>
  );
};

export default TextFieldControl;
