import React from "react";
import { AspectRatio, Box, Button, HStack, Heading, Image, ScrollView, Text, VStack } from "native-base";
import { colors, round, spacing } from "../../../../constants/styling";

const Detail = ({navigation, route}) => {

    const { data } = route.params

    return (
        <Box
            flex={1}
            backgroundColor={colors.white}
        >
            <Box
                flex={1}
                safeAreaTop
            >
                <Box
                    overflow={"hidden"}
                    paddingBottom={5}
                >
                    <Box
                        backgroundColor={colors.white}
                        style={{
                            elevation: 5,
                            shadowRadius: 5,
                            shadowOpacity:  0.75,
                            shadowColor: colors.primary,
                            shadowOffset: { width: 0, height: 5 },
                        }}
                    >
                        <Heading textAlign={"center"} color={colors.primary} paddingY={spacing * 0.5}>{data?.title}</Heading>
                    </Box>
                </Box>
                <ScrollView flex={1}>
                    <VStack
                        flex={1} 
                        space={3}
                        padding={spacing * 0.5}
                    >
                        <Box alignItems={"center"}>
                            <AspectRatio
                                height={{base: 500}}
                                ratio={{ base: 3 / 4 }}
                            >
                                <Image
                                    rounded={round}
                                    alt={data.title}
                                    source={{uri: data?.img}}
                                    backgroundColor={colors.light_grey}
                                />
                            </AspectRatio>
                        </Box>
                        <HStack justifyContent={"space-between"}>
                            <HStack flex={1} alignItems={"center"} space={3}>
                                <Text fontWeight={"bold"} color={colors.black}>Price</Text>
                                <Text color={colors.grey}>{data?.price}</Text>
                            </HStack>
                            <HStack flex={1} justifyContent={"flex-end"} space={3}>
                                <Text fontWeight={"bold"}>Price</Text>
                                <Text color={colors.grey}>{data?.sellerFeeBasisPoints}</Text>
                            </HStack>
                        </HStack>
                        <HStack space={3}>
                            <Text fontWeight={"bold"}>Mint Addr</Text>
                            <Text color={colors.grey}>{data?.mintAddr}</Text>
                        </HStack>
                        <VStack space={3}>
                            <Text textAlign={"center"} color={colors.black} fontWeight={"bold"}>Content</Text>
                            <Text color={colors.grey}>{data?.content}</Text>
                        </VStack>
                    </VStack>
                </ScrollView>
                <Box  justifyContent={"flex-end"} padding={spacing * 0.5}>
                    <Button
                        rounded={round}
                        backgroundColor={colors.primary}
                        onPress={()=>navigation.goBack()}
                    >Back</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Detail;