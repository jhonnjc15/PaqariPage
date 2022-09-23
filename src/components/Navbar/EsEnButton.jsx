import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Avatar from '@mui/material/Avatar';
import LanguageIcon from '@mui/icons-material/Language';

const options = ['ES', 'EN'];

export default function EsEnButton() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
        <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
        {selectedIndex===1? 
            <Button 
              sx={{ 
                color: 'black',
                border:0,
                '&:hover': {
                  border: 0
                },
              }} 
              size='small' 
              variant="outlined" 
              startIcon={<Avatar sx={{ width: 24, height: 24 }} src={'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg'}/>} 
              onClick={handleClick}>{options[selectedIndex]}
            </Button>
          :
            <Button 
              sx={{
                color: 'black',
                border:0,
                '&:hover': {
                  border: 0,
                }
              }}
              size='small' 
              variant="outlined" 
              startIcon={<Avatar sx={{ width: 24, height: 24 }} src={'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg'}/>}
              onClick={handleClick}>{options[selectedIndex]}
            </Button>
        }
          <Button
            sx={{
              color: "#217276",
              border:0,
              '&:hover': {
                border: 0
              }
            }}
            size='small'
            variant="outlined"
            aria-controls={open ? 'split-button-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
          >
            <LanguageIcon sx={{color:"black"}} fontSize="small" />
          </Button>
        </ButtonGroup>
        <Popper
          sx={{
            zIndex: 1,
            width: "40px",
          }}
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          placement='bottom-end'
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
                  width:"100%"
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu" autoFocusItem>
                    {options.map((option, index) => (
                      <MenuItem
                        sx={{
                          fontSize: "0.8125rem", 
                          padding: "0px", 
                          justifyContent: "center",
                        }}
                        key={option}
                        disabled={index === 2}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </React.Fragment>
    );
}
