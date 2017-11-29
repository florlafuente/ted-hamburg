import React, {Component} from 'react'
import HeroSlide from './HeroSlide'
let Flickity;

const slides = [
  {'img': '../static/Assets/HeroSlider/Slide1.png'},
  {'img': '../static/Assets/HeroSlider/Slide2.png'},
  {'img': '../static/Assets/HeroSlider/Slide3.png'}
]

const mediaLinks = [
  {
    "img": "../static/Assets/Social/Facebook.png",
    "alt": "Facebook",
    "url": "/"
  },
  {
    "img": "../static/Assets/Social/Tumblr.png",
    "alt": "Tumblr",
    "url": "/"
  },
  {
    "img": "../static/Assets/Social/Youtube.png",
    "alt": "You Tube",
    "url": "/"
  },
  {
    "img": "../static/Assets/Social/Flickr.png",
    "alt": "Flickr",
    "url": "/"
  }
]

class VideoSlider extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    Flickity = require('flickity')
    const carousel = this.refs.carousel
    const options = {
      cellSelector: '.hero-slide',
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
        <nav role="navigation" className='media-nav'>
          {mediaLinks.map((li, i)=> {
            return <a href={li.url} key={i}><img src={li.img} alt={li.alt} className='mediaIcon'/></a>
          })}
        </nav>
        <style jsx>{`
          .carousel {
            display: inline-block;
            height: 551px;
            width: 1127px;
            padding: 0 93px 0 89px;
          }
          .media-nav {
            position: absolute;
            right: 10px;
            top: 300px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 167px;
            margin-left: auto;
            width: 32px;
          }
          .mediaIcon {
            height: 3.2rem;
            width: 3.2rem;
          }
        `}
        </style>
      </div>
    )
  }
}

export default VideoSlider