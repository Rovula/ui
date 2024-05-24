// src/Form.tsx
import React, { useState } from "react";
import * as yup from "yup";

interface FormValues {
  name: string;
  email: string;
  password: string;
}

interface FormProps {
  onSubmit: (values: FormValues) => void;
  className?: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Form: React.FC<FormProps> = ({ onSubmit, className = "" }) => {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ [key in keyof FormValues]?: string }>(
    {}
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await schema.validate(values, { abortEarly: false });
      setErrors({});
      onSubmit(values);
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const validationErrors: { [key in keyof FormValues]?: string } = {};
        err.inner.forEach((error) => {
          if (error.path) {
            validationErrors[error.path as keyof FormValues] = error.message;
          }
        });
        setErrors(validationErrors);
      }
    }
  };

  return (
    <form className={`form ${className}`} onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
