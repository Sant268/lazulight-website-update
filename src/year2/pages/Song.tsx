import SongCredits from '../components/SongCredits'
import { Textbox } from '../components/Textbox'
import classesVideo from '../../year1/components/Video.module.scss'

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

      <Textbox>
        <SongCredits />
      </Textbox>
    </>
  )
}
