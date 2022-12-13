import React, { useState } from "react";
import UserInput from "./Components/UserInput/AddUser";
import UserList from "./Components/UserList/UserList";

const App = () => {
  const [userDatas, setUserDatas] = useState([]);

  const onSubmit = (userData) => {
    setUserDatas((prev) => [userData, ...prev]);
  };

  const onDelete = (userIndex) => {
    console.log(userIndex);
    const newUserData = userDatas.filter((user, index) => index !== +userIndex);
    setUserDatas(newUserData);
  }

  return (
    <div>
      <UserInput onSubmit={onSubmit} />
      <UserList userDatas={userDatas} onDelete={onDelete} />
    </div>
  );
};

export default App;
