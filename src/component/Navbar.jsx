import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';

const Navbar = () => {
  const menuList = ["Woman", "man", "Babys", "kids", "Sale", "Unisex"]
 const navigate = useNavigate();
  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      console.log(keyword); 
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div className='nav'>
      <div>
        <a href="/login" className='loginBtn'>
          <FontAwesomeIcon icon={faCircleUser} fontSize='20' color='yellowgreen' />
          <div>로그인</div>
        </a>
      </div>
      <div>
        <a href="/" className='logo'>Clothes #</a>
      </div>

      <div className='menu'>
        <ul>
          {menuList.map(menu => <li># {menu}</li>)}
        </ul>
        <div className='search'>
          <FontAwesomeIcon icon={faSearch} className='serachI' />
          <input type="text" onKeyDown={search}/>
        </div>
      </div>

    </div>
  )
}

export default Navbar
