import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "../../components/MKBox";
import MKButton from "../../components/MKButton";
import MKTypography from "../../components/MKTypography";
import MKAvatar from "../../components/MKAvatar";

// Images
import bgImage from "../../assets/images/bg-notacion-musical.jpeg";
import logoCEO from "../../assets/images/logos/gray-logos/Logo CEO.png";
import team4 from "../../assets/images/team-4.jpg";
import SimpleFooter from "../../examples/Footers/SimpleFooter";

function Dashboard() {
  const [dropdown, setDropdown] = useState(null);

  const openDropdown = ({ currentTarget }) => setDropdown(currentTarget);
  const closeDropdown = () => setDropdown(null);

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
      <MKBox component="header" position="relative">
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
        <MKBox
          display="flex"
          alignItems="center"
          minHeight="100vh"
          sx={{
            backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.5),
                rgba(gradients.dark.state, 0.5)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
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
      <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </MKBox>
    </>
  );
}

export default Dashboard;
