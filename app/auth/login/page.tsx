'use client';

import Logo from '@/components/logo';
import PageContainer from '@/components/page-container';
import { AppState } from '@/redux/store';
import { Box, Card, Grid, Stack, useMediaQuery } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LoginForm from './form';

export default function Login() {
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const user = useSelector((state: AppState) => state.user);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      if (user.id) {
        router.push('/merxbox/dashboard');
      }
    }, 2000);
  }, [user.id, router]);

  const submitForm = async (values: any) => {
    console.log('LOGIN  PAGE');
  };

  return (
    <PageContainer>
      <Box
        sx={{
          position: 'relative',
          '&:before': {
            content: '""',
            background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite',
            position: 'absolute',
            height: '100%',
            width: '100%',
            opacity: '0.3',
          },
        }}
      >
        <Grid container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
          <Grid
            item
            xs={12}
            sm={12}
            lg={5}
            xl={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%', maxWidth: '450px' }}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Logo />
              </Box>
              <Stack>
                <Box>
                  <LoginForm submitForm={submitForm} />
                </Box>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}
