import React, { useState } from "react";
import {
  Box,
  Text,
  HStack,
  Heading,
  Button,
  Input,
  Checkbox,
} from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      as="section"
      textAlign="center"
      bg="blue.300"
      maxH="auto"
      maxW="auto"
      pt="20px"
    >
      <Heading color="teal" mb="5">
        To do List
      </Heading>
      <Text fontWeight="semibold" color="purple" pb="5">
        You may add, delete, or update a task{" "}
      </Text>
      <HStack maxW="300px">
        <Input bg="ghostwhite" maxW="auto" value="add task"></Input>
        <Button>Add</Button>
      </HStack>
      <Checkbox maxW="auto"></Checkbox>
    </Box>
  );
}
