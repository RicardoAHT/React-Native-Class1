import React from "react"
import { Text, StyleSheet } from "react-native"
import theme from "../theme"

/* Creando los estilos */
const styles = StyleSheet.create({
    text:{
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    bold:{
        fontWeight: theme.fontWeights.bold
    },
    colorPrimary: {
        color: theme.colors.primary
    },
    colorSecondary: {
        color: theme.colors.textSecundary
    },
    subheading: {
        fontSize: theme.fontSizes.subheading
    },
    small: {
        fontSize: 10
    },
})

/*Exporto los estilos*/ //Los aplico en el componente Credits
export default function StyledText ({
    align, children, color, fontSize, fontWeight, style,  ...restOfProps
}){
    const textStyles = [
        styles.text, // valor por defecto personalizado
        align === "center" && styles.textAlignCenter, // opciones personalizadas
        color === "primary" && styles.colorPrimary,
        color === "secondary" && styles.colorSecondary,
        fontSize === "subheading" && styles.subheading,
        fontWeight === "bold" && styles.bold,

    ]

    return(
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}

