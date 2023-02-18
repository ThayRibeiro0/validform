import { Flex, Box, Center, FormControl, Input, FormLabel, HStack, RadioGroup, Radio, Button, } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

function App() {
  


  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [nasc, setNasc] = useState("");
  const [ssn, setSsn] = useState("");
  const [natural, setNatural] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [genre, setGenre] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const errors = {};
    if (!fullname) {
      errors.fullname = "Fullname is required";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email address is invalid";
    }
    if (!nasc) {
      errors.nasc = "Birthdate is required";
    }
    if (!ssn) {
      errors.ssn = "SSN is required";
    } else if (!/^\d{3}-?\d{2}-?\d{4}$/.test(ssn)) {
      errors.ssn = "Please enter a valid SSN (e.g. 123-45-6789)";
    }
    if (!natural) {
      errors.natural = "Naturalness is required";
    }
    if (!cellphone) {
      errors.cellphone = "Cellphone is required";
    } else if (!/^(\+?\d{1,3}[- ]?)?\d{10}$/.test(cellphone)) {
      errors.cellphone = "Please enter a valid cellphone number (10 digits)";
    }
    if (!address) {
      errors.address = "Address is required";
    }
    if (!city) {
      errors.city = "City is required";
    }
    if (!genre) {
      errors.genre = "Genre is required";
    }
    setErrors(errors);
  }, [fullname, email, nasc, ssn, natural, cellphone, address, city, genre]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data
  };

  return (
    <form onSubmit={handleSubmit}>
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
                    type="text"
                    placeholder="userFullname"
                    name="fullname"
                    value={fullname}
                    onChange={(event) => setFullname(event.target.value)}
                    id="fullname"
                  />
                  {errors.fullname && <span style={{ color: "red" }}>{errors.fullname}</span>}
                </Box>
                {/* caixa de email */}
                <Box w="100%">
                  <FormLabel fontWeight="bold" htmlFor="email">E-mail</FormLabel>
                  <Input required
                    type="text"
                    placeholder="email@email.com"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
                </Box>
              </HStack>
              <HStack spacing="4">
                {/* caixa de email */}
                <Box w="100%>">
                  <FormLabel fontWeight="bold" htmlFor="nasc">Birthdate</FormLabel>
                  <Input required
                    id="nasc"
                    placeholder="nasc"
                    name="nasc"
                    type="date"
                    value={nasc}
                    onChange={(event) => setNasc(event.target.value)} 
                  />
                  {errors.nasc && <span style={{ color: "red" }}>{errors.nasc}</span>}
                </Box>
                <Box w="100%>">
                  <FormLabel fontWeight="bold" htmlFor="ssn">SSN</FormLabel>
                  <Input required
                    minlength="9"
                    id="ssn"
                    placeholder="ssn"
                    name="ssn"
                    type="text" 
                    value={ssn}
                    onChange={(event) => setSsn(event.target.value)}
                  />
                  {errors.ssn && <span style={{ color: "red" }}>{errors.ssn}</span>}
                </Box>
                <Box w="100%">
                  <FormLabel fontWeight="bold" htmlFor="natural">Naturalness</FormLabel>
                  <Input required
                    placeholder="natural"
                    name="natural"
                    type="text"
                    id="natural" 
                    value={natural}
                    onChange={(event) => setNatural(event.target.value)}
                  />
                  {errors.natural && <span style={{ color: "red" }}>{errors.natural}</span>}
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel fontWeight="bold" htmlFor="cellphone">Cellphone</FormLabel>
                  <Input required
                    placeholder="cellphone"
                    name="cellphone"
                    id="cellphone"
                    type="number" 
                    value={cellphone}
                    onChange={(event) => setCellphone(event.target.value)}
                  />
                  {errors.cellphone && <span style={{ color: "red"}}>{errors.cellphone}</span>}
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel fontWeight="bold" htmlFor="phone">Phone (Optional)</FormLabel>
                  <Input
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
                    id="address" 
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                  />
                  {errors.address && <span style={{ color: "red"}}>{errors.address}</span>}
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel fontWeight="bold" htmlFor="city">City</FormLabel>
                  <Input required
                    placeholder="city"
                    name="city"
                    id="city" 
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                  />
                  {errors.city && <span style={{ color: "red"}}>{errors.city}</span>}
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel required fontWeight="bold">Genre</FormLabel>
                  <RadioGroup defaultValue="M">
                    <HStack spacing="24px">
                      <Radio 
                      value="M"
                      onChange={(event) => setGenre(event.target.value)}>
                        Man
                      </Radio>
                      <Radio 
                      value="F"
                      onChange={(event) => setGenre(event.target.value)}>
                        Woman
                      </Radio>
                      <Radio 
                      value="Other"
                      onChange={(event) => setGenre(event.target.value)}>
                        Other
                      </Radio>
                      <Radio 
                      value="Nothing"
                      onChange={(event) => setGenre(event.target.value)}>
                        I don't want answer
                      </Radio>
                      {errors.genre && <span style={{ color: "red"}}>{errors.genre}</span>}
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