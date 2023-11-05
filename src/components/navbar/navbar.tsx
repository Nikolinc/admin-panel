import React from 'react';
import { useSelector } from 'react-redux';
import { AuthSelector } from 'store/slices/authSlices';
import { Link } from 'react-router-dom';
import './navbar.css';
import { IUser } from 'type/user';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import { ReactComponent as Dashboard } from 'assets/icons/dashboard.svg';
import { ReactComponent as User } from 'assets/icons/user.svg';
import { ReactComponent as Task } from 'assets/icons/task.svg';
import { ReactComponent as MSG } from 'assets/icons/message.svg';
import { ReactComponent as Image } from 'assets/icons/image.svg';
import { ReactComponent as Team } from 'assets/icons/team.svg';
import { ReactComponent as Docs } from 'assets/icons/docs.svg';
import { ReactComponent as Coin } from 'assets/icons/coin.svg';
import { ReactComponent as Finance } from 'assets/icons/finance.svg';
import { ReactComponent as Exit } from 'assets/icons/exit.svg';





function NavBar() {

  const auth: IUser = useSelector(AuthSelector.getAuth);

  return (
    <div className="nav-bar">
      <Logo />
      <img src={auth.image} alt="avatar" width={60} height={60} />
      <div className="nav">
        <Link to="/" ><Dashboard /></Link>
        <Link to="/"><User /></Link>
        <Link to="/"><Task /></Link>
        <Link to="/"><MSG /></Link>
        <Link to="/"><Image /></Link>
        <Link to="/"><Team /></Link>
        <Link to="/"><Docs /></Link>
        <Link to="/" className='coin'><Coin /></Link>
        <Link to="/"><Finance /></Link>
        <button><Exit /></button>
      </div>

    </div>
  )
}

export default NavBar