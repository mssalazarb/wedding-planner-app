'use client';

import { Avatar, Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import dynamic from "next/dynamic";
import DashboardCard from "../dashboard-card";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const RevenueUpdates = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  const optionscolumnchart: any = {
    chart: {
      type: "bar",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: false,
      },
      height: 320,
      offsetX: -20,
      stacked: true,
    },
    colors: [primary, secondary],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: "60%",
        columnWidth: "20%",
        borderRadius: [6],
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all",
      },
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    yaxis: {
      min: -5,
      max: 5,
      tickAmount: 4,
    },
    xaxis: {
      categories: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
      axisTicks: {
        show: false,
      },
    },
    tooltip: {
      theme: theme.palette.mode === "dark" ? "dark" : "light",
      fillSeriesColor: false,
    },
  };
  const seriescolumnchart = [
    {
      name: "Bodas",
      data: [2.5, 3.7, 3.2, 2.6, 1.9],
    },
    {
      name: "Evento Social",
      data: [-2.8, -1.1, -3.0, -1.5, -1.9],
    },
  ];

  return (
    <DashboardCard title="Ganancias Actuales" subtitle="Descripción general">
      <>
        <Stack direction="row" spacing={3}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar
              sx={{
                width: 9,
                height: 9,
                bgcolor: primary,
                svg: { display: "none" },
              }}
            ></Avatar>
            <Box>
              <Typography
                variant="subtitle2"
                fontSize="12px"
                color="textSecondary"
              >
                Bodas
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar
              sx={{
                width: 9,
                height: 9,
                bgcolor: secondary,
                svg: { display: "none" },
              }}
            ></Avatar>
            <Box>
              <Typography
                variant="subtitle2"
                fontSize="12px"
                color="textSecondary"
              >
                Evento Social
              </Typography>
            </Box>
          </Stack>
        </Stack>
        <Box className="rounded-bars" height="335px">
          <Chart
            options={optionscolumnchart}
            series={seriescolumnchart}
            type="bar"
            height="320px"
            width={"100%"}
          />
        </Box>
      </>
    </DashboardCard>
  );
};

export default RevenueUpdates;
