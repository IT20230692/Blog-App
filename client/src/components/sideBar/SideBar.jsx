import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './sideBar.css';
import axios from 'axios';

export default function SideBar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get('/categories');
      setCats(res.data);
    };
    getCats();
  });

  return (
    <div className='sideBar'>
      <div className='sideBarItem'>
        <span className='sideBarTitle'>ABOUT ME</span>
        <img
          src='data:image/jpeg;base64,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'
          alt=''
        />
        <p>
          I am an undergraduate of BSc(Hons) in information technology at Sri
          Lanka Institute of Information Technology who is seeking an
          internship.
        </p>
      </div>

      <div className='sideBarItem'>
        <span className='sideBarTitle'>CATEGRORIES</span>
        <ul className='sideBarList'>
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className='link'>
              <li className='sideBarListItem'>{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='sideBarItem'>
        <span className='sideBarTitle'>FOLLOW US</span>
        <div className='sideBarSocial'>
          <a href='https://www.facebook.com/profile.php?id=100007044557312'>
            <i className='sideBarIcon fb fa-brands fa-square-facebook'></i>
          </a>
          <a href='https://twitter.com/sanju_chandima'>
            <i className='sideBarIcon twitter fa-brands fa-square-twitter'></i>
          </a>
          <a href='https://www.pinterest.com/sanjuchandima/'>
            <i className='sideBarIcon pinterest fa-brands fa-square-pinterest'></i>
          </a>
          <a href='https://www.instagram.com/sanju_chandima/'>
            <i className='sideBarIcon inster fa-brands fa-square-instagram'></i>
          </a>
          <a href='https://github.com/IT20230692'>
            <i className='sideBarIcon git fa-brands fa-square-github'></i>
          </a>
        </div>
      </div>
    </div>
  );
}
