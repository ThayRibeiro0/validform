import { Flex, Box, Center, FormControl, Input, FormLabel, HStack, RadioGroup, Radio, Button, } from "@chakra-ui/react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as yup from "yup";


function App() {
  return (
    <form>
      <Box h="100vh">
        <Center
          as="header"
          h={150}
          bgImage={'https://i.pinimg.com/originals/e7/0a/ca/e70aca21915f4b9ce6b1bd29a7fb33bf.jpg'}
          color="white"
          fontWeight="bold"
          fontSize="4xl"
          pb="8"
        >
          Form
        </Center>
        <Flex
          align="center"
          justify="center"
          bg="blackAlpha.200"
          h="calc(100vh - 150px)"
          bgImage={'https://img.freepik.com/vetores-gratis/copie-o-fundo-branco-ondulado-do-espaco_23-2148845471.jpg?w=2000'}
        >
          <Center
            w="100%"
            maxW={840}
            bg="white"
            top={100}
            position="absolute"
            borderRadius={5}
            p="6"
            boxShadow="0 1px 2px #ccc"
          >
            <FormControl display="flex" flexDir="column" gap="4">
              <HStack spacing="4">
                {/* caixa de nome */}
                <Box w="100%">
                  <FormLabel fontWeight="bold" htmlFor="fullname">Full Name</FormLabel>
                  <Input required
                    type="fullname"
                    placeholder="userName"
                    name="fullname"
                    id="fullname"
                  />
                </Box>
                {/* caixa de email */}
                <Box w="100%">
                  <FormLabel fontWeight="bold" htmlFor="email">E-mail</FormLabel>
                  <Input required
                    type="text"
                    placeholder="email@email.com"
                    name="email"
                    id="email"
                  />
                </Box>
              </HStack>
              <HStack spacing="4">
                {/* caixa de email */}
                <Box w="100%>">
                  <FormLabel fontWeight="bold" htmlFor="nasc">Birth Date</FormLabel>
                  <Input required
                    id="nasc"
                    placeholder="nasc"
                    name="nasc"
                    type="date" />
                </Box>
                <Box w="100%>">
                  <FormLabel fontWeight="bold" htmlFor="ssn">SSN</FormLabel>
                  <Input required
                    minlength="10"
                    id="ssn"
                    placeholder="ssn"
                    name="ssn"
                    type="text" />
                </Box>
                <Box w="100%">
                  <FormLabel fontWeight="bold" htmlFor="natural">Naturalness</FormLabel>
                  <Input required
                    placeholder="natural"
                    name="natural"
                    type="text"
                    id="natural" />
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel fontWeight="bold" htmlFor="cellphone">Cellphone</FormLabel>
                  <Input required
                    placeholder="cellphone"
                    name="cellphone"
                    id="cellphone"
                    type="number" />
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel fontWeight="bold" htmlFor="phone">Phone</FormLabel>
                  <Input required
                    id="phone"
                    placeholder="phone"
                    name="phone"
                    type="number" />
                </Box>
                <Box w="100%">
                  <FormLabel fontWeight="bold" htmlFor="address">Address</FormLabel>
                  <Input required
                    placeholder="address"
                    name="address"
                    id="address" />
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel fontWeight="bold" htmlFor="city">City</FormLabel>
                  <Input required
                    placeholder="city"
                    name="city"
                    id="city" />
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel required fontWeight="bold">Genre</FormLabel>
                  <RadioGroup defaultValue="M">
                    <HStack spacing="24px">
                      <Radio value="M">Man</Radio>
                      <Radio value="F">Woman</Radio>
                      <Radio value="Other">Other</Radio>
                      <Radio value="Nothing">I don't want answer</Radio>
                    </HStack>
                    <HStack justify="center">
                      <Button
                        w={240}
                        p="6"
                        type="submit"
                        bg="teal.600"
                        color="white"
                        fontWeight="bold"
                        fontSize="x2"
                        mt="2"
                        _hover={{ bg: "teal.800" }}
                      >
                        Enviar
                      </Button>
                    </HStack>
                  </RadioGroup>
                </Box>
              </HStack>
            </FormControl>
          </Center>
        </Flex>
      </Box>
    </form>
  );
}

export default App;