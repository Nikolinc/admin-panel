import React from 'react'
import './adminpanel.css'
import { ReactComponent as Search } from 'assets/icons/search.svg';
import UserList from 'components/userList/userList';

function AdminPanel() {


  return (
    <div className='admin-panel'>
      <div className="header">
        <h3> Команда</h3>
        <label className='search'>
          <input type="text" placeholder='Поиск по Email'/>


          <div className='search-checkbox'>
            <input type="checkbox" id="search-icon" />
            <label htmlFor="search-icon"> <Search /></label>
          </div>
        </label>
        <button className='add-user'>Добавить пользователя</button>
      </div>
      <UserList />
    </div>
  )
}

export default AdminPanel