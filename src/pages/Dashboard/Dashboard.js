import * as React from 'react';

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import Modal from '@mui/material/Modal';
import Slide from '@mui/material/Slide';

// Material Kit 2 React components
import MKBox from "../../components/MKBox";
import MKButton from "../../components/MKButton";
import MKTypography from "../../components/MKTypography";
import MKAvatar from "../../components/MKAvatar";

// Images
import bgImage from "../../assets/images/bg-instrumentos.jpg";
import logoCEO from "../../assets/images/logos/gray-logos/Logo CEO.png";
import team4 from "../../assets/images/team-4.jpg";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import {useState} from "react";
import FormControl from "@mui/material/FormControl";
import {useNavigate} from "react-router-dom";

const drawerWidth = 240;

function Dashboard() {
  const [dropdown, setDropdown] = useState(null);
  const [age, setAge] = React.useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);

  const openDropdown = ({ currentTarget }) => setDropdown(currentTarget);
  const closeDropdown = () => setDropdown(null);
  const createClass = () => {
    navigate("/audit-trainning");
  }

  // Styles
  const iconStyles = {
    ml: 1,
    fontWeight: "bold",
    transition: "transform 200ms ease-in-out",
  };

  const dropdownIconStyles = {
    transform: dropdown ? "rotate(360)" : "rotate(0)",
    ...iconStyles,
  };

  return (
    <>
      <MKBox sx={{ display: 'flex' }} component="header" position="relative">
        <CssBaseline />
        <AppBar
            position="fixed"
            sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        >
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
          <Toolbar>
            <MKBox component="img" src={logoCEO} alt="logo" width="60%" />
          </Toolbar>
          <Divider />
          <List>
            <ListItem key={'crear'} disablePadding>
              <ListItemButton onClick={toggleModal}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary='Crear Curso' />
              </ListItemButton>
            </ListItem>
            {['Mis Cursos', 'Subir Archivo'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton >
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Configuración', 'Salir'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
            ))}
          </List>
        </Drawer>
        <MKBox component="nav" position="absolute" top="0.5rem" width="100%">
          <Container>
            <Grid container flexDirection="row" alignItems="center">
              <MKBox component="img" src={logoCEO} alt="logo" width="10%" />
              <MKButton
                variant="outlined"
                color="white"
                sx={{ display: { xs: "block", lg: "none" }, ml: "auto" }}
              >
                <MKBox component="i" color="white" className="fas fa-bars" />
              </MKButton>
              <Stack
                sx={{ position: "absolute", bottom: 10, right: 10 }}
                direction="row"
                spacing={1}
                mt={3}
              >
                <MKAvatar
                  onClick={openDropdown}
                  sx={dropdownIconStyles}
                  src={team4}
                  alt="md"
                  size="md"
                />
                <Menu anchorEl={dropdown} open={Boolean(dropdown)} onClose={closeDropdown}>
                  <MenuItem onClick={closeDropdown}>Editar</MenuItem>
                  <MenuItem onClick={closeDropdown}>Configuración</MenuItem>
                  <MenuItem component={Link} href="/login">
                    Cerrar Sesión
                  </MenuItem>
                </Menu>
              </Stack>
            </Grid>
          </Container>
        </MKBox>
        <MKBox component="main"
          display="flex"
          alignItems="center"
          minHeight="100vh"
          sx={{
            flexGrow: 1,
            backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.5),
                rgba(gradients.dark.state, 0.5)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            p: 3
          }}
        >
          <Container>
            <Grid
              container
              item
              xs={12}
              md={7}
              lg={6}
              flexDirection="column"
              justifyContent="center"
            >
              <MKTypography
                variant="h1"
                color="white"
                mb={3}
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                  },
                })}
              >
                DASHBOARD
              </MKTypography>
            </Grid>
          </Container>
        </MKBox>
      </MKBox>
      <Modal open={show} onClose={toggleModal} sx={{ display: "grid", placeItems: "center" }}>
        <Slide direction="down" in={show} timeout={500}>
          <MKBox
              position="relative"
              width="500px"
              display="flex"
              flexDirection="column"
              borderRadius="xl"
              bgColor="white"
              shadow="xl"
          >
            <MKBox display="flex" alginItems="center" justifyContent="space-between" p={2}>
              <MKTypography variant="h5">Crear Curso</MKTypography>
              <CloseIcon fontSize="medium" sx={{ cursor: "pointer" }} onClick={toggleModal} />
            </MKBox>
            <Divider sx={{ my: 0 }} />
            <MKBox p={2}>
              <MKTypography variant="body2" color="secondary" fontWeight="regular">
                Antes de crear el curso recuerde que esta herramienta es netamente de apredizaje
                y su uso es para la educación musical.
                <br />
                <br />
                Si esta seguro de crear el curso virtual seleccione la opción que desea y de click en "Continuar",
                caso contrario señale en "Cancelar".
              </MKTypography>
              <FormControl sx={{ m: 2, minWidth: 120 }} size="medium">
              <InputLabel id="demo-select-small">Curso</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={age}
                    label="Curso"
                    onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>Ninguno</em>
                  </MenuItem>
                  <MenuItem value={10}>ENTRENAMIENTO AUDITIVO</MenuItem>
                  <MenuItem value={20}>INSTRUMENTO, CANTO, CORO Y ENSAMBLE</MenuItem>
                  <MenuItem value={30}>PIANO COMPLEMENTARIO</MenuItem>
                </Select>
              </FormControl>
            </MKBox>
            <Divider sx={{ my: 0 }} />
            <MKBox display="flex" justifyContent="space-between" p={1.5}>
              <MKButton variant="gradient" color="dark" onClick={toggleModal}>
                Cancelar
              </MKButton>
              <MKButton variant="gradient" color="info" onClick={createClass}>
                Continuar
              </MKButton>
            </MKBox>
          </MKBox>
        </Slide>
      </Modal>
    </>
  );
}

export default Dashboard;
