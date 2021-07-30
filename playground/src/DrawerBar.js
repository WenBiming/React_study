import React, {useState} from "react";

import {
  Checkbox,
  CheckboxGroup,
  HStack,
  VStack,
  Drawer,
  Button,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  SimpleGrid,
  Stack,
  Box,
  FormLabel,
} from "@chakra-ui/react";

function DrawerBar(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();


const [teamName, setTeamName] = useState("");


const teamNameChangeHandler = (event) => {
    setTeamName(event.target.vlaue);
   
    
};


let selectedUsers = [];

const submitHandler = (event) => {
    event.preventDefault();
    console.log(teamName);
    //console.log(selectedUsers);



    
selectedUsers = [];
onClose();

}

const selectedUserHandler = (event) => {
    if (event.target.checked) {
      selectedUsers.push(event.target.value)
    } else {
      const index = selectedUsers.indexOf(event.target.value );
      selectedUsers.splice(index, 1); 
    }
}

const cancelHandler = () => {
  selectedUsers = [];
  onClose();
}

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>


          <form onSubmit={submitHandler} >
          <DrawerCloseButton />
          <DrawerHeader>Create your Team</DrawerHeader>
          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="teamname">Team name</FormLabel>
                <Input
                  id="teamname"
                  placeholder="Please enter your team name"
                  value={teamName}
                  onChange={teamNameChangeHandler}
                ></Input>
              </Box>

              <Box>
                <FormLabel htmlFor="chooseMember">
                  Choose your members
                </FormLabel>

                <SimpleGrid column={2} spacing={2}>
                  {props.dummyUser.map((person) => (
                    <Checkbox value={person.name} onChange={selectedUserHandler}>{person.name}</Checkbox>
                  ))}
                </SimpleGrid>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={cancelHandler}>
              Cancel
            </Button>
            <Button colorScheme="blue" type="submit">Save</Button>
          </DrawerFooter>


          </form>

        </DrawerContent>
      </Drawer>



      
    </>
  );
}
export default DrawerBar;
