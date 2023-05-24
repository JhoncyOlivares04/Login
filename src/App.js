import React, { useState } from 'react';
import './componente.css'; // Importa el archivo CSS para los estilos

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí puedes realizar la lógica de autenticación con el email y la contraseña ingresados
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleGoogleLogin = () => {
    // Aquí puedes implementar la lógica de inicio de sesión con Google
    console.log('Iniciar sesión con Google');
  };

  return (
    <div className="login-container"> {/* Aplica la clase CSS para el contenedor principal */}
      <h2>Login</h2>
      <form className="login-form"> {/* Aplica la clase CSS para el formulario */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <button type="button" onClick={handleGoogleLogin}>
          Login with Google
        </button>
      </form>
    </div>
  );
}

export default App;
