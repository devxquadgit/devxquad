import React from 'react';
import styled from '@emotion/styled';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useGlobalStore } from '@/store';
import sidebarOptions from './options'
import Link from 'next/link';

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)`
  display: none;
  
  @media (max-width: 900px) {
    display: block;
    .MuiDrawer-paper {
      width: ${drawerWidth}px;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const index = () => {

  const State = {
		Global: {
			isSidebarOpen: useGlobalStore((State) => State.isSidebarOpen)
		}
	}

	const Update = {
		Global: {
			isSidebarOpen: useGlobalStore((State) => State.setIsSidebarOpen)
		}
	};

  const toggleDrawer =
  (state: boolean) =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    Update.Global.isSidebarOpen(state)
  };

  return (
    <StyledDrawer
      anchor="right"
      open={State.Global.isSidebarOpen}
      onClose={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {sidebarOptions.map((option) => (
          <StyledLink href={option.path} key={option.text} passHref>
            <ListItem button key={option.text}>
              <ListItemText primary={option.text} />
            </ListItem>
          </StyledLink>
        ))}
      </List>
    </StyledDrawer>
  );
};

export default index;
