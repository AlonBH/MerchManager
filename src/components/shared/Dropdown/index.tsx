import React, { useRef, useState, MouseEvent, KeyboardEvent } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Grow, Paper, Popper, MenuItem, MenuList, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { menuNavButton } from '../types/menuNavButton';

type Props = {
  items: menuNavButton[];
  children: JSX.Element;
};

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  },
  menu: {
    zIndex: 1
  }
}));

const Dropdown = ({ items, children }: Props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const moreOptionsRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: MouseEvent<Document | HTMLLIElement>) => {
    if (
      !moreOptionsRef.current ||
      !moreOptionsRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  function handleListKeyDown(event: KeyboardEvent<HTMLUListElement>) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  return (
    <>
      <div ref={moreOptionsRef} onClick={handleToggle} color="inherit">
        {children}
      </div>
      <Popper
        open={open}
        anchorEl={moreOptionsRef.current}
        role={undefined}
        transition
        disablePortal
        className={classes.menu}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  {items.map((item: menuNavButton) => (
                    <Link to={item.link} className={classes.link}>
                      <MenuItem key={item.name} onClick={handleClose}>
                        {item.name}
                      </MenuItem>
                      </Link>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default Dropdown;
