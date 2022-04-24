import { FC } from 'react'

import Head from 'next/head'

import { Box } from '@mui/material'

interface Props {
  title?: string
}

export const Layout:FC<Props> = ({ title = 'Game Nest dev', children}) => {
  return (
    <Box sx={{flexFlow: 1}}>
      <Head>
        <title>{title}</title>
      </Head>

      {/* Nav bar */}

      <Box sx={{ padding: '10px 20px' }} >
        {children}
      </Box>

    </Box>
  )
};