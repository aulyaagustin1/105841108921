import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignupPage from './assets/component/SignUp';
import LoginPage from './assets/component/Login';
import ForgotPasswordPage from './assets/component/ForgotPassword';

const Stack = createNativeStackNavigator();

function App() {
    
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignUp">
                <Stack.Screen name="Sign Up" component={SignupPage}/>
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="Forgot Password" component={ForgotPasswordPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;

