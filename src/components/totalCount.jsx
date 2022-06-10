import React from 'react'
import { Flex } from '@chakra-ui/react'


const TotalCount = ({ bikeList }) => {
  return (
    <div>   <Flex justifyContent="end">
      Total Bookings of Listed Bikes: {bikeList.length}
    </Flex></div>
  )
}

export default TotalCount