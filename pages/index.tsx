import { Button, Typography } from '@mui/material'
import type { NextPage } from 'next'

import { Layout } from '../components/layouts'
import { HeroRegister } from '../components/ui'

const HomePage: NextPage = () => {
  return (
    <div>
      <Layout title='home'>
        <HeroRegister/>
      </Layout>
    </div>
    
  )
}

export default HomePage
