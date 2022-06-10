import React, { useState, useEffect } from 'react'
import { Input, Stack, InputGroup, InputLeftElement, Flex, Select } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

const Filter = ({ baseList, setBikeList }) => {
    const [filterInput, setFilterInput] = useState("");
    const [filterSelect, setFilterSelect] = useState("");
    const filterList = baseList.map(a => a?.vehicle_type).filter((v, i, a) => (a.indexOf(v) === i));

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
    }, [filterInput, filterSelect])

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
                    if (!item) return null;
                    return (
                        <option key={index} value={item}>{item}</option>
                    )
                })}
            </Select>

        </Flex>

    )
}

export default Filter