import React, {Component} from 'react'
import HeroSlide from './HeroSlide'
let Flickity;

const slides = [
  {'img': '../static/Assets/HeroSlider/Slide1.png'},
  {'img': '../static/Assets/HeroSlider/Slide2.png'},
  {'img': '../static/Assets/HeroSlider/Slide3.png'}
]

class VideoSlider extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    Flickity = require('flickity')
    const carousel = this.refs.carousel
    const options = {
      pageDots: false,
      wrapAround: false,
      cellAlign: 'center',
      draggable: true,
      friction: 0.2,
      contain: true,
      prevNextButtons: true
    }
    this.flkty = new Flickity(carousel, options)
    this.flkty.on('cellSelect', this.updateSelected)
  }

  componentWillUnmount() {
    if (this.flkty) {
      this.flkty.off('cellSelect', this.updateSelected)
      this.flkty.destroy()
    }
  }

  render() {
    return (
      <div ref='carousel' className='carousel'>
        {slides.map((sl, i)=> {
          return <HeroSlide key={i} img={sl.img} />
        })}
        <style jsx>{`
          .carousel {
            display: inline-block;
            height: 551px;
            width: 1127px;
            padding: 0 93px 0 89px;
          }
        `}
        </style>
      </div>
    )
  }
}

export default VideoSlider