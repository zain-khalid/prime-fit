import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./Stacks";

const Navigation = () => {
    return (
        <NavigationContainer>
            <HomeStack />
        </NavigationContainer>
    )
}

export default Navigation;