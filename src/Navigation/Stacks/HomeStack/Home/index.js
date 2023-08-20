import React, { useState } from "react";
import { AspectRatio, Box, Button, FlatList, HStack, Image, Input, Pressable } from "native-base";
import { colors, round, spacing } from "../../../../constants/styling";
import axiosInstance from "../../../../helper/axiosInstance";
import { EmptyList } from "../../../../components";
import { loadingObjects } from "../../../../constants/loading"

const Home = ({navigation}) => {

    const [name, setName] = useState("")
    const [data, setData] = useState([])
    const [error, setError] = useState({})
    const [loading, setLoading] = useState(false)
    const [offset, setOffset] = useState(0)

    const getDataHandler = (loadMore = false) => {
        if(loading) return;
        setError({})
        setLoading(true)
        axiosInstance.get(`/getListedNftsByCollectionSymbol?collectionSymbol=${encodeURI(name)}&limit=20&offset=${offset}`)
        .then((res)=>{
            const { results = [] } = res.data;
            if(loadMore){
                setOffset(offset + 20)
                setData([...data, ...results])
            } else {
                setOffset(20)
                setData([ ...results])
            }
            setLoading(false)
        })
        .catch((err)=>{
            setLoading(false)
            setError(err)
        })
    }

    const Item = ({item}) => {
        return (
            <Box
                flex={1}
                alignItems={"center"}
                padding={spacing * 0.5}
            >
                <Pressable onPress={()=>navigation.navigate('detail', {data: item})} >
                    <AspectRatio
                        height={{base: 200}}
                        ratio={{ base: 3 / 4 }}
                    >
                        <Image
                            alt={item.id}
                            rounded={round}
                            resizeMode={"cover"}
                            source={{uri: item?.img}}
                            backgroundColor={colors.light_grey}
                        />
                    </AspectRatio>
                </Pressable>
            </Box>
        )
    }

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
                    paddingBottom={5}
                    overflow={"hidden"}
                >
                    <HStack
                        space={3}
                        padding={spacing * 0.5}
                        borderColor={colors.black}
                        backgroundColor={colors.white}
                        style={{
                            elevation: 5,
                            shadowRadius: 5,
                            shadowOpacity:  0.75,
                            shadowColor: colors.primary,
                            shadowOffset: { width: 0, height: 5 },
                        }}
                    >
                        <Input
                            flex={1}
                            value={name}
                            borderWidth={0}
                            variant={"unstyled"}
                            borderRadius={round}
                            autoCapitalize={"none"}
                            backgroundColor={colors.light_grey}
                            onChangeText={(value)=>setName(value)}
                            placeholder={"Type here to search..."}
                        />
                        <Button
                            borderRadius={round}
                            onPress={()=>getDataHandler()}
                            backgroundColor={colors.primary}
                            disabled={loading || name.length == 0}
                        >Search</Button>
                    </HStack>
                </Box>
                <FlatList
                    flex={1}
                    numColumns={2}
                    renderItem={Item}
                    keyExtractor={(item)=>item.id}
                    showsVerticalScrollIndicator={false}
                    onEndReached={({ distanceFromEnd }) => {
                        if (distanceFromEnd < 0 || data.length == 0) return;
                        getDataHandler(true)
                    }}
                    data={loading ? [...data, ...loadingObjects] : [...data]}
                    ListEmptyComponent={<EmptyList title={!!error.message ? error.message : "No bear found."} />}
                />
            </Box>
        </Box>
    )
}

export default Home;