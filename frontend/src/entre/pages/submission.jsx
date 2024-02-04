import { useState } from "react";
import styles from "../assets/css/form.module.css";
import FormInput from "../components/FormInput";

const SubmissionForm = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "Idea Name",
      type: "text",
      placeholder: "Idea Name",
      rows:1,
      label: "Idea Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "Problem Statement",
      type: "text",
      placeholder: "Statement",
      rows:4,
      label: "Problem Statement",
      required: true,
    },
    {
      id: 3,
      name: "One Liner Solution",
      type: "text",
      rows:1,
      placeholder: "One Liner Solution",
      label: "One Liner Solution",
      required:true,
    },
    {
      id: 4,
      name: "Detailed Solution",
      type: "text",
      rows:4,
      placeholder: "Detailed Solution",
      label: "Detailed Solution",
      required: true,
    },
    {
      id: 5,
      name: "Business Model",
      type: "text",
      rows:3,
      placeholder: "Business Model",
      label: "Business Model",
      required: true,
    },
    {
      id: 6,
      name: "Competition",
      type: "text",
      rows:1,
      placeholder: "Competition",
      label:"Competition",
      required: true,
    },
    {
      id: 7,
      name: "Your Profession",
      type: "text",
      rows:1,
      placeholder: "Your Profession",
      label: "Your Profession",
      required: true,
    },
    {
      id: 8,
      name: "Equity",
      type: "text",
      rows:1,
      placeholder: "Equity",
      label: "Equity",
      required: true,
    },
    {
      id: 9,
      name: "Amount",
      type: "text",
      rows:1,
      placeholder: "Amount",
      label: "Amount",
      required: true,
    },
    {
      id: 10,
      name: "No of days(Until active action)",
      type: "text",
      rows:1,
      placeholder: "No of days(Until active action)",
      label: "No of days(Until active action)",
      required: true,
    },
    {
      id: 11,
      name: "Debt if required",
      type: "text",
      rows:1,
      placeholder: "Debt if required",
      label: "Debt if required",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.App}>
      <form className={styles.Form} onSubmit={handleSubmit}>
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
          accept=".pdf, .jpg, .png" // Specify the file types you want to accept
        />
      </div>
        <button className={styles.Submit} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SubmissionForm;



