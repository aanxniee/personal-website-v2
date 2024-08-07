/* eslint-disable react/no-unescaped-entities */
// src/app/projects/page.js
import { Box, Flex, Text, Link, Image, VStack, HStack, Container, Highlight, ListItem, List } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Home() {
  return (
    <Container maxW="container.xl" my={{ base: 10, md: 0 }} p={4}>
      <Flex
        direction="column"
        height="100%"
        align="center"
        justify="center"
        className="home"
      >
        <Box flex="1" p={5} width="100%">
          <VStack spacing={4} align="center" width="100%">
            <HStack spacing={8} justify={{ base: 'center', md: 'flex-end' }} width="100%" pb={{ base: 4, md: 0 }}>
              <Link as={NextLink} href="/images/resume.pdf" passHref><Text as="a">resume</Text></Link>
              <Link as={NextLink} href="/projects" passHref><Text as="a">projects</Text></Link>
            </HStack>
            <HStack spacing={{ base: 2, md: 4 }} wrap="wrap" justify="center">
              <VStack spacing={{ base: 2, md: 4 }}>
                <Image borderRadius="full" src="/images/bay_bridge.jpg" alt="Bay Bridge" boxSize={{ base: '70px', md: '70px' }} objectFit="cover" />
              </VStack>
              <VStack spacing={4} display={{ base: 'none', md: 'flex' }}>
                <Box height={{ base: '20px', md: '30px' }} />
                <Image borderRadius="full" src="/images/coit.jpg" alt="San Francisco" boxSize={{ base: '100px', md: '120px' }} objectFit="cover" />
              </VStack>
              <VStack spacing={4}>
                <Image borderRadius="full" src="/images/annie.jpg" alt="Annie" boxSize={{ base: '150px', md: '200px' }} objectFit="cover" />
              </VStack>
              <VStack spacing={4}>
                <Box height={{ base: '10px', md: '90px' }} />
                <Image borderRadius="full" src="/images/toronto.jpg" alt="Toronto" boxSize={{ base: '70px', md: '120px' }} objectFit="cover" />
              </VStack>
              <VStack spacing={4} display={{ base: 'none', md: 'flex' }}>
                <Box height={{ base: '20px', md: '40px' }} />
                <Image borderRadius="full" src="/images/ocean_beach.jpg" alt="Ocean Beach" boxSize={{ base: '60px', md: '80px' }} objectFit="cover" />
              </VStack>
            </HStack>
            <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold">
              Hey, I'm Annie
            </Text>
            <Text textAlign="center">
              I'm studying
              <Highlight
                query={["Systems Design Engineering", "University of Waterloo"]}
                styles={{ px: '2', py: '0', bg: '#A2C6EA', rounded: 'full', lineHeight: '0.5' }}
              >
                Systems Design Engineering at the University of Waterloo
              </Highlight>
            </Text>
            <VStack pt={5} spacing={0} align="center">
              <Text px={2} lineHeight="1.3">
                <Text as="span" fontWeight="bold" color="#76A2CE">excited for</Text> new homes in tech
              </Text>
              <Text px={2} lineHeight="1.3">
                <Text as="span" fontWeight="bold" color="#76A2CE">inspired by</Text> big cities and skylines, people that love what they do
              </Text>
            </VStack>
            <VStack width={{ base: '90%', md: '650px' }} pt={5} spacing={4} align="start">
              <Text>currently, I'm...</Text>
              <List spacing={3} pl={4} styleType="disc">
                <ListItem lineHeight={{ base: "1.2", md: "0.7" }}>
                  seeking Winter 2025 internships!
                  <Link href="mailto:ajcai@uwaterloo.ca" isExternal textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    <Text as="span" mx={1} fontWeight="bold" borderBottom="2px solid #76A2CE" color="#76A2CE">
                      Get in touch!
                    </Text>
                  </Link>
                </ListItem>
                <ListItem lineHeight={{ base: "1.2", md: "0.7" }}>
                  interning at
                  <Link href="https://www.newfront.com" isExternal textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    <Text as="span" mx={1} fontWeight="bold" borderBottom="2px solid #76A2CE" color="#76A2CE">
                      Newfront
                    </Text>
                  </Link> in San Francisco, architecting backend services and LLM pipelines
                </ListItem>
                <ListItem lineHeight={{ base: "1.2", md: "0.7" }}>
                  leading a team to develop a volunteer platform for the Humane Society with
                  <Link href="https://www.uwblueprint.org" isExternal textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    <Text as="span" mx={1} fontWeight="bold" borderBottom="2px solid #76A2CE" color="#76A2CE">
                      UW Blueprint
                    </Text>
                  </Link>
                </ListItem>
              </List>
              <Text pt={6}>in the past, I...</Text>
              <List spacing={3} pl={4} styleType="disc">
                <ListItem lineHeight={{ base: "1.2", md: "0.7" }}>
                  spent autumn in Downtown Toronto at
                  <Link href="https://www.rbc.com/cyber-security/" isExternal textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    <Text as="span" mx={1} fontWeight="bold" borderBottom="2px solid #76A2CE" color="#76A2CE">
                      Royal Bank of Canada
                    </Text>
                  </Link>
                  , building internal cybersecurity tools
                </ListItem>
                <ListItem lineHeight={{ base: "1.2", md: "0.7" }}>
                  worked with
                  <Link href="https://uwaterloo.ca/women-in-engineering/" isExternal textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    <Text as="span" mx={1} fontWeight="bold" borderBottom="2px solid #76A2CE" color="#76A2CE">
                      UW Women in Engineering
                    </Text>
                  </Link>
                  and <Link href="https://www.techplusuw.com/" isExternal textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    <Text as="span" mx={1} fontWeight="bold" borderBottom="2px solid #76A2CE" color="#76A2CE">
                      UW Tech+
                    </Text>
                  </Link>
                  to make tech more inclusive and diverse
                </ListItem>
              </List>
              <Text pt={6}>in other times, I'm...</Text>
              <List spacing={3} pl={4} styleType="disc">
                <ListItem lineHeight={{ base: "1.2", md: "0.7" }}>exploring everything west coast, enjoying the warmer weather that California has to offer</ListItem>
                <ListItem lineHeight={{ base: "1.2", md: "0.7" }}>watching sunrises and sunsets in silence, taking in how pretty the world really is</ListItem>
                <ListItem lineHeight={{ base: "1.2", md: "0.7" }}>trying to find the best matcha and pastries in the city (any recs for SF?) </ListItem>
              </List>
            </VStack>

            <Flex justifyContent="space-between" alignItems="center" width="100%" pt={8}>
              <HStack spacing={4}>
                <Link href="https://github.com/aanxniee" isExternal>
                  <Image src="/images/github.png" alt="GitHub" boxSize="24px" />
                </Link>
                <Link href="https://www.linkedin.com/in/anniecai2004" isExternal>
                  <Image src="/images/linkedin.png" alt="LinkedIn" boxSize="24px" />
                </Link>
                <Link href="mailto:ajcai@uwaterloo.ca" isExternal>
                  <Image src="/images/mail.png" alt="Mail" boxSize="24px" />
                </Link>
              </HStack>
              <Text>© Annie Cai, 2024</Text>
            </Flex>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
}
