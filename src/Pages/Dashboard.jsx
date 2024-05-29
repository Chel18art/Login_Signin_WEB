import { AppBar, Box, CssBaseline, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, Tabs, Tab } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import ItemOne from "./Dashboard/ItemOne";
import ItemTwo from "./Dashboard/ItemTwo";
import ItemThree from "./Dashboard/ItemThree";

const drawerWidth = 240;

export default function Dashboard() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) navigate("item-one");
    else if (newValue === 1) navigate("item-two");
    else if (newValue === 2) navigate("item-three");
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem button component={Link} to="/dashboard">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button component={Link} to="/dashboard/users">
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>
            <ListItem button component={Link} to="/dashboard/reports">
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="Reports" />
            </ListItem>
            <ListItem button component={Link} to="/dashboard/settings">
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Tabs value={value} onChange={handleChange} aria-label="dashboard tabs">
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
        <Routes>
          <Route path="item-one" element={<ItemOne />} />
          <Route path="item-two" element={<ItemTwo />} />
          <Route path="item-three" element={<ItemThree />} />
        </Routes>
      </Box>
    </Box>
  );
}
