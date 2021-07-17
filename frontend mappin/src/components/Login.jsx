import { Room } from "@material-ui/icons";
import { useRef, useState } from "react";
import axios from "axios";
import "./register.css";
import {
  Box,
  Stack,
  Button,
  Input,
  Text,
  HStack,
  FormControl,
  CloseButton,
} from "@chakra-ui/react";

export default function Login({ setShowLogin, myStorage, setCurrentUser }) {
  const [error, setError] = useState(false);
  const nameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: nameRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const res = await axios.post("/users/login", user);
      myStorage.setItem("user", res.data.username);
      setCurrentUser(res.data.username);
      setShowLogin(false);
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div>
      <form style={{ width: 400 }} onSubmit={handleSubmit}>
        <Box
          rounded={"lg"}
          boxShadow={"lg"}
          p={8}
          bg="white"
          borderRadius={15}
          width="full"
          maxWidth="400px"
        >
          <HStack mx="330px">
            <CloseButton onClick={() => setShowLogin(false)} />
          </HStack>

          <HStack justifyContent="center" mb={5}>
            <Room />
            <Text fontWeight="700">Pin Map</Text>
          </HStack>
          <FormControl>
            <Stack spacing={5}>
              <Input
                type="text"
                ref={nameRef}
                fontWeight="600"
                placeholder="Username"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Input
                type="password"
                ref={passwordRef}
                fontWeight="600"
                placeholder="Password"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
            </Stack>
            <Button
              type="submit"
              fontFamily={"heading"}
              mt={8}
              bgGradient="linear(to-r, red.400,pink.400)"
              color={"white"}
              _hover={{
                bgGradient: "linear(to-r, red.400,pink.400)",
                boxShadow: "xl",
              }}
              w={"full"}
            >
              Login
            </Button>

            {error && <span className="failure">Something went wrong!</span>}
          </FormControl>
        </Box>
      </form>
    </div>
  );
}
