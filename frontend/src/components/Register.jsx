import { Room } from "@material-ui/icons";
import { useState } from "react";
import "./register.css";
import {
  Box,
  Flex,
  Stack,
  Button,
  Input,
  Text,
  HStack,
} from "@chakra-ui/react";

export default function Register() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  return (
    <Flex minHeight="100vh" width="full" align="center" justifyContent="center">
      <Box
        rounded={"lg"}
        boxShadow={"lg"}
        p={8}
        bg="white"
        borderRadius={15}
        width="full"
        maxWidth="400px"
      >
        <HStack justifyContent="center" mb={5}>
          <Room />
          <Text fontWeight="700">Pin Map</Text>
        </HStack>

        <Stack spacing={5}>
          <Input
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
            fontWeight="600"
            placeholder="Email"
            bg={"gray.100"}
            border={0}
            color={"gray.500"}
            _placeholder={{
              color: "gray.500",
            }}
          />
          <Input
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
          Register
        </Button>
        {success && (
          <span className="success">Successfull. You can login now!</span>
        )}
        {error && <span className="failure">Something went wrong!</span>}
      </Box>
    </Flex>
  );
}
