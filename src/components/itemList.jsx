import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  TableContainer,
  Icon,
  Flex
} from '@chakra-ui/react'
import ModalDialog from './modalDialog';
import { useState, useEffect } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

const ItemList = (prop) => {

  const { bikes } = prop
  const [products, setProducts] = useState([])
  const [paginationNumber, setPaginationNumber] = useState(0);

  useEffect(() => {
    paginatedData(1)
    setPaginationNumber(Math.ceil(bikes.length / 5))
  }, [bikes]);

  const paginatedData = (e) => {
    setProducts(bikes.slice((e - 1) * 5, (e * 5)));
  };

  return (
    <TableContainer w="100%">
      <Table variant='simple' size='lg'>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Vehicle Type</Th>
            <Th >Actions</Th>
          </Tr>
        </Thead>
        <Tbody >
          {products?.map((bike, index) => {
            if (!bike?.bike_id) return null;
            return (
              <Tr key={index}>
                <Td>{bike?.bike_id}</Td>
                <Td>{bike?.vehicle_type}</Td>
                <Td >
                  <ModalDialog bike={bike} />
                </Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
      <Flex pt="15px" alignItems="center" justifyContent={"center"} w={"100%"}>
        <Icon as={ArrowLeftIcon} mr="10px" />
        {Array.from(Array(paginationNumber), (i, e) => {
          return (
            <Button
              ml="10px"
              bg="white"
              onClick={() => paginatedData(e + 1)}
              key={e}>{e + 1}
            </Button>)
        })}
        <Icon as={ArrowRightIcon} ml="10px" />
      </Flex>
    </TableContainer>
  )
}

export default ItemList