import React, {Component} from 'react'
import VideoSlide from './VideoSlide'
let Flickity;

const slides = [
  {'img': '../static/Assets/VideoSlider/VideoSlider1.png'},
  {'img': '../static/Assets/VideoSlider/VideoSlider2.png'},
  {'img': '../static/Assets/VideoSlider/VideoSlider3.png'}
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
      wrapAround: true,
      cellAlign: 'left',
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
          return <VideoSlide key={i} img={sl.img} />
        })}
        <style jsx>{`
          .carousel {
            display: inline-block;
            height: 380px;
            margin-left: 48px;
            width: 624px;
          }
        `}
        </style>
      </div>
    )
  }
}

export default VideoSlider