import { UserSelector } from 'store/slices/userSlices';
import './userList.css'
import { useSelector } from 'react-redux';
import { IUser } from 'type/user';
import { useEffect, useRef, useState } from 'react';
import { ReactComponent as User } from 'assets/icons/user.svg';
import React from 'react';

function UserList() {
  const userList: IUser[] = useSelector(UserSelector.getUserList);

  return (
    <div className="user-list">
      {userList.map((user: IUser, index: number) => {
        return <React.Fragment key={index}> <UserItem user={user} /></React.Fragment>
      })}
    </div>
  )
}

function UserItem(props: { user: IUser }) {

  const [image, setImage] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current && props.user.image) {
      imgRef.current.src = `${props.user.image}`
    } else {
      setImage(true);
    }
  }, [props.user.image])

  return (<div className="user">
    <div className="user-info">

      {image ? (
        <div className="imageError">
          <User width={34} height={34}/>
        </div>
      ) : (
        <img
          ref={imgRef}
          alt="image_user"
          width={64}
          height={64}
          onError={() => setImage(true)}
        />
      )}

      <div>
        <div className="title">
          <div className="name">{props.user.name}</div>
          <div className="email">{props.user.email}</div>
        </div>
        <div className="bundels-list">
          {props.user.permissions?.map((bundel: string, index: number) => {
            return <div className="bundel" key={index}>{bundel}</div>
          })}
        </div>
      </div>

    </div>
    <button className='option'>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="4" viewBox="0 0 20 4" fill="none">
        <circle cx="2" cy="2" r="2" fill="#C1C1CB" />
        <circle cx="10" cy="2" r="2" fill="#C1C1CB" />
        <circle cx="18" cy="2" r="2" fill="#C1C1CB" />
      </svg>
    </button>
  </div>)
}



export default UserList