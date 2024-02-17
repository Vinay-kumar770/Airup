import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../assets/css/form.module.css";
import FormInput from "../components/FormInput";
import axiosInstance from "../../axios/newRequest";
import Cookies from "js-cookie";
import { ethers } from "ethers";
import { useStateContext } from "../../context";

const SubmissionForm = () => {
  const { submitIdea,connect,address} =useStateContext();
  if (address) {
    console.log("Address", address);
  } else {
    connect();
  }
  const [values, setValues] = useState({
    ideaName: "",
    problemStatement: "",
    oneLinerSolution: "",
    detailedSolution: "",
    businessModel: "",
    competition: "",
    yourProfession: "",
    equity: "",
    amount: "",
    noOfDays: "",
    debtIfRequired: "",
    //file: null, // Added for file
  });

  const { userId } = useParams();
  const accessToken = Cookies.get("accessToken");
  const inputs = [
    {
      id: 1,
      name: "ideaName",
      type: "text",
      placeholder: "Idea Name",
      rows:1,
      label: "Idea Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "problemStatement",
      type: "text",
      placeholder: "Statement",
      rows:4,
      label: "Problem Statement",
      required: true,
    },
    {
      id: 3,
      name: "oneLinerSolution",
      type: "text",
      rows:1,
      placeholder: "One Liner Solution",
      label: "One Liner Solution",
      required:true,
    },
    {
      id: 4,
      name: "detailedSolution",
      type: "text",
      rows:4,
      placeholder: "Detailed Solution",
      label: "Detailed Solution",
      required: true,
    },
    {
      id: 5,
      name: "businessModel",
      type: "text",
      rows:3,
      placeholder: "Business Model",
      label: "Business Model",
      required: true,
    },
    {
      id: 6,
      name: "competition",
      type: "text",
      rows:1,
      placeholder: "Competition",
      label:"Competition",
      required: true,
    },
    {
      id: 7,
      name: "yourProfession",
      type: "text",
      rows:1,
      placeholder: "Your Profession",
      label: "Your Profession",
      required: true,
    },
    {
      id: 8,
      name: "equity",
      type: "text",
      rows:1,
      placeholder: "Equity",
      label: "Equity",
      required: true,
    },
    {
      id: 9,
      name: "amount",
      type: "text",
      rows:1,
      placeholder: "Amount",
      label: "Amount",
      required: true,
    },
    {
      id: 10,
      name: "noOfDays",
      type: "text",
      rows:1,
      placeholder: "No of days(Until active action)",
      label: "No of days(Until active action)",
      required: true,
    },
    {
      id: 11,
      name: "debtIfRequired",
      type: "text",
      rows:1,
      placeholder: "Debt if required",
      label: "Debt if required",
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
  Object.keys(values).forEach(key => {
    formData.append(key, values[key]);
  });
  // Append file if it exists
  if (values.file) {
    formData.append("ideaImage", values.file); // Change "file" to "ideaImage"
}
    const ideaDataString = JSON.stringify(values); // Serialize form values to a string
  
    // Submit to the blockchain
    try {
      //await submitIdea(ideaDataString); // Assuming IdeaSubmission handles the serialization internally if needed
  
      // Proceed with the Axios call if needed after successful blockchain submission
      const response = await axiosInstance.post(`/backend/entrepreneur/${userId}/ideaSubmission`, formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'multipart/form-data', // Important for sending files
        },
      });
  
      if ('data' in response && response.data) {
        console.log('Submission successful', response.data);
      } else {
        console.error('Submission was not successful', response.data.message); // Assuming the response contains a message field for errors
      }
    } catch (error) {
      console.error('There was an error submitting the form:', error.response ? error.response.data : error);
    }
  };
  
  

  const onChange = (e) => {
    if (e.target.type === "file") {
      // For file inputs, handle the files property
      setValues({ ...values, file: e.target.files[0] });
    } else {
      // For other inputs, handle the value property
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className={styles.App}>
      <form className={styles.Form} onSubmit={handleSubmit} encType="multipart/form-data">
        <h1 className={styles.FormHeader}>Idea Submission</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div>
          <label className={styles.Label}>Choose a file:</label>
          <input
  type="file"
  accept=".pdf, .jpg, .png"
  onChange={onChange}
  name="ideaImage" // Adjust this to match the backend expectation
/>
        </div>
        <button className={styles.Submit} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SubmissionForm;