const VideoSlide =  ( {img} ) => (
  <div className='videoslide'>
    <img className='videoimage' src={img} />
    <h4>Jon Bowers</h4>
    <p>We should aim for perfection -  and stop fearing failure</p>
    <img src='../static/Assets/Play/PlayBig.png' className='play-icon'/>
    <style jsx>{`
      .videoslide {
        height: 380px;
        position: relative;  
        width: 624px;
      }
      .videoslide h4 {
        bottom: 58px;
        color: var(--white); 
        font-family: var(--regular);
        font-size: 2.4rem;  
        font-weight: normal;
        left: 32px;
        line-height: 3.2rem;
        position: absolute;
      }
      .videoslide p {
        bottom: 24px;
        color: var(--white); 
        font-family: var(--regular);
        font-size: 1.6rem;  
        font-weight: normal;
        left: 32px;
        line-height: 2.8rem;
        position: absolute;
      }
      .play-icon {
        bottom: 24px;
        height: 60px;
        position: absolute;
        right: 32px;
        width: 60px;
      }
      .videoimage {
        background: linear-gradient(180deg, rgba(2,2,23,0) 0%, #000000 100%);
        height: 100%;
        width: 100%;
      }
    `}</style>
  </div>
)

export default VideoSlide