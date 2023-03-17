
import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Join us</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
            deleniti. Aliquam amet molestiae deleniti nesciunt culpa laudantium
            esse nobis iste labore. Libero quaerat sapiente consequuntur dolorem
            iusto quisquam nisi magnam!
          </p>
          <span>Already have an account</span>
          <Link to='/login'>
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
