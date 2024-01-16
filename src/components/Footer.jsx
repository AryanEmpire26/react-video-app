import {Input, Box, HStack, Heading, Stack, VStack, Button,Text } from '@chakra-ui/react'
import {AiOutlineSend} from 'react-icons/ai'
import React from 'react'

function Footer() {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p={'16'} color={'white'}>
    <Stack direction={['column','row']}>
        <VStack alignItems={'strech'} w={'full'} px={4} >
            <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>
                Subscribe for updates
            </Heading>
            <HStack py={2} borderBottom={'2px solid white'}>
                <Input
                placeholder='Enter your email'
                border={'none'}
                outline={'none'}
                borderRadius={'none'}
                focusBorderColor='none'
                />
                <Button p={'0'} colorScheme='purple' borderRadius={'0 20px 20px 0'} variant={'ghost'}>
                    <AiOutlineSend size={'20'} />
                </Button>
                
            </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'} py={['2','0']} >
            VIDEO HUB
          </Heading>
          <Text>All rights received</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'} py={['2','0']}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://youtube.com">
              Youtube
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://instagram.com">
              Instagram
            </a>
          </Button>

          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://github.com">
              Github
            </a>
          </Button>
        </VStack>
    </Stack>
    </Box>
  )
}

export default Footer