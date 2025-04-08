import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const menuList = ["#Woman","#man","#Babys", "#kids", "#Sale", "#Unisex"]

  return (
    <div className='nav'>
        <a href="/login" className='loginBtn'>
            <FontAwesomeIcon icon={faCircleUser} fontSize='24' color='yellowgreen'/>
            <div>로그인</div>
        </a>
        <a  href="/" className='logo'>
        Clothes #
        </a>
        <div className='menu'>
            <ul>
            {menuList.map(menu=><li>{menu}</li>)}
            </ul>
            <div className='search'>
            <FontAwesomeIcon icon={faSearch} className='serachI'/>
            <input type="text" />
            
            </div>
        </div>
    </div>
  )
}

export default Navbar
