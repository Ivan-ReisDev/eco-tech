import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Logo from './../assets/logo-horizontal.png';
import Link from 'next/link';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Quem somos', 'Produtos', 'Informações', 'Contato'];

export default function Navbar({ window }: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Link href={"/"}>
          <Image
            src={Logo}
            alt="Logo"
            width={150}
          />
        </Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', color: "#259D1C" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: '#fff',
          color: '#333',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra sutil
          borderBottom: '1px solid #e0e0e0', // Borda inferior leve
        }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }} // Só exibe no mobile
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link href={"/"}>
              <Image
                src={Logo}
                alt="Logo"
                width={150}
              />
            </Link>
          </Typography>

          {/* Navegação para desktop */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            
              <Link 
              href={"#About"}
              className='text-[#259D1C] mx-4' >
                Quem somos
              </Link>

              <Link 
              href={"#Accepted"}
              className='text-[#259D1C] mx-4' >
                Produtos
              </Link>

              <Link 
              href={"#Process"}
              className='text-[#259D1C] mx-4' >
                Informações
              </Link>

              <Link 
              href={"#Contact"}
              className='text-[#259D1C] mx-4' >
                Agendamento
              </Link>
      
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer para Mobile */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' }, 
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
