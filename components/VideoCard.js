const VideoCard = () => (
  <div className='videocard'>
    <div className='videocard-container'>
      <div className='card-category'>
        <span>Sarasa</span>
      </div>
      <header className='card-header'>
        <img src='../static/Assets/Play/PlaySmall.png' />
        <span>Sarasa</span>
      </header>
      <div className='card-timer'>
        <span>23.54</span>
      </div>
    </div>
    <footer className='card-footer'>
      <img src='../static/Assets/Avatar/Avatar.png' />
      <div className='card-footer-text'>
        <h6>Wingham Rowan</h6>
        <p>Plenty of people need jobs with...</p>
      </div>
    </footer>
    <div className='overlay'>
    </div>
    <style jsx>{`
      .videocard {
        background-image: url('../static/Assets/CardsImg/card01.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-wrap: wrap;
        height: 296px;
        position: relative;
        width: 302px;
      }
      .videocard-container {
        display: flex;
        height: 100%;
        width: 100%;
        position: relative;
      }
      .card-category {
        align-items: center;
        background-color: var(--red);
        border-radius: 50px;
        display: flex;
        justify-content: center;
        height: 18px;
        position: absolute;
        right: 18px;
        top: 18px; 
        width: 65px;   
      }
      .card-category span {
        color: var(--white);
        font-family: var(--bold);   
        font-size: 1.2rem;  
        line-height: 1.6rem;  
        text-align: center; 
        text-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);}
      }
      .card-header {
        align-items: center;
        bottom: 17.5px;
        display: flex;
        flex-wrap: wrap;
        left: 17.5px;
        position: absolute;
      }
      .card-header img {
        height: 17px;
        margin-right: 7px;
        width: 17px;
      }
      .card-header span {
        color: var(--white);
        font-size: 1.4rem;
        line-height: 1.6rem;
      }
      .card-timer {
        bottom: 18px;
        border-radius: 1px; 
        background-color: rgba(0,0,0,0.7);
        display: none;
        height: 14px;
        justify-content: center; 
        position: absolute;
        right: 18px;
        width: 36px;
      }
      .card-timer span {
        color: var(--white);
        font-size: 1.2rem;  
        line-height: 1.2rem;  
        text-align: center;
      }
      .card-footer {
        align-self: flex-end;
        align-items: center;
        background-color: var(--white);
        display: none;
        flex-wrap: wrap;
        justify-content: flex-start;
        height: 78px;
        padding: 18px;
        position: relative;
        width: 100%;
      }
      .card-footer img {
        border-radius: 100%;
        height: 32px;
        margin-right: 12px; 
        width: 32px;
      }
      .card-footer-text h6{
        color: var(--gray);
        font-family: var(--bold); 
        font-size: 1.6rem;  
        line-height: 2.4rem;
      }
      .card-footer-text p{
        color: #999999; 
        font-size: 1.4rem;  
        line-height: 1.8rem;
      }
      .overlay {
        background-color: rgba(0,0,0,0.3);
        bottom: 0;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
      }
      .videocard:hover .card-category {
        z-index: 10;
      }
      .videocard:hover .overlay {
        height: 218px;
      }
      .videocard:hover .card-footer{
        display: flex;
      }
      .videocard:hover .card-timer {
        display: flex;
        z-index: 10;
      }
      .videocard:hover .videocard-container {
        height: 218px;
        z-index: 10;
      }
    `}</style>
  </div>
)

export default VideoCard