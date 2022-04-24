import { Typography } from '@mui/material'
import type { NextPage } from 'next'

import { Layout } from '../components/layouts'

const HomePage: NextPage = () => {
  return (
    <Layout title='home'>
      <Typography variant='h1'>Hola mundo</Typography>
    </Layout>
  )
}

export default HomePage
