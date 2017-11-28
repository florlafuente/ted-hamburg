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

const partners = [
   {
    "img": "../static/Assets/Logos/Berlin.png",
    "alt": "Ted Berlin",
    "url": "/"
  },
  {
    "img": "../static/Assets/Logos/Munchen.png",
    "alt": "Ted München",
    "url": "/"
  }
]

const Footer = () => (
  <footer>
    <nav role="navigation" className='media-nav'>
      {mediaLinks.map((li, i)=> {
        return <a href={li.url} key={i}><img src={li.img} alt={li.alt} className='mediaIcon'/></a>
      })}
    </nav>
    <p className='lic'>This independent TEDx event is operated under license from <span className='red-text'>TED</span>.</p>
    <div className='partners-container'>
      <p>Check our partners:</p>
      <ul>
        {partners.map((li, i)=> {
          return <a href={li.url} key={i} className='partners-link'><img src={li.img} alt={li.alt} /></a>
        })}
      </ul>
    </div>
    <style jsx>{`
      footer {
        align-items: center;
        background-color: #242424;
        border-top: 2px solid var(--red);
        display: flex;
        flex-wrap: wrap;
        height: 64px;
        padding: 0 32px;
        width: 100%;
      }
      .mediaIcon {
        height: 3.2rem;
        width: 3.2rem;
        margin-right: 8px;
      }
      .lic {
        color: var(--white);
        font-size: 1.4rem;
        line-height:2.8rem;
        margin-left: 64px;
      }
      .partners-container {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        margin-left: auto;
      }
      .partners-container p {
        color: var(--white);
        font-size: 1.3rem;
        line-height: 2.8rem;
        margin-right: 32px;
      }
      .partners-link img {
        height: 20px;
      }
      .partners-link img:last-child {
        margin-left: 25px;
      }
    `}</style>
  </footer>
)

export default Footer