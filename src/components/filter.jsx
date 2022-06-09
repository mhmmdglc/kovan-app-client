import React, { useState, useEffect } from 'react'
import { Input, Stack, InputGroup, InputLeftElement, Flex, Select } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

const Filter = ({ baseList, bikeList, setBikeList }) => {
    const [filterInput, setFilterInput] = useState("");
    const [filterSelect, setFilterSelect] = useState("");
    const filterList = baseList.map(a => a?.vehicle_type).filter((v, i, a) => (a.indexOf(v) === i && v !== null));

    console.log(filterList);
    useEffect(() => {
        setBikeList(baseList);
        if (filterInput !== "") {
            setBikeList((prevState) => {
                return prevState.filter((bike) => {
                    return bike?.bike_id?.toLowerCase().includes(filterInput.toLowerCase())
                });
            })
        }
        if (filterSelect !== "") {
            setBikeList((prevState) => {
                return prevState.filter((bike) => {
                    return bike?.vehicle_type?.toLowerCase().includes(filterSelect.toLowerCase())
                })
            });
        }
        console.log(filterSelect);
    }, [filterInput, filterSelect])

    console.log(bikeList);
    console.log(filterInput);
    return (
        <Flex flexDir="row" pb="20px" w="100%">
            <Stack spacing={4} w="40%">
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<Search2Icon color='gray.300' />}
                    />
                    <Input type='text' placeholder='Search by bike_id' onChange={(val) => setFilterInput(val.target.value)} />
                </InputGroup>
            </Stack>

            <Select placeholder='All' pl="10px" w="40%" onChange={(val) => setFilterSelect(val.target.value)}>
                {filterList.map((item, index) => {
                    return (
                        <option key={index} value={item}>{item}</option>
                    )
                })}
            </Select>
            <Flex justifyContent="end">
                Total Bookings of Listed Bikes:  {bikeList.length}
            </Flex>
        </Flex>

    )
}

export default Filter