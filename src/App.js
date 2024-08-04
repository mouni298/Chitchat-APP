import './App.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper'; import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Avatar, Card, CardContent, Input, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import React from 'react';
import { deepOrange } from '@mui/material/colors';





function App() {
  const iconmap = {
    'menu': <MenuRoundedIcon />,
    'chat': <ChatOutlinedIcon />,
    'favorite': <FavoriteBorderRoundedIcon />,

  }
  const chatLists = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    height: '100%',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const card = (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex' }}>
          <Avatar sx={{ bgcolor: deepOrange }} style={{ padding: '1px', margin: '1px' }}>G</Avatar>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingLeft: '1rem' }}>
          <div>
            <p style={{ maxWidth: '5rem', margin: '1px' }}>Gopal</p>
          </div>
          <div>
            <span>You: Hi</span>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <span>yesterday</span>
        </div>
        <div>
          <span>ticks</span>
        </div>
      </div>
    </div>

  );

  return (
    <div className="App">
      <Container maxWidth style={{ paddingLeft: '0px', paddingRight: '0px', backgroundColor: 'red', height: '100vh' }}>
        <Grid container height='100vh'>
          <Grid xs={0.5} height='100vh'>
            <Item>
              <div>
                <Drawer variant="permanent" justifyContent='space-between'>
                  <div>
                    <List>
                      {['menu', 'chat', 'favorite'].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                          <ListItemButton
                            sx={{
                              minHeight: 48,
                              justifyContent: 'initial',
                              px: 2.5,
                            }}
                          >
                            <ListItemIcon
                              sx={{
                                minWidth: 0,
                                justifyContent: 'center',
                              }}
                            >
                              {iconmap[text]}

                            </ListItemIcon>
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </div>
                  <div>
                    <SettingsOutlinedIcon />

                  </div>
                </Drawer>
              </div>

            </Item>
          </Grid>
          <Grid xs={3.5} height='100vh' style={{ overf: 'scroll' }}>
            <Item height='100vh'>
              <div>
                <div>
                  <strong style={{ fontSize: '20px' }}>Chats</strong>
                </div>
                <div>
                  <TextField
                    id="standard-basic"
                    label="Search"
                    variant="standard"

                  />
                </div>
                <div>
                  {chatLists.map((num) =>
                    <Card xs={{}} style={{ marginBottom: '1px' }} >
                      <CardContent style={{ padding: '5px', height: '3.5rem' }}>
                        {card}
                      </CardContent>
                    </Card>)
                  }
                </div>
              </div>
            </Item>
          </Grid>
          <Grid xs={8} height='100vh'>
            <Item>
              <div style={{ border: '1px black solid', height: '8vh' }}>
                Mouni
              </div>
              <div style={{ border: '1px black solid', height: '85vh' }}>
                Mouni
              </div>
              <div style={{ border: '1px black solid', height: '6vh' }}>
                Mouni
              </div>
            </Item>
          </Grid >
        </Grid >
      </Container>
    </div>
  );
}

export default App;
