import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack
} from '@chakra-ui/react'

import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';


function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleLinkClick = () => {
        onClose(); // Close the drawer when a link is clicked
    };

    return (
        <>
            <Button
                zIndex={'overlay'}
                pos={'fixed'}
                top={'4'}
                left={'4'}
                colorScheme='purple'
                p={'0'}
                w={'10'}
                h={'10'}
                borderRadius={"full"}
                onClick={onOpen}
            >
                <BiMenuAltLeft size={"20"} />
            </Button>
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Video Hub</DrawerHeader>
                    <DrawerBody>
                        <VStack alignItems={'flex-start'}>
                            <Link to={'/'} onClick={handleLinkClick}>
                                <Button variant={'ghost'} colorScheme={'purple'}>
                                    Home
                                </Button>
                            </Link>
                            <Link to={'/videos'} onClick={handleLinkClick}>
                                <Button variant={'ghost'} colorScheme={'purple'}>
                                    Videos
                                </Button>
                            </Link>
                            <Link to={'/freevid'} onClick={handleLinkClick}>
                                <Button variant={'ghost'} colorScheme={'purple'}>
                                    Free Videos
                                </Button>
                            </Link>
                            <Link to={'/uvideo'} onClick={handleLinkClick}>
                                <Button variant={'ghost'} colorScheme={'purple'}>
                                    Upload Video
                                </Button>
                            </Link>
                        </VStack>
                        <HStack pos={'absolute'} bottom={'10'} justifyContent={'space-evenly'} w={'full'}>
                            <Link to={'/login'} onClick={handleLinkClick}>
                                <Button colorScheme={'purple'}>
                                    LogIn
                                </Button>
                            </Link>
                            <Link to={'/signup'} onClick={handleLinkClick}>
                                <Button colorScheme={'purple'} variant={'outline'}>
                                    SignUp
                                </Button>
                            </Link>
                        </HStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default Header;
