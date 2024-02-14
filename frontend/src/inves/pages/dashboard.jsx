import React, { useEffect, useState } from 'react';
import axiosInstance from "../../axios/newRequest";
import { useNavigate,useParams } from 'react-router-dom';
import Cookies from 'js-cookie';

const InvestorDashboard = () => {
  // Initialize ideaData as an array since you're expecting a list of ideas
  const [ideaData, setIdeaData] = useState([]);
  const navigate=useNavigate();
  const { userId } = useParams();
  const accessToken = localStorage.getItem("accessToken");
 const [isAuthenticated, setIsAuthenticated] = useState(!!accessToken);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/backend/investors/${userId}/listideas`);
        const fetchedData = response.data;
        // Adjust here to set ideaData with the array found at fetchedData.msg
        if (fetchedData.msg && fetchedData.msg.length > 0) {
          setIdeaData(fetchedData.msg);
        }
      } catch (error) {
        console.error("There was an error fetching the data:", error);
      }
    };

    fetchData();
  }, [userId]);
  useEffect(() => {
    if (!isAuthenticated) {
      // Redirect to login page if not authenticated
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    axiosInstance
      .post('/backend/investors/logout')
      .then(() => {
        Cookies.remove('accessToken');
        localStorage.removeItem('accessToken');
        setIsAuthenticated(false);
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div>
        {ideaData.map((idea) => (
          // Correctly using idea._id for the key prop as your data structure suggests
          <div key={idea._id}>
            <h2>{idea.ideaname}</h2>
            {/* You can display more properties here as needed */}
            <p>Problem Statement: {idea.problemstatement}</p>
            <p>One Line Solution: {idea.onelinersolution}</p>
            {/* Add more properties to display as needed */}
          </div>
        ))}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};

export default InvestorDashboard;
