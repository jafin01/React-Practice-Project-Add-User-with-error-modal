import React from "react";
import Card from "../UI/Card/Card";
import User from "../User/User";
import classes from "./UserList.module.css";

const UserList = (props) => {
  const userDetails = props.userDatas;

  const deleteHandler = (index) => {
    props.onDelete(index);
  } 

  return (
    <Card className={classes.users}>
      <ul>
        {userDetails.length !== 0 ? (
          userDetails.map((user, index) => {
            return (

              <User key={index} index={index} user={user} deleteHandler={deleteHandler}  />

              // <li key={index}>
              //   {`${user.username} (${+user.userAge} years)`}
              //   <Button onClick={deleteHandler}>
              //     Delete
              //   </Button>
              // </li>
            );
          })
        ) : (
          <li>No Users Found !!</li>
        )}
      </ul>
    </Card>
  );
};

export default UserList;
