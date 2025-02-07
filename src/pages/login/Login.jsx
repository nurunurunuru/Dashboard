import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simulated authentication (Replace with real authentication logic)
    if (email === 'user@example.com' && password === 'password') {
      localStorage.setItem('auth', JSON.stringify({ email }));
      navigate('/dashboard'); // Redirect to a protected route
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl mb-4">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4 p-6 border rounded-lg shadow-md">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded"
          required
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
