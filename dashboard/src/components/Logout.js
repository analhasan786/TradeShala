// dashboard/src/components/LogoutButton.js
import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = `${process.env.React_frontend}`; // Redirect to login/signup app
  };

  return (
    <button onClick={handleLogout} style={styles.button}>
      Logout
    </button>
  );
};

const styles = {
  button: {
    padding: '8px 16px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default Logout;
