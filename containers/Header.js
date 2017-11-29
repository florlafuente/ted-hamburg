import HeroSlider from '../components/HeroSlider'

const Header = () => (
  <header>
    <HeroSlider />
    <style jsx>{`
      header {
        background-color: var(--black);
        padding: 83px 154px 80px 159px;
        width: 100%;
      }
    `}</style>
  </header>
)

export default Header