import React from 'react';
import styled from '@emotion/styled';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useGlobalStore } from '@/store';

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

const index = () => {

  const State = {
		Global: {
			isSidebarClosed: useGlobalStore((State) => State.isSidebarClosed)
		}
	}

	const Update = {
		Global: {
			isSidebarClosed: useGlobalStore((State) => State.setIsSidebarClosed)
		}
	};

  return (
    <StyledDrawer
      variant="temporary"
      anchor="left"
      open={State.Global.isSidebarClosed}
      onClose={Update.Global.isSidebarClosed}
    >
      <List>
        {['Home', 'About', 'Contact'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </StyledDrawer>
  );
};

export default index;
