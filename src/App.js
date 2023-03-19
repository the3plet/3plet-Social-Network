import "./style.scss"
import Login from "./pages/login/Login";
import { createBrowserRouter,Navigate,Outlet,RouterProvider} from "react-router-dom";
import Register from "./pages/register/Register";
import Navbar from "./components/navbar/navbar";
import LeftBar from "./components/leftBar/leftBar";
import RightBar from "./components/rightBar/rightBar";
import Profile from "./pages/profile/Profile";
import Home from "./pages/Home/home";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
function App() {   

  const {currentUser}=useContext(AuthContext);

  const Layout =()=>{
    return(
      <div className="">
        <Navbar/>
        <div style={{display:"flex"}}>
          <LeftBar/>
          <div style={{flex:6}}>
          <Outlet/>
          </div>
          <RightBar/>

        </div>
      </div>
    )
  }

  const ProtectedRoute =({children}) =>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children;
  }
  const router = createBrowserRouter([
    {
      path:"/", element: <ProtectedRoute><Layout/></ProtectedRoute> ,
      children:[
        {
          path:"/", element:<Home/>
        },
        {
          path:"/profile/:id", element: <Profile/>
        }
      ]
    },
    {
      path:"/login", element:<Login/>
    },
    {
      path:"/register", element:<Register/>
    }
  ])
  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
