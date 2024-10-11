import React, { useState } from 'react';
import style from './register.module.css';
import Nav from '../Nav';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';


const App = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleLoginSignup = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div>
            <Nav />
            <div className={style.Register}>
                <div className={style.container}>
                    <div className={style.leftpanel}>
                        <h1>DT TV</h1>
                        <p>A BETTER CHOICE FOR YOU</p>
                        {/* Change button text and function based on the isLogin state */}
                        <p>
                            {isLogin ? "Don't have an account?" : "Already have an account?"}
                        </p>
                        <button className={style.primarybutton} onClick={toggleLoginSignup}>
                            {isLogin ? "Sign Up" : "Log In"}
                        </button>
                    </div>

                    {/* Conditionally rendering Login or Signup form */}
                    {isLogin ? <Login toggleForm={toggleLoginSignup} /> : <Signup toggleForm={toggleLoginSignup} />}
                </div>
            </div>
            <Footer />
        </div>
    );
};

const Login = ({ toggleForm }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // for redirection

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(''); // clear any previous error messages
        setMessage(''); // clear any previous success messages
    
        try {
            const response = await fetch('http://127.0.0.1:8000/api/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                })
            });
    
            const data = await response.json();
    
            if (response.ok) {
                // Save the access token and refresh token to localStorage
                localStorage.setItem('access_token', data.access);
                localStorage.setItem('refresh_token', data.refresh);
                localStorage.setItem('user_id', data.user_id);
                localStorage.setItem('email', data.email);
    
                setMessage('Login successful! Redirecting to home page...');
                
                // Redirect to home after 2 seconds
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            } else {
                setError(data.error || 'Invalid username or password. Please try again.');
            }
        } catch (err) {
            setError('Network error. Please try again later.');
        }
    };
    
    return (
        <div className={style.formcontainer}>
            <h2>Log In</h2>
            <form onSubmit={handleLogin}>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button className={style.primarybutton} type="submit">Log In</button>

                {/* Display success or error messages */}
                {message && <p className={style.success}>{message}</p>}
                {error && <p className={style.error}>{error}</p>}
            </form>
        </div>
    );
};

const Signup = ({ toggleForm }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');
    
        try {
            const response = await fetch('http://127.0.0.1:8000/api/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    email: email,
                }),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                setMessage('Registration successful! You can now log in.');
            } else {
                // Check for field-specific errors
                if (data.username) {
                    setError(data.username.join(' ')); // Combine array of errors if any
                } else if (data.email) {
                    setError(data.email.join(' '));
                } else {
                    setError('An error occurred during registration.');
                }
            }
        } catch (err) {
            setError('Network error. Please try again later.');
        }
    };
    return (
        <div>
            <div className={style.formcontainer}>
                <h2>Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <input 
                        type="text" 
                        placeholder="UserName" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <button className={style.primarybutton} type="submit">Sign Up</button>

                    {/* Display success or error messages */}
                    {message && <p className={style.success}>{message}</p>}
                    {error && <p className={style.error}>{error}</p>}

                    <div className={style.sociallogin}>
                        <button className={`${style.socialbutton} ${style.facebook}`}>Log in with Facebook</button>
                        <button className={`${style.socialbutton} ${style.google}`}>Log in with Google</button>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default App;
