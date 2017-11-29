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
    this.flkty = new Flickity(carousel, this.props.options)
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
      </div>
    )
  }
}

export default VideoSlider