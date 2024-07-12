import * as Yup from "yup";

export const validationSchema = {
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
    deadline: Yup.date().required("Application Deadline is required")
}