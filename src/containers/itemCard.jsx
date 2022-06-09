import { Container, Flex } from '@chakra-ui/react';
import React, { useState } from 'react'
import Filter from '../components/filter';
import ItemList from '../components/itemList'

const ItemCard = (prop) => {

    const [bikeList, setBikeList] = useState(prop?.item?.data?.bikes);

    console.log(bikeList);
    return (
        <Container>
            <Flex maxW="1024px" w="100%" pt="100px" justifyContent={"center"} flexDirection="column">

                {bikeList && <Filter baseList={prop?.item?.data?.bikes} bikeList={bikeList} setBikeList={setBikeList} />}
                {bikeList && <ItemList bikes={bikeList} />}
            </Flex>
        </Container>
    )
}

export default ItemCard