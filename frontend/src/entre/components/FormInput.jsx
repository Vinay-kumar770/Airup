import { useState } from "react";
import styles from "../assets/css/form.module.css";
const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id,rows, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className={styles.FormInput}>
      <label className={styles.Label}>{label}</label>
      <textarea
       className={styles.textArea}
        cols={65}
        rows={rows}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
    </div>
  );
};

export default FormInput;
