import React, { useRef, useState, MouseEvent, KeyboardEvent } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Grow, Paper, Popper, MenuItem, MenuList } from '@material-ui/core';

type Props = {
  items: { name: string }[];
  children: JSX.Element;
};

const Dropdown = ({ items, children }: Props) => {
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
                  {items.map((item: { name: string }) => (
                    <MenuItem key={item.name} onClick={handleClose}>
                      {item.name}
                    </MenuItem>
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
