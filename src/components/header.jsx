import { Container, Box, Flex, HStack, useColorModeValue, Stack, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'

const Header = () => {
  let navigate = useNavigate();
  const { user, logout } = useContext(AuthContext)

  const onLogout = () => {
    logout()
    navigate('/')
  }
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HStack spacing={8} alignItems={'center'}>

          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
            <Link to="/">Home</Link>
          </HStack>
        </HStack>


        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          {user ?
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              onClick={onLogout}>
              Logout
            </Button>
            :
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              href={'/login'}

              _hover={{
                bg: 'pink.300',
              }}>
              Login
            </Button>
          }
        </Stack>
      </Flex>
    </Box>
  )
}

export default Header