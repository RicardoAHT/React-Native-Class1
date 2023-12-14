import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import StyledText from './StyledText'
import Constants from "expo-constants"
import theme from '../theme'
import { Link, useLocation } from 'react-router-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight +10,
        paddingBottom: 10,
        paddingLeft: 10,
        flexDirection: "row",
        gap: 10
    },
    text: {
        color: theme.appBar.textSecundary
    },
    active: {
        color: theme.appBar.textPrimary
    }
})

const AppBarTab = ({children, to}) => { // No esta funcionando correctamente
    const { pathname } = useLocation()
    const active = pathname === to

    const textStyles = [
        styles.text,
        active && styles.active
    ]

    return (
        <Link to={to} >
            <StyledText fontWeight="bold" style={textStyles}/*No esta funcionando el style */  >
                {children}
            </StyledText>
        </Link>
    )
}


const AppBar = () => {
    
  return (
    <View style={styles.container} >
        <AppBarTab to="/">
            Home
        </AppBarTab>
        <AppBarTab to="/signin">
            Sign-In
        </AppBarTab>
        <AppBarTab to="/images">
            Galery
        </AppBarTab>
    </View>
  )
}

export default AppBar