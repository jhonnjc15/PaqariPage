import React from "react";
import Avatar from '@mui/material/Avatar';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import Card from "@mui/material/Card";
import Divider from '@mui/material/Divider';

function ContactInfo() {
  return (
    <Card
      sx={{ padding: "20px",gap: "20px",display: "flex", flexDirection: "column", justifyContent:"flex-start", alignItems:"center", width: "100%", height: "400px", borderRadius: "15px", border: "2px solid red"}}
      elevation={4} 
    >
      <h2> Contact Info </h2>
      <List sx={{ width: '100%', maxWidth: 360 }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <PlaceIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Av Colonial 999"  />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <LocalPhoneOutlinedIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="+51 940780152"/>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <EmailIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="jhonatanjcca@gmail.com" />
        </ListItem>
      </List>
      <Divider variant="middle" flexItem />
    </Card>
  );
}

export default ContactInfo;
