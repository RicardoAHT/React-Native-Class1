import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Formik, useField } from "formik";
import StyledTextInput from "../components/LogInPage/StyledTextInput";
import StyledText from "../components/StyledText";
import { loginValidationSchema } from "../validationSchemas/login";

const initialValues = {
    email: "",
    password: "",
}

const styles = StyleSheet.create({
    error:{
        color:"red",
        fontSize: 10,
        marginBottom: 20,
        marginTop: -5
    },
    form: {
        margin: 12
    }
})

const FormikInputValue = ({name, ...props}) => {
    
    const [ field, meta, helpers] = useField(name)

    return (
        <>
            <StyledTextInput
            error={meta.error}
                value= {field.value}
                onChangeText= {value => helpers.setValue(value)}
                {...props}
            />
            {meta.error && 
                <StyledText style={styles.error}>
                    {meta.error}
                </StyledText>
            }
        </>
    )
}
/*
const validate = (values) =>{
    const errors = {}
    if (!values.email){
        errors.email = "E-mail is required"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = "Invalid email address"
    }
    console.log(errors)
    return errors
}*/

export default function LogInPage(){
    return (
    <Formik 
        initialValues={initialValues}
        onSubmit={values => console.log(values)}
        validationSchema={loginValidationSchema}
    > 
        {({handleSubmit}) => {
            return (
            <View>
                <FormikInputValue 
                    name="email"
                    placeholder="E-mail"
                /> 
                <FormikInputValue
                    name="password"
                    placeholder="password"
                    secureTextEntry
                />
                <Button onPress={handleSubmit} title="Log In" />
            </View>
            )
        }}
    </Formik>
    )
}
/* */