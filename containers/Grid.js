import Link from 'next/link'
import VideoCard from '../components/VideoCard.js'

const Grid = () => (
  <section className='grid-section'>
    <h3 className='section-title'>Latest Other Videos</h3>
    <div className='video-grid'>
      <VideoCard />
    </div>
    <Link href='/'>
      <a className='show-more'>
        <span className='red-text'>Show more</span>
        <img src='../static/Assets/Play/PlayRed.png' alt='Red play button' />
      </a>
    </Link>
    <style jsx>{`
      .grid-section {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      .section-title {
        margin-right: auto;
      }
      .video-grid {
        margin: 40px 0 48px;
        width: 100%;
      }
      .show-more {
        text-decoration: none;
        font-size: 1.6rem;
        line-height: 1.8rem;
      }
      .show-more img {
        height: 14px;
        margin-left: 10px;
        width: 14px;
      }
    `}</style>
  </section>
)

export default Grid