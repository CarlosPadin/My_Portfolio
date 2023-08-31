import { Stack, Typography } from '@mui/material'
import React, { FC } from 'react'

interface Props {
    title: string,
}

const Title: FC<Props> = ({ title }) => {
  return (
    <Stack alignItems='center' sx={{ marginTop: '5rem'}}>
        <Typography variant='h2' className={'specialTypo'}>{title}</Typography>
    </Stack>
  )
}

export default Title;
