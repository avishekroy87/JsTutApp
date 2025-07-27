import React, { useState } from 'react'
import './App.css'
import { Card, CardMedia, IconButton, Stack, Typography } from '@mui/material'
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded'
import PauseRounded from '@mui/icons-material/PauseRounded'
import ShuffleRoundedIcon from '@mui/icons-material/ShuffleRounded'
import FastRewindRounded from '@mui/icons-material/FastRewindRounded'
import FastForwardRounded from '@mui/icons-material/FastForwardRounded'
import LoopRoundedIcon from '@mui/icons-material/LoopRounded'







const App: React.FC = () => {
  const [paused, setPaused] = useState<boolean>(false);
    const imgUrl = import.meta.env.REACT_APP_IMG_URL;

  return (
   <Card
  variant="outlined"
  sx={{  p: 2,
    width: { xs: '100%', sm: 'auto' },
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    alignItems: 'center',
    gap: 2,
  }}
>
  <CardMedia
    component="img"
    width="100"
    height="100"
    alt="Contemplative Reptile album cover"
    src={imgUrl || 'https://via.placeholder.com/100'}
    sx={{    width: { xs: '100%', sm: 100 },
    }}
  />
  <Stack direction="column" alignItems="center" spacing={1} useFlexGap>
    <div>
      <Typography color="text.primary" fontWeight="semiBold">
        Contemplative Reptile
      </Typography>
      <Typography
        variant="caption"
        color="text.secondary"
        fontWeight="medium"
        textAlign="center"
        sx={{ width: '100%' }}
      >
        Sounds of Nature
      </Typography>
    </div>
    <Stack direction="row" alignItems="center" spacing={1} useFlexGap>
      <IconButton aria-label="Shuffle" disabled size="small">
        <ShuffleRoundedIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="Fast rewind" disabled size="small">
        <FastRewindRounded fontSize="small" />
      </IconButton>
      <IconButton
        aria-label={paused ? 'Play music' : 'Pause music'}
        onClick={() => setPaused((val: boolean) => !val)}
        sx={{ mx: 1 }}
      >
        {paused ? <PlayArrowRounded /> : <PauseRounded />}
      </IconButton>
      <IconButton aria-label="Fast forward" disabled size="small">
        <FastForwardRounded fontSize="small" />
      </IconButton>
      <IconButton aria-label="Loop music" disabled size="small">
        <LoopRoundedIcon fontSize="small" />
      </IconButton>
    </Stack>
  </Stack>
</Card>
  )
}

export default App