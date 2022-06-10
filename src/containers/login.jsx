import { Container, Flex, Input, Button, Text } from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { gql } from "graphql-tag"
import { useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

const LOGIN_USER = gql`
    mutation Mutation($loginInput:LoginInput){
        loginUser(loginInput:$loginInput){
            username
            password
            token
        }
    }
`

const LoginContainer = () => {
    let navigate = useNavigate();
    const context = useContext(AuthContext)
    const [errors, setErrors] = useState([])

    const [values, setValues] = useState({
        username: "",
        password: "",
    });

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        console.log(values);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        loginUser()
    }

    const [loginUser, { error }] = useMutation(LOGIN_USER, {
        update(proxy, { data: { loginUser: userdata } }) {
            context.login(userdata)
            console.log(userdata);
            navigate('/')
        },
        onError({ graphQLErrors }) {
            setErrors(graphQLErrors)
        },
        variables: { loginInput: values }
    })
    console.log(error);
    return (
        <>
            <Container p={"30px"}>
                <Flex flexDir={"column"} alignItems="center" justifyContent={"center"}>
                    <h1>Login</h1>
                    <Input mt="10px" placeholder='Username' name="username" onChange={onChange} />
                    <Input mt="10px" placeholder='Password' name='password' onChange={onChange} />
                    <Text mt="10px" color={"gray"}>(username:admin)</Text>
                    <Text m="10px 0" color={"gray"}>(password:admin)</Text>
                    {errors.map(({ message }, i) => {
                        return (
                            <h1 key={i}>{message}</h1>
                        )
                    }
                    )}
                    <Button
                        mt="10px"
                        fontSize={'sm'}
                        fontWeight={600}
                        color={'white'}
                        bg={'pink.400'}

                        _hover={{
                            bg: 'pink.300',
                        }}
                        onClick={onSubmit}>Login</Button>
                </Flex>
            </Container>
        </>
    )
}

export default LoginContainer