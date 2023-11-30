import axios from "axios";
import { useState } from "react";
import styles from "./LoginForm.module.css";
// test

const LoginForm = props => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onUpdateField = e => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    alert(JSON.stringify(form, null, 2));
    axios.post("http://localhost:80/signup", form)
  };

  return (
    <form className={styles.form} onSubmit={onSubmitForm}>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Username</label>
        <input
          className={styles.formField}
          type="text"
          aria-label="Username field"
          name="email"
          value={form.email}
          onChange={onUpdateField}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Password</label>
        <input
          className={styles.formField}
          type="password"
          aria-label="Password field"
          name="password"
          value={form.password}
          onChange={onUpdateField}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Confirm Password</label>
        <input
          className={styles.formField}
          type="password"
          aria-label="Confirm password field"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={onUpdateField}
        />
      </div>
      <div className={styles.formActions}>
        <button className={styles.formSubmitBtn} type="submit">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;