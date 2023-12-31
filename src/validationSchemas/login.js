import * as yup from "yup"

export const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email("Escribe un email valido")
        .required("E-mail is rerquired"),
    password: yup
        .string()
        .min(5, "Too short")
        .max(30, "Too long!")
        .required("Password is required")
})