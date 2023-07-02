"client";

const Login = () => {

  const handleLogin = () => {
    console.log("");
  }

  return (
        <div>
          <div>
            <input placeholder="Email" />
            <input placeholder="Password" />
          </div>
          <button onClick={handleLogin}>
            Login
          </button>
        </div>

  );
};

export default Login;
