import { Button, Typography } from '@mui/material'
import type { NextPage } from 'next'

import { Layout } from '../components/layouts'

const HomePage: NextPage = () => {
  return (
    <div>
      <Layout title='home'>
      <Typography variant='h1'>Hola mundo</Typography>
    </Layout>
    </div>
    
  )
}

export default HomePage
