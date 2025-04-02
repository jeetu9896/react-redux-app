import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UserDetail = React.memo(() => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserDetail = useCallback(async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      if (!response.ok) throw new Error("User not found");
      const data = await response.json();
      setUser(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [id]); // Dependency array ensures function is recreated only when `id` changes

  useEffect(() => {
    if (id) fetchUserDetail();
  }, [id, fetchUserDetail]); // Ensures `fetchUserDetail` is only called when `id` changes

  const handleBackClick = useCallback(() => {
    navigate(-1);
  }, [navigate]); // Memoizing navigation function

  const styles = useMemo(
    () => ({
      container: {
        maxWidth: "500px",
        margin: "40px auto",
        padding: "25px",
        backgroundColor: "#fff",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "12px",
        textAlign: "center",
        fontFamily: "'Arial', sans-serif",
      },
      title: {
        fontSize: "28px",
        fontWeight: "bold",
        color: "#333",
        marginBottom: "20px",
      },
      detailContainer: {
        textAlign: "left",
        marginBottom: "20px",
      },
      detailRow: {
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 0",
        borderBottom: "1px solid #eee",
        fontSize: "16px",
        color: "#555",
      },
      button: {
        padding: "12px 20px",
        border: "none",
        borderRadius: "8px",
        backgroundColor: "#007BFF",
        color: "#fff",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
        transition: "0.3s",
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
      errorContainer: {
        textAlign: "center",
        maxWidth: "500px",
        margin: "40px auto",
        padding: "25px",
        backgroundColor: "#fff",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "12px",
      },
    }),
    []
  ); // Styles remain unchanged throughout re-renders

  if (loading) return <h2 style={styles.loading}>Loading...</h2>;
  if (error)
    return (
      <div style={styles.errorContainer}>
        <h2 style={styles.error}>Error: {error}</h2>
        <button onClick={handleBackClick} style={styles.button}>
          Back
        </button>
      </div>
    );

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{user.name}</h1>

      <div style={styles.detailContainer}>
        <div style={styles.detailRow}>
          <strong>Username:</strong> <span>{user.username}</span>
        </div>
        <div style={styles.detailRow}>
          <strong>Email:</strong> <span>{user.email}</span>
        </div>
        <div style={styles.detailRow}>
          <strong>Phone:</strong> <span>{user.phone}</span>
        </div>
        <div style={styles.detailRow}>
          <strong>Website:</strong>{" "}
          <a
            href={`https://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {user.website}
          </a>
        </div>
        <div style={styles.detailRow}>
          <strong>Company:</strong> <span>{user.company.name}</span>
        </div>
        <div style={styles.detailRow}>
          <strong>Address:</strong>
          <span>
            {user.address.street}, {user.address.city}, {user.address.zipcode}
          </span>
        </div>
      </div>

      <button onClick={handleBackClick} style={styles.button}>
        Back
      </button>
    </div>
  );
});

export default UserDetail;
