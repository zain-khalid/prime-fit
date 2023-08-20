import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./HomeStack/Home";
import Detail from "./HomeStack/Detail";

const Stack = createNativeStackNavigator();
let screenDefaultOptions = {
    headerShown: false
}

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"home"} component={Home} options={screenDefaultOptions} />
            <Stack.Screen name={"detail"} component={Detail} options={screenDefaultOptions} />
        </Stack.Navigator>
    )
}

export default HomeStack;