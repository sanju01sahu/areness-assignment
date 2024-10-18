import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import styled from "styled-components";

const baseUrl = "https://areness-assignment.onrender.com";
const signUpUser = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  password: "",
};

const SignUp = () => {
  const [state, setState] = useState(signUpUser);
  const [comp, setComp] = useState(false);
  //   const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const comingFrom = location.state?.from?.pathname || "/login";

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // console.log(e.target.value);
    setState(() => {
      return {
        ...state,
        [name]: value,
      };
    });
  };
  const comparePass = (e) => {
    if (state.password !== e.target.value) {
      setComp(true);
    }
    setComp(false);
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    const data = {
      firstName: state.firstName,
      lastName: state.lastName,
      userName: state.userName,
      email: state.email,
      password: state.password,
    };
    fetch(`${baseUrl}/user/signup`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        alert(`${res.msg}`);
        navigate(comingFrom);
      })
      .catch((err) => {
        console.log(err);
        // alert("Somthing Went Wrong \nPlease SignUp Again")
      });

    // console.log(state, data);
    // dispatch(signUp(data)).then((res) => {
    //   navigate(comingFrom, { replace: true });
    // });
  };

  return (
    <DIV>
      <div className="signup-parent">
        <div className="signup">
          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/aebf/3f1c/e468166d30a3ba064e731222dc4e66ae?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bQBq4HHCEnjVt7S5KFC54t8NvG3wpIvxmmdguVZhPXFmVUetFOIdsMhz6JnlrWw2CrYvNVyS7XShLnWeOeqw1ce6bZSwP~plgBAeE1boRp6Mzu2T9Z-axzIQpcAp2cmZzF6cmClkUPaT-xDmrLDcpDDhEzHmHYxYlOrft1gP2Xs3U2fCl5wxCduPixU31JyeYO19e54v881RkogZ9QBIoWua2YlengbhMYUG6PeX~XGhcO7usYD8ETvk2UL6LPm8iC~A~0rWaySztX5mLARI5xV8hf01VSPfMKMbqdDD6ljF0gmN6CT2D~Bg2HeDwLVPr9T~6uV~MNGbDCQ76OToog__"
              alt=""
            />
          </div>
          <form className="sign-up-form" onSubmit={handleSignUp}>
            <h1>SignUp</h1>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              onChange={handleChange}
              required
            />
            <input
              type="test"
              name="userName"
              placeholder="Enter User Name"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirm-password"
              placeholder="Confirm Password"
              onChange={comparePass}
              required
            />
            <input type="checkbox" name="conditions" id="conditions" />
            <label for="conditions" >I agree to all <Link to="#" >terms</Link></label>
            <button type="submit">Sign Up</button>
            <p>
              Already have an account?<Link to="/login">Log In</Link>
            </p>
          </form>
        </div>
      </div>
    </DIV>
  );
};

export default SignUp;

// font-family: 'Nunito Sans', sans-serif;
// font-family: 'Oswald', sans-serif;

const DIV = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,300;6..12,400&family=Oswald:wght@500&display=swap");

  .signup-parent {
    background: url("https://s3-alpha-sig.figma.com/img/598b/e375/6c1c4a778dc678d9b5c27f1c8875582d?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JMcw1r2Q4XMUmPVN7BMkpYBcvW9a182joUhR7-ChMqYiRWhlRlGFW3lVR~Ovb8fIs0ir0IhPuB4WrosmDNpPF~duv6eF7UXt2TtR-NHQS7Tv26cVHuuCXexxnBXkNAG-G5dHUQoDyehGo1GV~ug-sX~uAcak0Y9qvIZAHodhYp4KdsF53sUfGqsnYJq3sMsyft0JAtTm3Zinjf8dCmglGCy1r~rRNtpdx8-o~TIP~EJ2ry2PELHv6w~Do3hX1e6PuuyqaI8Mry-r1tcwUrd4IeRrqsrUHeKp-DsAgZfH2oFaIlLUcIiCipwtySLzlNGkb9ZD~AfpciC4HjDoHdMFgg__")
      rgba(255, 103, 103, 0.8);
    background-size: cover;
    background-blend-mode: multiply;
    padding: 100px;
  }

  .signup {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
    background: white;
    margin: auto;
    padding: 50px 10px;
    border-radius: 4px;
  }
  .signup::after {
    background: ;
  }
  .signup > form {
    display: flex;
    flex-direction: column;
    font-family: "Nunito Sans";
    background-color: rgba(255, 255, 255, 0.9);
    padding: 50px 75px;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .signup > form > lable {
  }
  .signup > form > input {
    padding: 5px 10px;
    font-size: 18px;
    margin-bottom: 10px;
  }
  .signup > form > button {
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
    margin-top: 30px;
  }
  @media (max-width: 400px) {
    .signup {
      margin: auto;
      padding: 10px;
      flex-direction: column;
    }
    img {
      width: 80%;
    }
    .signup > form > button {
      width: 80%;
    }

    .signup > form {
      width: 90%;
      padding: 30px 10px;
    }
  }
`;
