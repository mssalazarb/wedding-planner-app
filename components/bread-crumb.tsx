import BreadCrumbType from '@/types/bread-crumb.type';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Breadcrumbs, Grid, Theme, Typography } from '@mui/material';
import NextLink from 'next/link';

const Breadcrumb = ({ subtitle, items, title, children }: BreadCrumbType) => (
  <Grid
    container
    sx={{
      backgroundColor: 'primary.light',
      borderRadius: (theme: Theme) => theme.shape.borderRadius / 4,
      p: '30px 25px 20px',
      marginBottom: '30px',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <Grid item xs={12} sm={6} lg={8} mb={1}>
      <Typography variant="h4">{title}</Typography>
      <Typography
        color="textSecondary"
        variant="h6"
        fontWeight={400}
        mt={0.8}
        mb={0}
      >
        {subtitle}
      </Typography>
      <Breadcrumbs
        separator={
          <FontAwesomeIcon icon={faCircle} fontSize="0.2rem" />
        }
        sx={{ alignItems: 'center', mt: items ? '10px' : '' }}
        aria-label="breadcrumb"
      >
        {items
          ? items.map((item) => (
            <div key={item.title}>
              {item.to ? (
                <NextLink href={item.to} passHref>
                  <Typography color="textSecondary">{item.title}</Typography>
                </NextLink>
              ) : (
                <Typography color="textPrimary">{item.title}</Typography>
              )}
            </div>
          ))
          : ''}
      </Breadcrumbs>
    </Grid>
    <Grid item xs={12} sm={6} lg={4} display="flex" alignItems="flex-end">
      <Box
        sx={{
          display: { xs: 'none', md: 'block', lg: 'flex' },
          alignItems: 'center',
          justifyContent: 'flex-end',
          width: '100%',
        }}
      >
        {children ? (
          <Box sx={{ top: 'px', position: 'absolute' }}>{children}</Box>
        ) : (
          <>
            <Box sx={{ top: '0px', position: 'absolute' }}>
              <img
                src='/images/svgs/icon-connect.svg'
                alt={'breadcrumbImg'}
                style={{ width: '100px', height: '100px' }}
              />
            </Box>
          </>
        )}
      </Box>
    </Grid>
  </Grid>
);

export default Breadcrumb;
