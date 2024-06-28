import { Box, CardContent, Grid, Typography } from "@mui/material";

const topcards = [
  {
    icon: "/images/svgs/icon-account.svg",
    title: "Clientes",
    digits: "120",
    bgcolor: "secondary",
  },
  {
    icon: "/images/svgs/icon-briefcase.svg",
    title: "Proveedores",
    digits: "50",
    bgcolor: "warning",
  },
  {
    icon: "/images/svgs/icon-mailbox.svg",
    title: "Reservas",
    digits: "356",
    bgcolor: "secondary",
  },
  {
    icon: "/images/svgs/icon-favorites.svg",
    title: "Eventos",
    digits: "80",
    bgcolor: "error",
  },
  {
    icon: "/images/svgs/icon-speech-bubble.svg",
    title: "Beneficio",
    digits: "$9,600",
    bgcolor: "success",
  },
  {
    icon: "/images/svgs/icon-connect.svg",
    title: "Decoraciones",
    digits: "59",
    bgcolor: "info",
  },
];

const TopCards = () => {
  return (
    <Grid container spacing={3} mt={3}>
      {topcards.map((topcard, i) => (
        <Grid item xs={12} sm={4} lg={2} key={i}>
          <Box bgcolor={topcard.bgcolor + ".light"} textAlign="center">
            <CardContent>
              <img src={topcard.icon} alt={"topcard.icon"} width="50" height="50" />
              <Typography
                color={topcard.bgcolor + ".main"}
                mt={1}
                variant="subtitle1"
                fontWeight={600}
              >
                {topcard.title}
              </Typography>
              <Typography
                color={topcard.bgcolor + ".main"}
                variant="h4"
                fontWeight={600}
              >
                {topcard.digits}
              </Typography>
            </CardContent>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopCards;
