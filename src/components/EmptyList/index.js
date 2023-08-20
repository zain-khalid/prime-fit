import React from "react";
import { Box, Text } from "native-base";
import { colors, round, spacing } from "../../constants/styling";

const EmptyList = ({title = "No title"}) => {
    return(
        <Box
            shadow={2}
            rounded={round}
            margin={spacing}
            padding={spacing}
            backgroundColor={colors.light_grey}
        >
            <Text textAlign={"center"} color={colors.grey}>{title}</Text>
        </Box>
    )
}

export default EmptyList