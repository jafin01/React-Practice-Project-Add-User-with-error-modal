import React from 'react'
import Button from '../UI/Button/Button';

const User = (props) => {

  const deleteHandler = () => {
    props.deleteHandler(props.index);
  }

  return (
    <li key={props.index}>
      {`${props.user.username} (${+props.user.userAge} years)`}
        <Button onClick={deleteHandler}>
          Delete
        </Button>
    </li>
  );
}

export default User
