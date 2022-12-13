import React, { useState } from "react";
import UserInput from "./Components/UserInput/AddUser";
import UserList from "./Components/UserList/UserList";

const App = () => {
  const [userDatas, setUserDatas] = useState([]);

  const onSubmit = (userData) => {
    setUserDatas((prev) => [userData, ...prev]);
  };

  return (
    <div>
      <UserInput onSubmit={onSubmit} />
      <UserList userDatas={userDatas} />
    </div>
  );
};

export default App;
