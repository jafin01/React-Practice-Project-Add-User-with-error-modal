import React from "react";
import { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
import classes from "./AddUser.module.css";

const UserInput = (props) => {
  const [username, setUsername] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState({
    isError: false,
    errorTitle: "",
    errorMessage: "",
  });

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const userAgeChangeHandler = (e) => {
    setUserAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();

    if (username.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        isError: true,
        errorTitle: "Validation Error",
        errorMessage: "Please Fill out all Fields",
      });
      return;
    }

    if (+userAge < 1) {
      setError({
        isError: true,
        errorTitle: "Age validation Error",
        errorMessage: "Age cannot be < 1",
      });
      return;
    }

    props.onSubmit({ username, userAge });

    setUsername("");
    setUserAge("");
  };

  const onModalClose = () => {
    setError({
      isError: false,
      errorTitle: "",
      errorMessage: "",
    });
  };

  return (
    <>
      {error.isError && (
        <ErrorModal
          title={error.errorTitle}
          message={error.errorMessage}
          onClose={onModalClose}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Enter User Name</label>
          <input
            onChange={usernameChangeHandler}
            value={username}
            type="text"
            name="username"
          />
          <label htmlFor="age">Enter Age(years)</label>
          <input
            onChange={userAgeChangeHandler}
            value={userAge}
            type="number"
            name="age"
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default UserInput;
