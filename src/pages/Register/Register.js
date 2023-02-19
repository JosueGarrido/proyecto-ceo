// react-router-dom components
import {Link, useNavigate} from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";

// Material Kit 2 React components
import MKBox from "../../components/MKBox";
import MKTypography from "../../components/MKTypography";
import MKInput from "../../components/MKInput";
import MKButton from "../../components/MKButton";

// Material Kit 2 React example components
import DefaultNavbar from "../../examples/Navbars/DefaultNavbar";
import SimpleFooter from "../../examples/Footers/SimpleFooter";

// Material Kit 2 React page layout routes
import routesceo from "../../routesceo";

// Images
import bgImage from "../../assets/images/bg2.jpg";

function Register() {

  const navigate = useNavigate();

  const gotodashboarh = () => {
    navigate("/dashboard");
  }

  return (
    <>
      <DefaultNavbar
        routes={routesceo}
        action={{
          type: "external",
          route: "login",
          label: "Iniciar Sesion",
          color: "info",
        }}
        transparent
        light
      />
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Sign up
                </MKTypography>
                <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <FacebookIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <AppleIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <GoogleIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                </Grid>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                    <MKInput type="name" label="Nombre" fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput type="lastname" label="Apellido" fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput type="email" label="Correo" fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput type="password" label="Contraseña" fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput type="password" label="Confirmación de contraseña" fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput type="phone" label="Telefono" fullWidth />
                  </MKBox>
                  <MKBox mt={4} mb={1}>
                    <MKButton onClick={gotodashboarh} variant="gradient" color="info" fullWidth>
                      sign up
                    </MKButton>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      Tienes cuenta?{" "}
                      <MKTypography
                        component={Link}
                        to="/login"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Inicia Sesión
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </MKBox>
    </>
  );
}

export default Register;
