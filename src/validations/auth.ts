import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string().min(6).required(),
  phone: Yup.number().required().min(8).max(10),
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
