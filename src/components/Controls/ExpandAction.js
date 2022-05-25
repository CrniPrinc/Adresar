import * as React from "react";
import { useState } from "react";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import strings from "../../localization";
import MoreVert from "@mui/icons-material/MoreVert";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ExpandAction = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handlerClick = (handler) => {
    handleClose();
    handler(props.id, props.item);
  };
  return (
    <>
      <IconButton
        size="small"
        onClick={(event) => handleClick(event)}
        aria-controls={"basic-menu-" + props.id}
        aria-haspopup="true"
      >
        <MoreVert />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id={"basic-menu-" + props.id}
        open={Boolean(anchorEl)}
        onClose={() => handleClose()}
      >
        {/* {
          !props.hideView &&
          (
            <MenuItem onClick={() => handlerClick(props.handleView)}>
              <ListItemIcon>
                <RemoveRedEyeIcon />
              </ListItemIcon>
              <ListItemText>{strings.components.actionCell.view}</ListItemText>
            </MenuItem>
          )} */}
        {/* {
          props.editPage &&
          ( */}
            <MenuItem onClick={() => handlerClick(props.handleEdit)}>
              <ListItemIcon>
                <EditIcon />
              </ListItemIcon>
              <ListItemText>{strings.components.actionCell.edit}</ListItemText>
            </MenuItem>
          {/* )}
        {
          props.deleteItem &&
           ( */}
            <MenuItem onClick={() => handlerClick(props.handleDelete)}>
              <ListItemIcon>
                <DeleteIcon />
              </ListItemIcon>
              <ListItemText>
                {strings.components.actionCell.delete}
              </ListItemText>
            </MenuItem>
          {/* )} */}
      </Menu>
    </>
  );
};
export default ExpandAction;
