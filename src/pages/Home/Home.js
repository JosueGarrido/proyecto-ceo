// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "../../components/MKBox";
import MKButton from "../../components/MKButton";
import MKTypography from "../../components/MKTypography";

// Images
import bgImage from "../../assets/images/bg-notacion-musical.jpeg";
import Card from "@mui/material/Card";
import MKInput from "../../components/MKInput";
import macbook from "../../assets/images/macbook.png";
import DefaultFooter from "../../examples/Footers/DefaultFooter";
import footerRoutes from "../../footer.routes";
import logoCEO from "../../assets/images/logos/gray-logos/Logo CEO.png";

function Home() {
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
              <MKBox
                component="ul"
                display={{ xs: "none", lg: "flex" }}
                p={0}
                my={0}
                mx="auto"
                sx={{ listStyle: "none" }}
              >
                <MKBox component="li">
                  <MKTypography
                    component={Link}
                    href="/"
                    variant="button"
                    color="white"
                    fontWeight="regular"
                    p={1}
                  >
                    Inicio
                  </MKTypography>
                </MKBox>
                <MKBox component="li">
                  <MKTypography
                    component={Link}
                    href="#"
                    variant="button"
                    color="white"
                    fontWeight="regular"
                    p={1}
                    onClick={(e) => e.preventDefault()}
                  >
                    Nosotros
                  </MKTypography>
                </MKBox>
                <MKBox component="li">
                  <MKTypography
                    component={Link}
                    href="/contact"
                    variant="button"
                    color="white"
                    fontWeight="regular"
                    p={1}
                  >
                    Contacto
                  </MKTypography>
                </MKBox>
              </MKBox>

              <Stack direction="row" spacing={1} mt={3}>
                <MKButton href="/login" color="white">
                  Iniciar Sesión
                </MKButton>
                <MKButton href="/register" variant="text" color="white">
                  Registrarte
                </MKButton>
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
                Proyecto CEO
              </MKTypography>
              <MKTypography variant="body1" color="white" opacity={0.8} pr={6} mr={6}>
                Desarrolla tus habilidades artisticas con la mejor plataforma y educación por parte
                de tus profesores en linea.
              </MKTypography>
            </Grid>
          </Container>
        </MKBox>
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <MKBox component="section" py={{ xs: 3, md: 12 }}>
            <Container>
              <Grid container alignItems="center">
                <Grid item xs={12} lg={5}>
                  <MKTypography variant="h3" my={1}>
                    Acerca de Nosotros
                  </MKTypography>
                  <MKTypography variant="body2" color="text" mb={2}>
                    Adaptar las metodologías de enseñanza de la música a los nuevos cambios del
                    entorno y de la era digital, fomentando de esta manera un aprendizaje guiado a
                    aplicaciones tecnológicas que ayuden a desarrollar las destrezas, habilidades,
                    actitudes de docentes y estudiantes.
                  </MKTypography>
                  <MKTypography
                    component="a"
                    href="#"
                    variant="body2"
                    color="info"
                    fontWeight="regular"
                    sx={{
                      width: "max-content",
                      display: "flex",
                      alignItems: "center",

                      "& .material-icons-round": {
                        fontSize: "1.125rem",
                        transform: "translateX(3px)",
                        transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                      },

                      "&:hover .material-icons-round, &:focus .material-icons-round": {
                        transform: "translateX(6px)",
                      },
                    }}
                  >
                    More about us
                    <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                  </MKTypography>
                </Grid>
                <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
                  <Stack>
                    <MKBox display="flex" alignItems="center" p={2}>
                      <MKBox
                        width="3rem"
                        height="3rem"
                        variant="gradient"
                        bgColor="info"
                        color="white"
                        coloredShadow="info"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="xl"
                      >
                        <Icon fontSize="small">mediation</Icon>
                      </MKBox>
                      <MKTypography variant="body2" color="text" pl={2}>
                        Satisfacer las necesidades pedagógicas requeridas para el proceso de
                        <br />
                        enseñanza y aprendizaje de la música de manera virtual.
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" alignItems="center" p={2}>
                      <MKBox
                        width="3rem"
                        height="3rem"
                        variant="gradient"
                        bgColor="info"
                        color="white"
                        coloredShadow="info"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="xl"
                      >
                        <Icon fontSize="small">settings_overscan</Icon>
                      </MKBox>
                      <MKTypography variant="body2" color="text" pl={2}>
                        Diseñar un sistema que se adapte al contenido de la malla curricular
                        <br />
                        existente proponiendo la utilización de herramientas tecnológicas en las
                        <br />
                        academias y conservatorios a nivel nacional e internacional.
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" alignItems="center" p={2}>
                      <MKBox
                        width="3rem"
                        height="3rem"
                        variant="gradient"
                        bgColor="info"
                        color="white"
                        coloredShadow="info"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="xl"
                      >
                        <Icon fontSize="small">token</Icon>
                      </MKBox>
                      <MKTypography variant="body2" color="text" pl={2}>
                        Generar un autoaprendizaje y el descubrimiento de nuevas destrezas en los
                        <br />
                        estudiantes y docentes de música con respecto a las herramientas
                        <br />
                        tecnológicas utilizadas.
                      </MKTypography>
                    </MKBox>
                  </Stack>
                </Grid>
              </Grid>
            </Container>
          </MKBox>
          <Container sx={{ mt: 6 }}>
            <MKBox
              display="flex"
              alignItems="center"
              borderRadius="xl"
              my={2}
              py={6}
              sx={{
                backgroundImage: ({
                  functions: { linearGradient, rgba },
                  palette: { gradients },
                }) =>
                  `${linearGradient(
                    rgba(gradients.dark.main, 0.8),
                    rgba(gradients.dark.state, 0.8)
                  )}, url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Container>
                <Grid container item xs={12} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
                  <MKTypography variant="h1" color="white" mb={1}>
                    MISIÓN
                  </MKTypography>
                  <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
                    Brindar una enseñanza musical de vanguardia mediante el uso de un sistema
                    informático que permite fortalecer el aprendizaje de las materias que se
                    estudian en las academias y conservatorios ya sea de manera virtual o
                    presencial.
                  </MKTypography>
                  <MKTypography
                    component="a"
                    href="https://www.wocking.com"
                    target="_blank"
                    rel="noreferrer"
                    variant="body2"
                    color="white"
                    fontWeight="regular"
                    sx={{
                      display: "flex",
                      alignItems: "center",

                      "& .material-icons-round": {
                        fontSize: "1.125rem",
                        transform: `translateX(3px)`,
                        transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                      },

                      "&:hover .material-icons-round, &:focus .material-icons-round": {
                        transform: `translateX(6px)`,
                      },
                    }}
                  >
                    Averigua más <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                  </MKTypography>
                </Grid>
              </Container>
            </MKBox>
          </Container>
          <MKBox component="section" pt={6} my={6}>
            <Container>
              <Grid container alignItems="center">
                {/* eslint-disable-next-line react/jsx-no-duplicate-props */}
                <Grid item sx={12} md={6} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}>
                  <MKTypography variant="h4">VISIÓN</MKTypography>
                  <MKTypography variant="body2" color="text" mb={3}>
                    Consolidarnos como la primera organización del Ecuador que brinda herramientas
                    tecnológicas innovadoras para la enseñanza y aprendizaje de música a nivel
                    nacional e internacional en el año 2025.
                  </MKTypography>
                  <Grid container spacing={1}>
                    <Grid item xs={8}>
                      <MKInput type="email" label="Escribe tu correo..." fullWidth />
                    </Grid>
                    <Grid item xs={4}>
                      <MKButton variant="gradient" color="info" sx={{ height: "100%" }}>
                        MÁS INFORMACIÓN
                      </MKButton>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
                  <MKBox position="relative">
                    <MKBox component="img" src={macbook} alt="macbook" width="100%" />
                  </MKBox>
                </Grid>
              </Grid>
            </Container>
          </MKBox>
        </Card>
      </MKBox>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Home;
