import { Flex, Icon, Input, Text, Image} from '@chakra-ui/react';
import {RiSearchLine} from 'react-icons/ri';
import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {AiOutlineMenu} from 'react-icons/ai'

export function Header() {
    return (
        <>
      <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      align="center"
      px="6"
      >
      
           <Icon as={AiOutlineMenu}  fontSize="24"/>
           <Image
            boxSize='150px'
            ml="3"
            src='https://www.webcontinental.com.br/file/general/webcontinental-logo.svg'
            alt='Dan Abramov'
            />
          
          
           <Flex
           align="center"
           ml="auto"
           >
               <Icon as={AiOutlineUser}  fontSize="24"/>
               <Icon as={AiOutlineShoppingCart}  fontSize="24" ml="3"/>

           </Flex>
      </Flex>
      <Flex
           
           as="label"
           flex="1"
           py="4"
           px="8"
           ml="6"
           maxWidth={450}
           alignSelf="center"
           color="gray.200"
           position="relative"
           bg="gray.800"
           borderRadius="full"
           >
             <Input
             color="gray.50"
             variant="unstyled"
             
             mr="4"
             placeholder='Iphone 12 Capa'
             _placeholder={{ color: 'gray.400'}}
             />
             
            <Icon as={RiSearchLine} fontSize="20"/>
           </Flex>

      </>
    );
}