import Link from 'next/link'

const HeroSlide = ( {img} ) => (
  <div className='hero-slide'>
    <img className='hero-slide-img' src={img} />
    <div className='hero-slide-header'>
      <h2>Rock the Boat</h2>
      <p>June 25, 2017</p>
      <Link href='/'>
        <a>See more <img src='../static/Assets/Arrows/ArrowRed.png' /></a>
      </Link>
    </div>
    <div className='hero-slide-footer'>
      <img src='../static/Assets/Icons/Ico-Location.png' />
      <span>Laeiszhalle</span>
      <span>Johannes-Brahams-Platz</span>
    </div>
    <style jsx>{`
      .hero-slide {
        background-color: var(--black);
        position: relative;
        height: 551px;
        width: 945px;
      }
      .hero-slide-img {
        top: 0;
        right: 0;
        position: absolute;
        height: 510px;  
        width: 784px; 
        background: linear-gradient(180deg, rgba(2,2,23,0) 0%, rgba(0,0,0,0.9) 100%); 
        box-shadow: 0 0 60px 10px rgba(0,0,0,0.2);
      }
      .hero-slide-header h2{
        position: absolute;
        top: 154px;
        color: #FDFDFD; 
        font-size: 6.2rem;  
        font-weight: bold;  
        line-height: 7.5rem;
      }
      .hero-slide-header p {
        position: absolute;
        top: 235px;
        color: #CCC;
        font-size: 2.2rem; 
        font-weight: bold;  
        line-height: 2.9ren; 
      }
      .hero-slide-header a{
        color: var(--red);
        font-size: 1.8rem;  
        line-height: 2.8rem;
        position: absolute;
        text-decoration: none;
        top: 328px;
      }
      .hero-slide-header img {
        height: 12px;
        margin-left: 8px;
        width: 12px;
      }
      .hero-slide-footer {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        height: 28px; 
        width: 333px;
        color: var(--white);
        right: 68px;
        position: absolute;
        bottom: 0;
      }
      .hero-slide-footer img{
        margin-right: 8px;
        width: 16px;
        height: 16px;
      }
      .hero-slide-footer span{
        color: var(--white);
        font-size: 16px;  
        font-weight: bold;  
        line-height: 28px;
      }
      .hero-slide-footer span:last-child{
        font-weight: normal;
        border-left: 1px solid #FFFFFF;
        padding-left: 19px;
      }
    `}</style>
  </div>
)

export default HeroSlide