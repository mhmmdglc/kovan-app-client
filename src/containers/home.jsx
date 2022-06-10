import { Box, Flex, Stack, Skeleton } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react'
import Filter from '../components/filter';
import ItemList from '../components/itemList'
import TotalCount from '../components/totalCount';
import Countdown from '../components/countdown';
import { useQuery, gql } from '@apollo/client';


export const ITEMS = gql`
query ItemsForBikes {
  itemsForBikes {
    ttl
    total_count
    nextPage
    data {
      bikes {
        is_reserved
        vehicle_type
        total_bookings
        android
        bike_id
        ios
      }
    }
  }
}
`


const HomeContainer = () => {

  const { loading, error, data, refetch } = useQuery(ITEMS);
  const [bikeList, setBikeList] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (data?.itemsForBikes) {
      setBikeList(data?.itemsForBikes?.data?.bikes);
      setCount(data?.itemsForBikes?.ttl || 0);
    }

  }, [data, loading])

  useEffect(() => {
    count === 0 && refetch()
  }, [count])

  return (
    <Box w={"100%"} alignItems={"center"}>
      {loading && <Stack>
        <Skeleton height='700px' />
      </Stack>}
      {!loading &&
        <Flex w="100%" pt="100px" justifyContent={"center"} alignItems="center" flexDirection="column">
          <Flex w={"100%"} maxW="1024px" >
            <Box w="50%">

              <Filter baseList={data?.itemsForBikes?.data?.bikes} bikeList={bikeList} setBikeList={setBikeList} />
            </Box>
            <Flex flexDir={"column"} w="50%" alignItems={"end"}>
              <TotalCount bikeList={bikeList} />
              <Countdown count={count} setCount={setCount} />
            </Flex>
          </Flex>
          <Flex maxW="1024px" w="100%">
            <ItemList bikes={bikeList} />
          </Flex>
        </Flex>}
    </Box>
  )
}

export default HomeContainer