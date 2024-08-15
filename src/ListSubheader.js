import React from 'react';
import { ListSubheader } from "@mui/material";

function MyListSubheader(props) {
  return <ListSubheader {...props} />;
}

MyListSubheader.muiSkipListHighlight = true;
export default MyListSubheader;