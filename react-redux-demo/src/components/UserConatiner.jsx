import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchUsers, addUser } from "../redux/user/userActions";

const UserConatiner = ({ fetchUsers, userData, addUser }) => {
  useEffect(() => {
    fetchUsers();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    // user = {
    //   userId: Number(e.target.userId.value),
    //   title: e.target.title.value,
    //   body: e.target.body.value,
    // };
    addUser();
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="card">
        <input type="text" name="userId" placeholder="userId" />
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="body" placeholder="body" />
        <button>Add</button>
      </form>
      {userData.loading ? (
        <h2>Loading...</h2>
      ) : userData.error ? (
        <h2>{userData.error}</h2>
      ) : (
        <div>
          {userData.data.map((item) => (
            <p key={item.id}>{item.title}</p>
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    addUser: () =>
      dispatch(
        addUser({
          userId: 1,
          title: "oka bu title",
          body: "oka bu bosdy",
        })
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserConatiner);
