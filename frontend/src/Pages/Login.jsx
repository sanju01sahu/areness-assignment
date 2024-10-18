import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {
  getUserData,
  loginSuccess,
  loginFailure,
} from "../Redux/AuthRedux/action";
import styled from "styled-components";

const baseUrl = "https://areness-assignment.onrender.com";

let loginUser = {
  email: "",
  password: "",
};

const Login = () => {
  const [state, setState] = useState(loginUser);
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  const userData = useSelector((store) => store.AuthReducer.userData);
  const isLogin = useSelector((store) => store.AuthReducer.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const comingFrom = location.state?.from?.pathname || "/";

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  //   useEffect(() => {
  //     dispatch(getUserData());
  //   }, []);

  const handleAuth = (e) => {
    e.preventDefault();
    // console.log(state);
    // console.log(userData);

    // let newUserData = userData.filter(
    //   (ele) => ele.email === state.email && ele.password === state.password
    // );

    // // console.log(newUserData);
    // if (
    //   newUserData.length === 1 &&
    //   newUserData[0].email == state.email &&
    //   newUserData[0].password == state.password
    // ) {
    //   localStorage.clear();
    //   localStorage.setItem("userId", newUserData[0].id);
    //   dispatch(loginSuccess());
    //   navigate(comingFrom, { replace: true });
    // } else {
    //   dispatch(loginFailure());
    // }
    fetch(`${baseUrl}/user/login`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((data) => data.json())
      .then((res) => {
        // alert(res.msg)
        console.log(res);
        localStorage.setItem("token", res.token);
        localStorage.setItem("user", JSON.stringify(res.user));
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        alert("Somthing Went Wrong \nPlease SignUp Again");
      });
  };

  return (
    <DIV>
      <div className="login-parent">
      <div className="login">
        <div>
          <img
            src="https://s3-alpha-sig.figma.com/img/aebf/3f1c/e468166d30a3ba064e731222dc4e66ae?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bQBq4HHCEnjVt7S5KFC54t8NvG3wpIvxmmdguVZhPXFmVUetFOIdsMhz6JnlrWw2CrYvNVyS7XShLnWeOeqw1ce6bZSwP~plgBAeE1boRp6Mzu2T9Z-axzIQpcAp2cmZzF6cmClkUPaT-xDmrLDcpDDhEzHmHYxYlOrft1gP2Xs3U2fCl5wxCduPixU31JyeYO19e54v881RkogZ9QBIoWua2YlengbhMYUG6PeX~XGhcO7usYD8ETvk2UL6LPm8iC~A~0rWaySztX5mLARI5xV8hf01VSPfMKMbqdDD6ljF0gmN6CT2D~Bg2HeDwLVPr9T~6uV~MNGbDCQ76OToog__"
            alt=""
          />
        </div>
        <form onSubmit={handleAuth}>
          <h1>Log In</h1>
          {isLogin ? <h2>Invalid user/password</h2> : ""}
          <lable for="email">Email</lable>
          <input
            type="email"
            name="email"
            placeholder="Username"
            value={state.email}
            onChange={handleChange}
          />
          <lable for="password">Password</lable>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
          />
          <p>
            <Link to="/">Forgot Password?</Link>
          </p>
          <button type="submit"> Login</button>
          <p>
            Don't have an account?<Link to="/signup">Register</Link>
          </p>
        </form>
      </div>
      </div>
    </DIV>
  );
};

export default Login;
// font-family: 'Nunito Sans', sans-serif;
// font-family: 'Oswald', sans-serif;

const DIV = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,300;6..12,400&family=Oswald:wght@500&display=swap");
   .login-parent{
    background: url("https://s3-alpha-sig.figma.com/img/598b/e375/6c1c4a778dc678d9b5c27f1c8875582d?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JMcw1r2Q4XMUmPVN7BMkpYBcvW9a182joUhR7-ChMqYiRWhlRlGFW3lVR~Ovb8fIs0ir0IhPuB4WrosmDNpPF~duv6eF7UXt2TtR-NHQS7Tv26cVHuuCXexxnBXkNAG-G5dHUQoDyehGo1GV~ug-sX~uAcak0Y9qvIZAHodhYp4KdsF53sUfGqsnYJq3sMsyft0JAtTm3Zinjf8dCmglGCy1r~rRNtpdx8-o~TIP~EJ2ry2PELHv6w~Do3hX1e6PuuyqaI8Mry-r1tcwUrd4IeRrqsrUHeKp-DsAgZfH2oFaIlLUcIiCipwtySLzlNGkb9ZD~AfpciC4HjDoHdMFgg__")
      rgba(255, 103, 103, 0.8);
    background-size: cover;
    background-blend-mode: multiply;
    padding: 100px;
  }

  .login {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    margin: auto;
    background: white;
    padding: 50px 10px;
    border-radius: 4px;
  }
  .login > form {
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.9);
    font-family: "Nunito Sans";
    padding: 50px 75px;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .login > form > lable {
  }
  .login > form > input {
    padding: 5px 10px;
    font-size: 18px;
    margin-bottom: 10px;
  }
  .login > form > button {
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 103, 103, 0.8);
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 20px 0;
    border-radius: 5px;
    cursor: pointer;
    width: 200px;
    margin: auto;
  }
  @media (max-width: 400px) {
    .login {
      margin: auto;
      padding: 10px;
      flex-direction: column;
    }
    .login > form > button {
      width: 80%;
    }
    img {
      width: 80%;
    }
    .login > form {
      width: 90%;
      padding: 30px 10px;
    }
  }
`;
