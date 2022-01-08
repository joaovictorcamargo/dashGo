import { Flex, Icon, Input, Text, Image, Heading, Box, Divider, Button, HStack, ButtonGroup, IconButton} from '@chakra-ui/react';
import {RiArrowUpDownLine, RiEqualizerLine, RiSearchLine} from 'react-icons/ri';
import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {AiOutlineMenu} from 'react-icons/ai'

import { Search } from './Header/Search';


export function Header() {
    return (
        <>
      <Flex
      w="100%"
      
      maxWidth={1480}
      mx="auto"
      >
          <Box
           flex="1"
              
           bg="
           rgba(248, 242, 243, 1)"
           p="3"
          >
              <Flex
              justify="space-between"
              align="center"
              >
                  <Box>
            <Icon as={AiOutlineMenu}  fontSize="24"/>
           <Icon as={AiOutlineMenu} fontSize="24"/>
            </Box>

           <Flex
           
           >
               <Icon as={AiOutlineUser}  fontSize="24"/>
               <Icon as={AiOutlineShoppingCart}  fontSize="24" ml="3"/>

           </Flex>
           </Flex>

           <Search/>
           

             
          </Box>
      
          
          
          
          
      </Flex>

      

           <Heading 
            mt="5" 
            mb="5" 
            ml="5"   
            color="gray.400"  
            size="md"
            fontWeight="normal">Resultado da Busca</Heading>

           <Divider 
           ml="5"
           />

                  <Flex
                  
                  justify="space-between"
                  align="center"
                  ml="6"
                  mr="4"
                  mt="5"
                  >
                      <Heading
                      size="sm"
                      fontWeight="normal">452 Resultados</Heading>

                      <Box>
                      <HStack
                      spacing="4"
                      >
                          
                      <Button
                      as="a"
                      h="8"
                      w="38"
                      size="sm"
                      fontSize="sm"
                      variant='outline'
                      colorScheme="gray.400"
                      leftIcon={<Icon as={RiEqualizerLine} fontSize="21"/>}
                      
                      transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                      _hover={{ bg: '#ebedf0' }}
                      _active={{
                        bg: '#dddfe2',
                        transform: 'scale(0.98)',
                        borderColor: '#bec3c9',
                      }}
                      _focus={{
                        boxShadow:
                          '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                      }}
                      >
                        Filtrar
                      </Button>

                      <Button
                      as="a"
                      ml="3"
                      h="8"
                      w="38"
                      size="sm"
                      fontSize="sm"
                      variant='outline'
                      colorScheme="#666666"
                      leftIcon={<Icon as={RiArrowUpDownLine} fontSize="21"/>}
                      _hover={{ bg: '#ebedf0' }}
                      _active={{
                        bg: '#dddfe2',
                        transform: 'scale(0.98)',
                        borderColor: '#bec3c9',
                      }}
                      _focus={{
                        boxShadow:
                          '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                      }}
                      >
                        Ordenar por
                      </Button>
                      </HStack>

                      </Box>

                  </Flex>
  

      </>
    );
}