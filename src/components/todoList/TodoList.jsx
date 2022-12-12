import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Delete } from "@mui/icons-material";
import React from "react";
import { ListItemButton, ListItemIcon } from "@mui/material";
const TodoList = () => {
  return (
    <List>
      <ListItem>
        <ListItemText primary="Todo 1" />
        <ListItemButton>
          <ListItemIcon>
            <Delete />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    </List>
  );
};
export default TodoList;
