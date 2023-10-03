import { useState } from 'react';
import './App.css';
import img from "./person.png"
function App() {
  const [isActive, setIsActive] = useState(true)


  const toggleSection = () => {
    setIsActive(!isActive)
  }

  const navigationLinks = [
    {
      href: '#',
      iconClass: 'far fa-building',
      text: 'Home',
      isActive: true
    },
    {
      href: '#',
      iconClass: 'far fa-user',
      text: 'People',
      isActive: true
    },
    {
      href: '#',
      iconClass: 'fas fa-share',
      text: 'Share',
      isActive: true
    },
    {
      href: '#',
      iconClass: 'far fa-bell',
      text: 'News',
      isActive: true,
      count: 10
    },
    {
      href: '#',
      iconClass: 'fas fa-bookmark',
      text: 'Marks',
      isActive: true,
      count: 23
    },
    {
      href: '#',
      iconClass: 'fas fa-search',
      text: 'Search',
      isActive: true
    }
  ];



  return (
    <>
      <section className={isActive ? 'active' : ""}>
        <div className="button" onClick={toggleSection}>
          <i className='fas fa-bars'></i>
        </div>
        <div className='sidebar'>
          <div className='profile'>
            <div className='pro-img'>
              <img src={img} alt="User Img" className='pro-img' />
            </div>
            <div className='pro-info'>
              <h3>Joe</h3>
              <p>joe@gmail.com</p>
            </div>
          </div>
          <ul>
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className={link.isActive ? "active" : ""}>
                  <span className='icon'>
                    <i className={link.iconClass}></i>
                  </span>
                  <span className="item">{link.text}</span>
                  {link.count && <span className="count">{link.count}</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
