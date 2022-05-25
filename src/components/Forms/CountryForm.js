import * as React from "react";
import { FormProvider } from "react-hook-form";
import strings from "../../localization";
import TextFieldControl from "../Controls/TextFieldControls";
import Button from "@mui/material/Button";

export default function CountryForm(props) {
  const [textValue, setTextValue] = React.useState();

  const onTextChange = (event) => {
    setTextValue(event.target.value);
  };

  return (
    <FormProvider
      className="form"
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <TextFieldControl
        name={"Country"}
        label={"Country"}
        value={textValue}
        onTextChange={onTextChange}
      />
      <Button onClick={props.onCancel}>{strings.common.cancel}</Button>
      <Button onClick={props.onSave}>{strings.common.save}</Button>
    </FormProvider>
  );
}
