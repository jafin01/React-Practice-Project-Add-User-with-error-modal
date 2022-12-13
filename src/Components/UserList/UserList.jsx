import React from "react";
import Card from "../UI/Card/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  const userDetails = props.userDatas;
  return (
    <Card className={classes.users}>
      <ul>
        {userDetails.length !== 0 ? (
          userDetails.map((user, index) => {
            return (
              <li key={index}>{`${user.username} (${+user.userAge} years)`}</li>
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
