import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/api";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await API.post("/auth/login", form);
      login(res.data.token);
      navigate("/notes");
    } catch (err) {
      setError(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="form-title">Welcome Back</h2>
        
        {error && <p className="error-message">{error}</p>}
        
        <div className="form-inputs">
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>

        <button className="submit-button">
          Sign In
        </button>

        <p className="register-text">
          Don't have an account?{" "}
          <a href="/register" className="register-link">
            Register here
          </a>
        </p>
      </form>
      <style>{`
        .login-container {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 90vh;
          background: linear-gradient(to bottom right, #E8EAF6, #F5F5F5);
          padding: 1rem;
        }

        .login-form {
          background: white;
          padding: 2rem;
          border-radius: 0.5rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 28rem;
        }

        .form-title {
          font-size: 1.875rem;
          font-weight: bold;
          text-align: center;
          color: #4338CA;
          margin-bottom: 2rem;
        }

        .error-message {
          color: #EF4444;
          font-size: 0.875rem;
          background-color: #FEF2F2;
          padding: 0.75rem;
          border-radius: 0.25rem;
          margin-bottom: 1.5rem;
        }

        .form-inputs {
          margin-bottom: 1.5rem;
          margin-right: 0.5rem;
        }

        .input-field {
          width: 100%;
          border: 2px solid #E5E7EB;
          padding: 0.75rem 1rem;
          border-radius: 0.375rem;
          margin-bottom: 1rem;
          transition: border-color 0.2s;
        }

        .input-field:focus {
          outline: none;
          border-color: #6366F1;
        }

        .submit-button {
          width: 100%;
          background-color: #4F46E5;
          color: white;
          padding: 0.75rem;
          border-radius: 0.5rem;
          font-size: 1.125rem;
          font-weight: 600;
          transition: all 0.2s;
        }

        .submit-button:hover {
          background-color: #4338CA;
          transform: scale(1.02);
        }

        .register-text {
          text-align: center;
          color: #4B5563;
          margin-top: 1.5rem;
        }

        .register-link {
          color: #4F46E5;
          font-weight: 500;
          text-decoration: none;
        }

        .register-link:hover {
          color: #4338CA;
        }
      `}</style>
    </div>
  );
};

export default Login;
