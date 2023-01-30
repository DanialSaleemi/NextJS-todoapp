"use client";

import { useState } from "react";
import {
  Box,
  Text,
  Flex,
  Stack,
  HStack,
  Heading,
  Button,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import { ClientRequest } from "http";

export default function Home() {
  const [todo, setTodo] = useState("");
  const [todolist, setVal] = useState([
    { todotext: "Task1", completed: false },
    { todotext: "Task2", completed: false },
  ]);

  const onClickHandler = (myelement: any) => {
    //  console.log(myelement, "monelement");
    const newtdlist = todolist.map((todo) => {
      if (todo.todotext == myelement.todotext) {
        todo.completed = !todo.completed;
        }
      return todo;
    });
    setVal(newtdlist);
  };
  const addTodo = () => {
    const newTodo = { todotext: todo, completed: false };
    const newtdlist = [...todolist, newTodo];
    setVal(newtdlist);
    setTodo(" ");
  };
  const deleteTodo = (myelement: any) => {
    const newtdlist = todolist.filter((todo) => {
      if (todo.todotext == myelement.todotext) {
        return false;
      }
      return true;
    });
    setVal(newtdlist);
  };
  
  return (
    <>
      <Box
        as="section"
        textAlign="center"
        bgBlendMode="overlay"
        bgGradient="linear(to-r,  #001062, #ef9ff7, #ffdde1 )"
        minH="786px"
        maxW="device-width"
        pt="20px"
      >
        <Heading color="#004e92" mb="5">
          To do List
        </Heading>
        <Text fontWeight="semibold" color="#000428" pb="5">
          You may add, delete, or update a task{" "}
        </Text>
        <Stack align="center">
          <HStack align="center" alignSelf="center" pb="20px">
            <Input
              placeContent="Add task"
              maxW="300px"
              maxH="auto"
              value={todo}
              onChange={(e) => {
                setTodo(e.target.value);
              }}
            />
            <Button colorScheme="teal" onClick={addTodo}>Add</Button>
          </HStack>
          <ul>
            {todolist.map((elm) => {
              return (
                <li
                  style={{
                    listStyle : "none",                                        
                    fontSize: "20px",
                    fontWeight: "500",
                    color: elm.completed ? "ThreeDFace" : "red",
                    fontStyle: "oblique",
                  }}
                  key={elm.todotext}
                >
                  <HStack spacing = "10px" pb="10px" pt="10px">
                    <Checkbox
                      checked={elm.completed}
                      onChange={() => {
                        onClickHandler(elm);
                      }}
                    />
                    <Text              
                      minW="150px"
                      maxW="150px"
                      fontSize="22px"
                      fontWeight="300px"
                    >
                      {elm.todotext}
                    </Text>
                    <Button                
                      px="10px"
                      colorScheme="red"
                      onClick={() => {
                        deleteTodo(elm);
                      }}
                    >
                      Delete
                    </Button>
                    </HStack>
                </li>
              );
            })}
          </ul>
          </Stack>
      </Box>
    </>
  );
}
