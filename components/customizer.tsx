'use client';

import {
  Divider,
  Drawer,
  Fab,
  Grid,
  IconButton,
  Slider,
  Stack,
  Tooltip,
  Typography,
  styled,
} from '@mui/material';
import Box, { BoxProps } from '@mui/material/Box';
import { FC, useState } from 'react';

import Scrollbar from '@/components/scrollbar';
import {
  setBorderRadius,
  setCardShadow,
  setDarkMode,
  setDir,
  setTheme,
  toggleHorizontal,
  toggleLayout,
  toggleSidebar,
} from '@/redux/customizerSlice';
import { AppState } from '@/redux/store';
import { faCheck, faCog, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  BorderOuter,
  PaddingTwoTone,
  ViewComfyTwoTone,
} from '@mui/icons-material';
import AspectRatioTwoToneIcon from '@mui/icons-material/AspectRatioTwoTone';
import CallToActionTwoToneIcon from '@mui/icons-material/CallToActionTwoTone';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import SwipeLeftAltTwoToneIcon from '@mui/icons-material/SwipeLeftAltTwoTone';
import SwipeRightAltTwoToneIcon from '@mui/icons-material/SwipeRightAltTwoTone';
import ViewSidebarTwoToneIcon from '@mui/icons-material/ViewSidebarTwoTone';
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import WebAssetTwoToneIcon from '@mui/icons-material/WebAssetTwoTone';
import { useDispatch, useSelector } from 'react-redux';

const SidebarWidth = '320px';
interface colors {
  id: number;
  bgColor: string;
  disp?: string;
}
const Customizer: FC = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const customizer = useSelector((state: AppState) => state.customizer);
  const dispatch = useDispatch();

  const StyledBox = styled(Box)<BoxProps>(({ theme }) => ({
    boxShadow: theme.shadows[8],
    padding: '20px',
    cursor: 'pointer',
    justifyContent: 'center',
    display: 'flex',
    transition: '0.1s ease-in',
    border: '1px solid rgba(145, 158, 171, 0.12)',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  }));

  const thColors: colors[] = [
    {
      id: 1,
      bgColor: '#5D87FF',
      disp: 'BLUE_THEME',
    },
    {
      id: 2,
      bgColor: '#0074BA',
      disp: 'AQUA_THEME',
    },
    {
      id: 3,
      bgColor: '#763EBD',
      disp: 'PURPLE_THEME',
    },
    {
      id: 4,
      bgColor: '#0A7EA4',
      disp: 'GREEN_THEME',
    },
    {
      id: 5,
      bgColor: '#01C0C8',
      disp: 'CYAN_THEME',
    },
    {
      id: 6,
      bgColor: '#FA896B',
      disp: 'ORANGE_THEME',
    },
  ];

  return (
    <>
      <Tooltip title="Settings">
        <Fab
          color="primary"
          aria-label="settings"
          sx={{ position: 'fixed', right: '25px', bottom: '15px' }}
          onClick={() => setShowDrawer(true)}
        >
          <FontAwesomeIcon icon={faCog} fontSize="1rem" />
        </Fab>
      </Tooltip>
      <Drawer
        anchor="right"
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
        PaperProps={{
          sx: {
            width: SidebarWidth,
          },
        }}
      >
        <Scrollbar sx={{ height: 'calc(100vh - 5px)' }}>
          <Box
            p={2}
            display="flex"
            justifyContent={'space-between'}
            alignItems="center"
          >
            <Typography variant="h4">Settings</Typography>
            <IconButton color="inherit" onClick={() => setShowDrawer(false)}>
              <FontAwesomeIcon icon={faXmark} fontSize="1rem" />
            </IconButton>
          </Box>
          <Divider />
          <Box p={3}>
            <Typography variant="h6" gutterBottom>
              Theme Option
            </Typography>
            <Stack direction={'row'} gap={2} my={2}>
              <StyledBox
                onClick={() => dispatch(setDarkMode('light'))}
                display="flex"
                gap={1}
              >
                <WbSunnyTwoToneIcon
                  color={
                    customizer.activeMode === 'light' ? 'primary' : 'inherit'
                  }
                />
                Light
              </StyledBox>
              <StyledBox
                onClick={() => dispatch(setDarkMode('dark'))}
                display="flex"
                gap={1}
              >
                <DarkModeTwoToneIcon
                  color={
                    customizer.activeMode === 'dark' ? 'primary' : 'inherit'
                  }
                />
                Dark
              </StyledBox>
            </Stack>

            <Box pt={3} />
            <Typography variant="h6" gutterBottom>
              Theme Direction
            </Typography>
            <Stack direction={'row'} gap={2} my={2}>
              <StyledBox
                onClick={() => dispatch(setDir('ltr'))}
                display="flex"
                gap={1}
              >
                <SwipeLeftAltTwoToneIcon
                  color={customizer.activeDir === 'ltr' ? 'primary' : 'inherit'}
                />{' '}
                LTR
              </StyledBox>
              <StyledBox
                onClick={() => dispatch(setDir('rtl'))}
                display="flex"
                gap={1}
              >
                <SwipeRightAltTwoToneIcon
                  color={customizer.activeDir === 'rtl' ? 'primary' : 'inherit'}
                />{' '}
                RTL
              </StyledBox>
            </Stack>

            <Box pt={3} />
            <Typography variant="h6" gutterBottom>
              Theme Colors
            </Typography>
            <Grid container spacing={2}>
              {thColors.map((thcolor) => (
                <Grid item xs={4} key={thcolor.id}>
                  <StyledBox onClick={() => dispatch(setTheme(thcolor.disp))}>
                    <Tooltip title={`${thcolor.disp}`} placement="top">
                      <Box
                        sx={{
                          backgroundColor: thcolor.bgColor,
                          width: '25px',
                          height: '25px',
                          borderRadius: '60px',
                          alignItems: 'center',
                          justifyContent: 'center',
                          display: 'flex',
                          color: 'white',
                        }}
                        aria-label={`${thcolor.bgColor}`}
                      >
                        {customizer.activeTheme === thcolor.disp ? (
                          <FontAwesomeIcon icon={faCheck} fontSize="1rem" />
                        ) : (
                          ''
                        )}
                      </Box>
                    </Tooltip>
                  </StyledBox>
                </Grid>
              ))}
            </Grid>
            <Box pt={4} />
            <Typography variant="h6" gutterBottom>
              Layout Type
            </Typography>
            <Stack direction={'row'} gap={2} my={2}>
              <StyledBox
                onClick={() => dispatch(toggleHorizontal(false))}
                display="flex"
                gap={1}
              >
                <ViewComfyTwoTone
                  color={
                    customizer.isHorizontal === false ? 'primary' : 'inherit'
                  }
                />
                Vertical
              </StyledBox>
              <StyledBox
                onClick={() => dispatch(toggleHorizontal(true))}
                display="flex"
                gap={1}
              >
                <PaddingTwoTone
                  color={
                    customizer.isHorizontal === true ? 'primary' : 'inherit'
                  }
                />
                Horizontal
              </StyledBox>
            </Stack>
            <Box pt={4} />
            <Typography variant="h6" gutterBottom>
              Container Option
            </Typography>
            <Stack direction={'row'} gap={2} my={2}>
              <StyledBox
                onClick={() => dispatch(toggleLayout('boxed'))}
                display="flex"
                gap={1}
              >
                <CallToActionTwoToneIcon
                  color={
                    customizer.isLayout === 'boxed' ? 'primary' : 'inherit'
                  }
                />
                Boxed
              </StyledBox>
              <StyledBox
                onClick={() => dispatch(toggleLayout('full'))}
                display="flex"
                gap={1}
              >
                <AspectRatioTwoToneIcon
                  color={customizer.isLayout === 'full' ? 'primary' : 'inherit'}
                />
                Full
              </StyledBox>
            </Stack>
            <Box pt={4} />
            {customizer.isHorizontal ? (
              ''
            ) : (
              <>
                <Typography variant="h6" gutterBottom>
                  Sidebar Type
                </Typography>
                <Stack direction={'row'} gap={2} my={2}>
                  <StyledBox
                    onClick={() => dispatch(toggleSidebar())}
                    display="flex"
                    gap={1}
                  >
                    <WebAssetTwoToneIcon
                      color={!customizer.isCollapse ? 'primary' : 'inherit'}
                    />
                    Full
                  </StyledBox>
                  <StyledBox
                    onClick={() => dispatch(toggleSidebar())}
                    display="flex"
                    gap={1}
                  >
                    <ViewSidebarTwoToneIcon
                      color={customizer.isCollapse ? 'primary' : 'inherit'}
                    />
                    mini
                  </StyledBox>
                </Stack>
              </>
            )}
            <Box pt={4} />
            <Typography variant="h6" gutterBottom>
              Card With
            </Typography>
            <Stack direction={'row'} gap={2} my={2}>
              <StyledBox
                onClick={() => dispatch(setCardShadow(false))}
                display="flex"
                gap={1}
              >
                <BorderOuter
                  color={!customizer.isCardShadow ? 'primary' : 'inherit'}
                />
                Border
              </StyledBox>
              <StyledBox
                onClick={() => dispatch(setCardShadow(true))}
                display="flex"
                gap={1}
              >
                <CallToActionTwoToneIcon
                  color={customizer.isCardShadow ? 'primary' : 'inherit'}
                />
                Shadow
              </StyledBox>
            </Stack>
            <Box pt={4} />
            <Typography variant="h6" gutterBottom>
              Theme Border Radius
            </Typography>

            <Slider
              size="small"
              value={customizer.borderRadius}
              aria-label="Small"
              min={4}
              max={24}
              onChange={(event: any) =>
                dispatch(setBorderRadius(event.target.value))
              }
              valueLabelDisplay="auto"
            />
          </Box>
        </Scrollbar>
      </Drawer>
    </>
  );
};

export default Customizer;
