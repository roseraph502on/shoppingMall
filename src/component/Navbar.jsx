import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
import { ToggleButton } from 'primereact/togglebutton';


const Navbar = ({ authenticate, onLogout }) => {
  const menuList = ["Woman", "man", "Babys", "kids", "Sale", "Unisex"]
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      console.log(keyword);
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div className='nav'>
      <div> {/* 로그인 버튼 */}
        {authenticate ? (
          <button className='loginBtn' onClick={onLogout}>로그아웃</button>
        ) : (
          <a href="/login" className='loginBtn'>
            <FontAwesomeIcon icon={faCircleUser} fontSize='20' color='yellowgreen' />
            <div>로그인</div>
          </a>)}
      </div>
      <div>{/* 로고 */}
        <a href="/" className='logo'>Clothes #</a>
      </div>
      {/* 메뉴 */}
      {menuOpen &&(
        <div className='menu'>
          <ul>
            {menuList.map(menu => <li># {menu}</li>)}
          </ul>
          {/* 검색창 */}
          <div className='search'>
            <FontAwesomeIcon icon={faSearch} className='serachI' />
            <input type="text" onKeyDown={search} />
          </div>
        </div>
        )}
      <ToggleButton className="hamburger"
        checked={menuOpen} 
        onChange={(e) => setMenuOpen(e.value)} 
        onLabel="✖"
        offLabel="☰" />

    </div>
  )
}

export default Navbar
