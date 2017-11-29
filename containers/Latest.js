import Link from 'next/link'

const Latest = () => (
  <section className='latest-section'>
    <div className='text-container'>
      <h2>Latest <span className='red-text'>TEDx</span>Hamburg Videos</h2>
      <Link href='/'>
        <a>See more <img src='../static/Assets/Arrows/ArrowRed.png' /></a>
      </Link>
    </div>
    <style jsx>{`
      .text-container h2 {
        font-family: var(--bold);
        font-size: 3.8rem;  
        line-height: 4.6rem;
        margin-bottom: 60px;
        width: 272px; 
      }
      .text-container a{
        color: var(--red);
        font-size: 1.8rem;  
        line-height: 2.8rem;
        text-decoration: none;
      }
      .text-container img {
        height: 12px;
        margin-left: 8px;
        width: 12px;
      }
    `}</style>
  </section>
)

export default Latest