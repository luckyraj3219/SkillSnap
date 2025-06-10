import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Registration successful!');
      } else {
        alert(data.error || 'Registration failed');
      }
    } catch (err) {
      alert('Error connecting to server');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Register</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>Full Name</label>
        <input
          type="text"
          name="name"
          required
          style={styles.input}
          onChange={handleChange}
        />
        <label style={styles.label}>Email</label>
        <input
          type="email"
          name="email"
          required
          style={styles.input}
          onChange={handleChange}
        />
        <label style={styles.label}>Password</label>
        <input
          type="password"
          name="password"
          required
          style={styles.input}
          onChange={handleChange}
        />
        <label style={styles.label}>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          required
          style={styles.input}
          onChange={handleChange}
        />
        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '450px',
    margin: '60px auto',
    padding: '30px',
    backgroundColor: '#fefefe',
    borderRadius: '10px',
    boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '35px',
    color: '#2c3e50',
  },
  form: { display: 'flex', flexDirection: 'column' },
  label: { marginBottom: '8px', fontWeight: '600' },
  input: {
    padding: '12px',
    marginBottom: '20px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    padding: '14px',
    backgroundColor: '#27ae60',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: '700',
  },
};

export default Register;
