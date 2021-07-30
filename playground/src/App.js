import { ChakraProvider } from "@chakra-ui/react"
import { Checkbox, CheckboxGroup, HStack } from "@chakra-ui/react"
import DrawerBar from './DrawerBar.js'



function App() {

  const dummyUser = [{
    name: "WenBiming",
    id: "1913142",
  },{
    name: "AkumayuRA",
    id: "1913152",

  },{
    name: "James_Yang",
    id: "1912141",

  },{
    name: "ChangChang",
    id: "1924637",

  },{
    name: "Mr.President",
    id: "1813124",
  },{
    name: "LiZeyu",
    id:"9999999"
  }]



  return (
    <ChakraProvider>

<DrawerBar dummyUser={dummyUser}>

</DrawerBar>

    </ChakraProvider>

  );
}

export default App;
