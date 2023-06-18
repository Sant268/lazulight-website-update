import React from 'react'
import Countdown, { CountdownRenderProps } from 'react-countdown'
import { Textbox } from '../components/Textbox'
import classesVideo from '../../year1/components/Video.module.scss'

const countdownRenderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed
}: CountdownRenderProps): JSX.Element => {
  if (completed) {
    return <>Soon</>
  }
  // Render countdown
  return (
    <>{days} days, {hours}h:{minutes}m:{seconds}s</>
  )
}

const releaseDate = '2023-06-17T16:59:00+02:00'

export default function Song (): JSX.Element {
  return (
    <>
      <Textbox>
        <div className={classesVideo.container}>
          <iframe
            src='https://www.youtube.com/embed/2w9x1dfV9lA'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </div>

      </Textbox>
    </>
  )
}
