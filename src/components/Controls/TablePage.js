import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useState } from "react";
import strings from "../../localization";
import CountryForm from "../Forms/CountryForm";
import ExpandAction from "./ExpandAction";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import "./modal.scss";

const TablePage = (props) => {
  const [selectionModel, setSelectionModel] = useState();
  const [selectedItems, setSelectedItems] = useState();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const getItemById = (id, data) => {
    if (!id || !data) {
      return undefined;
    }
    return data.find((x) => x.id === id);
  };

  const handleSelectionChange = (newSelectionModel) => {
    setSelectionModel(newSelectionModel);
    if (!newSelectionModel || newSelectionModel.length === 0) {
      setSelectedItems([]);
    }
    let result = [];
    for (let id of newSelectionModel) {
      result.push(getItemById(id, props.data));
    }
    setSelectedItems(result);
  };

  //   const handleView = () => {

  //   }

  const handleEdit = (params) => {
    console.log(params);
    setOpen(true);
  };

  const deleteItem = () => {};

  const getTableDescription = (tableDescription) => {
    if (!tableDescription || tableDescription.length === 0) {
      return tableDescription;
    }

    let result = [...tableDescription];

    result.unshift({
      field: "id",
      headerName: strings.components.tablePage.actions,
      width: 75,
      renderCell: (params) => (
        <ExpandAction
          params
          // handleView={handleView}
          handleEdit={handleEdit}
          handleDelete={deleteItem}
          deleteItem={props.deleteItem}
          id={params.id}
          editPage={props.editPage}
          item={params.row}
          // hideView={true}
        />
      ),
    });

    return result;
  };

  return (
    <React.Fragment>
      <DataGrid
        columns={getTableDescription(props.tableDescription)}
        rows={props.data}
        autoHeight
        rowHeight={40}
        onSelectionModelChange={(newSelectionModel) =>
          handleSelectionChange(newSelectionModel)
        }
        selectionModel={selectionModel}
        components={{
          Toolbar: GridToolbar,
        }}
      />

      {open && 
        <Modal
          className="modal-edit"
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box style={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Editting
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Insert new name for country
            </Typography>
            {props.editPage}
          </Box>
        </Modal>
        }
    </React.Fragment>
  );
};

export default TablePage;
