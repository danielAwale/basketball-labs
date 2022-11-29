import React, { Fragment, useState, useEffect } from "react";

const Watchlist = ({ setAuth }) => {

  const [name, setName] = useState("");

  async function getName() {
    try {
      const response = await fetch("http://localhost:5000/watchlist/", {
        method: "GET",
        headers: { jwt_token: localStorage.token }
      });
      console.log(response);
      const parseRes = await response.json();

      console.log(parseRes);

      setName(parseRes.user_name)

    } catch (error) {
      console.error(error.message);
    }
  }

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setAuth(false);
  }

  useEffect(() => {
    getName();
  });

  return (
    <Fragment>
      <h1>Watchlist {name}</h1>
      <button className="btn btn-primary" onClick={e => logout(e)}>Logout</button>
    </Fragment>
  );
};

export default Watchlist;