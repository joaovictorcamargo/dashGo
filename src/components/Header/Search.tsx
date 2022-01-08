import { Box, Button, Flex, Icon, Input, Stack } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function Search() {
    return (
       <Stack
       direction="row"
       mt="8"
       justify="space-between"
       align="center"
       spacing="6"
       >

<Flex
           
           as="label"
           flex="1"
           py="2"
           px="8"
           
           w={450}
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
       </Stack>
    );
}