import { Box, Button, Checkbox, Flex, Heading, Icon, Image, Stack, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import {RiArrowUpDownLine} from 'react-icons/ri';

import { AiOutlineMenu, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { Search } from "../../components/Header/Search";

export default function UserList() {
    return (
     
         

          <Flex
          w="100%"
          
          maxWidth={1480}
          mx="auto"
          
          >
              

              <Box
              flex="1"
              
              bg="gray.500"
              p="3"
              >
                  <Flex
                  
                  justify="space-between"
                  align="center"
                  >
                    
                   <Icon as={AiOutlineMenu}  fontSize="24"/>
           <Image
            boxSize='150px'
            mr="40"
            src='https://www.webcontinental.com.br/file/general/webcontinental-logo.svg'
            alt='Dan Abramov'
            />
            

                      <Box>

                      <Icon as={AiOutlineUser}  fontSize="24"/>
               <Icon as={AiOutlineShoppingCart}  fontSize="24" ml="3"/>
                      </Box>

                  </Flex>

                

                  <Search/>

              </Box>
          </Flex>
   
    );
}