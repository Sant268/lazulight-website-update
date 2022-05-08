import React from 'react'
import '../components/TalentLayout.scss'
import '../components/ProjectPages.scss'
import Image from '../components/Image'
import LazulightCorner from '../assets/Corners/LazuLight-Corner.webp'
import FNFLogo from '../assets/FNF/Lazunight Thumbnail.webp'

// Slide show dependencies
// Doc: https://react-slick.neostack.com/docs/api
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

// Slide show slides
import EliraSlide from '../assets/FNF/Elira Collage_cf50.webp'
import PomuSlide from '../assets/FNF/Pomu Collage_cf50.webp'
import FinanaSlide from '../assets/FNF/Finana Collage_cf50.webp'

interface Props {
  page: string
}

export default function Fnf (props: Props): JSX.Element {
  const slideShowSettings = {
    className: 'center',
    dots: true,
    // adaptiveHeight: true,
    focusOnSelect: true,
    centerMode: true,
    infinite: true,
    centerPadding: '10%',
    slidesToShow: 1,
    speed: 500
  }

  return (
    <div className='talent-layout-container'>

      {/* Heading */}
      <div className='project-heading-container'>
        <h1 className='project-heading-text'>Lazunight Funkin</h1>
        <Image src={FNFLogo} className='project-heading-image' enableZoom />
      </div>

      {/* Slide Show */}
      <div className='talent-text-container'>
        <Image className='talent-corner' src={LazulightCorner} />
        <div className={`talent-text-inner ${props.page}-border`}>
          <Slider {...slideShowSettings} className='slideshow-container'>
            <div>
              <Image src={EliraSlide} className='slideshow-slide' />
            </div>
            <div>
              <Image src={PomuSlide} className='slideshow-slide' />
            </div>
            <div>
              <Image src={FinanaSlide} className='slideshow-slide' />
            </div>
          </Slider>

          {/* Description & Download */}
          <div className='project-description-container'>
            <h3>A LazuLight Friday Night Funkin' Mod</h3>
            <p>Step into the shoes of Pomu, who, in celebration of LazuLight's upcoming first year anniversary, will be rehearsing for their grand concert with her friends Finana and Elira in the hopes of giving their fans the best performance possible!</p>

            <h3>Permissions &amp; Notice</h3>
            <p>We give permission to Elira, Pomu, and Finana to play this game on stream. We declare that the game does not contain any copyrighted material other than the property of ANYCOLOR Inc. We declare that this game does not contain material that violates the YouTube Community Guidelines.</p>
            <p>This is a work of fiction. Any similarity to real businesses, locations, and events is purely coincidental. The characters portrayed in this story are not intended to represent the views and opinions of the actual talents, Nijisanji, or ANYCOLOR Inc.</p>
            <p>This is a fan-made game intended for the enjoyment of other fans and the talents in celebration of Lazulight's one year anniversary. The creators are in no way related to ANYCOLOR Inc, Nijisanji, or the talents present in this game. </p>

            <h3>Download</h3>
            <h4>Full Game</h4>
            {/* <a href='/downloads/vn' download > */}
            <button className='project-download-button lazulight-border'>Download Game</button>
            {/* </a> */}
          </div>
        </div>
      </div>

      <div className='talent-text-container'>
        <Image className='talent-corner' src={LazulightCorner} />
        <div className={`talent-text-inner ${props.page}-border`}>
          {/* TODO: just hard code in the content here. No need to spend more time on anything fancy */}
          <h2>Credits</h2>
          <LazunightFunkinCredits />
        </div>
      </div>

    </div>
  )
}
function LazunightFunkinCredits (): JSX.Element {
  return (
    <div className='credits-text'>
      <h3>Director, UI Artist</h3>
      <ul><li><p><a href='https://www.youtube.com/c/CoZm0Plays'>CoZm0</a></p></li></ul>
      <h3>Animator, Programmer, Modder</h3>
      <ul><li><p><a href='https://www.youtube.com/c/KVNK3VIN'>KVN</a></p></li></ul>
      <h3>Character Sprite Artist, Animator Supervisor</h3>
      <ul><li><p><a href='https://twitter.com/That1PlantGuy'>Plant Guy</a></p></li></ul>
      <h3>Main Menu Artist</h3>
      <ul><li><p>TIP</p></li></ul>
      <h3>Character Portrait Artist</h3>
      <ul><li><p>cooper</p></li></ul>
      <h3>Character Portrait Designer</h3>
      <ul><li><p>Agora</p></li></ul>
      <h3>Background Artist</h3>
      <ul><li><p>Neyecole</p></li></ul>
      <h3>Background Art Designer</h3>
      <ul><li><p><a href='https://twitter.com/nobu_okt'>Professor Nobu</a></p></li></ul>
      <h3>Musician</h3>
      <ul><li><p><a href='https://www.youtube.com/channel/UCTmBhasnypdfoBUe3bpSb5g'>Maarbble</a></p></li></ul>
      <h3>Musician</h3>
      <ul><li><p><a href='https://www.youtube.com/c/eivesohn'>Eivesohn</a></p></li></ul>
      <h3>Charter</h3>
      <ul><li><p><a href='https://twitter.com/TheCoolStalker'>CoolStalker</a></p></li></ul>
    </div>
  )
}
