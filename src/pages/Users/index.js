import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../../redux/action/userAction";
import Table from "../../component/Table";

const styles = {
    container: {
      maxWidth: "900px",
      margin: "40px auto",
      padding: "20px",
      backgroundColor: "#fff",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      borderRadius: "10px",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },
    heading: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#333",
    },
    searchInput: {
      width: "250px",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      fontSize: "16px",
    },
    loading: {
      textAlign: "center",
      fontSize: "20px",
      color: "#007BFF",
    },
    error: {
      textAlign: "center",
      fontSize: "20px",
      color: "red",
    },
  };

const UserList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, loading, error } = useSelector((state) => state);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm)
    );
    setFilteredUsers(filtered);
  };

  const handleRowClick = (user) => {
    navigate(`/user/${user.id}`);
  };

  const columns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" },
  ];

  if (loading) return <h2 style={styles.loading}>Loading...</h2>;
  if (error) return <h2 style={styles.error}>Error: {error}</h2>;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.heading}>User List</h1>
        <input
          type="text"
          placeholder="Search users..."
          onChange={handleSearch}
          style={styles.searchInput}
        />
      </div>

      <Table columns={columns} data={filteredUsers} onRowClick={handleRowClick} />
    </div>
  );
};

export default UserList;
