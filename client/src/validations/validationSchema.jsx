import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  title: Yup.string().required("Job title is required"),
  jobType: Yup.string().required("Job Type is required"),
  workSetting: Yup.string().required("Work Setting is required"),
  category: Yup.string().required("Category is required"),
  wage: Yup.number()
    .typeError("Wage must be a number")
    .required("Wage is required"),
  description: Yup.string().required("Job Description is required"),
  name: Yup.string().required("Company Name is required"),
  location: Yup.string().required("Location is required"),
  deadline: Yup.date().required("Application Deadline is required"),
});

export const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Invalid Email")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 Characters long")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one digit")
    .matches(
      /[!@#$%^&*(),.?":{}|<>\s]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
  password2: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirmed Password is required"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string().required("Email is required"),
});

export const profileSchema = Yup.object().shape({
  firstName: Yup.string().required("Fist name is required"),
  lasttName: Yup.string().required("last name is required"),
  location: Yup.string().required("location is required"),
  resume: Yup.string(),
  profilePicture: Yup.string(),
});
