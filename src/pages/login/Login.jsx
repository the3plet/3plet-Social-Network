import React, { useContext } from "react";
import { Link} from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";


const Login = () => {
  const{login} = useContext(AuthContext);

  

const handleLogin=()=>{
    login();
    
}
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Share with us</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
            deleniti. Aliquam amet molestiae deleniti nesciunt culpa laudantium
            esse nobis iste labore. Libero quaerat sapiente consequuntur dolorem
            iusto quisquam nisi magnam!
          </p>
          <span>Don't have an account</span>
         <Link to="/register">
          <button>Register </button>
         </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <Link to='/'> 
            <button onClick={handleLogin}>Login</button>
            </Link>
            <p style={{border:"1px solid black", padding:'10px'}}>Just Press Login Button <br></br>currently no backend is conncected, thus preset login credential applies when pressing login button </p> 
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
