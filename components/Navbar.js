import Link from 'next/link'

const primaryLinks = [
  {"title": "Events"},
  {"title": "Tickets"},
  {"title": "Review"},
  {"title": "About"},
  {"title": "Apply"},
  {"title": "Partners"},
]

const secondaryLinks = [
  {"title": "Newsletter"},
  {"title": "Contact"},
  {"title": "Imprint"},
  {"title": "Privacy"}
]

const Navbar = () => (
  <nav className='menu' role='navigation'>
    <Link href='/'>
      <a className='ted-logo'>
        <img src='./static/Assets/Logos/Hamburg.png' />
      </a>
    </Link>
    <ul>
      {primaryLinks.map((li, i)=> {
        return (
          <li key={i} className='primary-link'>
            <a href='/'>{li.title}</a>
          </li>
        )
      })}
    </ul>
    <ul>
      {secondaryLinks.map((li, i)=> {
        return (
          <li key={i} className='secondary-link'>
            <a href='/'>{li.title}</a>
          </li>
        )
      })}
    </ul>
    <style jsx>{`
      .menu {
        align-items: center;
        background-color: var(--black);
        display: flex;
        flex-wrap: wrap;
        height: 86px;
        justify-content: space-between;
        padding: 2rem 3.2rem 1.8rem;
        width: 100%;
      }
      .ted-logo img{
        height: 50px;
        width: 268px;
      }
      ul {
        list-style-type: none;
      }
      li {
        display: inline-block;
      }
      .primary-link a{
        color: var(--white);
        font-size: 1.4rem;
        font-family: var(--bold);
        line-height: 2.2rem;
        margin-right: 24px;
        text-decoration: none;
        text-transform: uppercase;
      }
      .secondary-link {
        padding: 0 16px;
      }
      .secondary-link a{
        color: var(--white);
        font-size: 1.4rem;
        font-weight: var(--regular);
        line-height: 2.2rem;
        text-decoration: none;
      }
      .secondary-link:not(:last-child) { 
        border-right:solid 1px var(--white);
      }
    `}</style>
  </nav>
)

export default Navbar