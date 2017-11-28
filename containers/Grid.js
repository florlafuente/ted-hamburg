import Link from 'next/link'

const Grid = () => (
  <section>
    <h3 className='section-title'>Latest other Videos</h3>
    <Link href='/'>
      <a>
        <span>Show more</span>
        <img src='../static/Assets/Play/PlayRed.png' alt='Red play button' />
      </a>
    </Link>
  </section>
)

export default Grid