import Link from 'next/link'
import VideoCard from '../components/VideoCard.js'

const data = [
  {
    img: '../static/Assets/CardsImg/card01.png',
    title: 'A New Kind of Job Market',
    category: 'TEDTalk',
    time: '23:34'
  },
  {
    img: '../static/Assets/CardsImg/card02.png',
    title: 'A school in the cloud',
    category: 'Education',
    time: '23:34'
  },
  {
    img: '../static/Assets/CardsImg/card03.png',
    title: 'Artificial Intelligence',
    category: 'Technology',
    time: '23:34'
  },
  {
    img: '../static/Assets/CardsImg/card04.png',
    title: 'Matching the human mind',
    category: 'Design',
    time: '23:34'
  },
  {
    img: '../static/Assets/CardsImg/card05.png',
    title: 'Exploring New Territories',
    category: 'Science',
    time: '23:34'
  },
  {
    img: '../static/Assets/CardsImg/card06.png',
    title: 'Urban Connectors',
    category: 'Education',
    time: '23:34'
  }
]

const Grid = () => (
  <section className='grid-section'>
    <h3 className='section-title'>Latest Other Videos</h3>
    <div className='video-grid'>
      {data.map((it, i)=> {
      return <VideoCard key={i} img={it.img} title={it.title} category={it.category} time={it.time}/>
      })}
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
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 40px 0 32px;
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