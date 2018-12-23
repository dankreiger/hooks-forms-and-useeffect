import React, { useState } from 'react';

const initialFormState = {
  username: '',
  email: '',
  password: ''
};

export default function Register() {
  const [form, setForm] = useState(initialFormState);

  const [user, setUser] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    setUser(form);
    setForm(initialFormState);
  };

  const handleChange = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Register</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'grid',
          alignItems: 'center',
          justifyItems: 'center'
        }}
      >
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
          value={form.username}
        />
        <input
          type="email"
          placeholder="E-Mail Address"
          name="email"
          onChange={handleChange}
          value={form.email}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={form.password}
        />
        <button type="submit">Submit</button>
      </form>

      {user && JSON.stringify(user, null, 2)}
    </div>
  );
}
