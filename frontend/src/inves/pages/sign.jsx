import React ,{useEffect,useState}from "react";
 import * as Components from './signcom';
 import "./sign.css";
 import axiosInstance from "../../axios/newRequest";
 import { useNavigate } from "react-router-dom";

 function InvestorRegister() {
     const [signIn, toggle] = React.useState("true");
     const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate();
     useEffect(() => {
        document.body.classList.add('sign');
        return () => {
          document.body.classList.remove('sign');
        };
      }, []);

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSignUp = async (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page
        try {
            const response = await axiosInstance.post('/backend/investors/register', {
                username: formData.username,
                email: formData.email,
                password: formData.password,
            });
            console.log(response.data); // Handle the response as needed
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error("Error signing up:", error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                console.error("Error signing up: No response received", error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error signing up:', error.message);
            }
        }
    };
    
    const handleSignIn = async (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page
        try {
            const response = await axiosInstance.post('/backend/investors/login', {
                email: formData.email,
                password: formData.password,
            });
            console.log(response.data);
            localStorage.setItem('accessToken', JSON.stringify(response.data));

        // Clear input fields or perform any other actions upon successful login
            const userId=response.data._id;
            navigate(`/investor/${userId}`) 
            setFormData({ username: '', password: '' });// Handle the response as needed
        } catch (error) {
            if (error.response) {
                console.error("Error signing in:", error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                console.error("Error signing in: The request was made but no response was received");
            } else {
                // Something else caused the error
                console.error("Error signing in:", error.message);
            }
        }
    };
    

      return(
          <Components.Container>
              <Components.SignUpContainer signinin={signIn}>
                  <Components.Form onSubmit={handleSignUp}>
                      <Components.Title>Create Account</Components.Title>
                      <Components.Input type='text' placeholder='Name' name='username' onChange={handleInputChange} className="text-black"/>
                    <Components.Input type='email' placeholder='Email' name='email' onChange={handleInputChange} className="text-black"/>
                    <Components.Input type='password' placeholder='Password' name='password' onChange={handleInputChange} className="text-black"/>
                      <Components.Button type="submit">Sign Up</Components.Button>
                  </Components.Form>
              </Components.SignUpContainer>

              <Components.SignInContainer signinin={signIn}>
              <Components.Form onSubmit={handleSignIn}>
                    <Components.Title>Sign in</Components.Title>
                    <Components.Input type='email' placeholder='Email' name='email' onChange={handleInputChange} />
                    <Components.Input type='password' placeholder='Password' name='password' onChange={handleInputChange} />
                    <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                    <Components.Button type="submit">Sign In</Components.Button>
                </Components.Form>
            </Components.SignInContainer>

              <Components.OverlayContainer signinin={signIn}>
                  <Components.Overlay signinin={signIn}>

                  <Components.LeftOverlayPanel signinin={signIn}>
                      <Components.Title>Welcome Back!</Components.Title>
                      <Components.Paragraph>
                          To keep connected with us please login with your personal info
                      </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle("true")}>
                          Sign In
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>

                      <Components.RightOverlayPanel signinin={signIn}>
                        <Components.Title>Hello, Investor!</Components.Title>
                        <Components.Paragraph>
                            Enter Your personal details and start journey with us
                        </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle("false")}>
                                Sign Up
                            </Components.GhostButton> 
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>

          </Components.Container>
      )
 }

 export default InvestorRegister;