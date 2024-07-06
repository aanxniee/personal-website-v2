// src/components/projectcard.js
import { Box, Image, Heading, Text, VStack, Link, HStack } from '@chakra-ui/react';

export default function ProjectCard({ heading, techs, date, paragraph, imgUrl, projectLink }) {
    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} width="100%" maxW="900px" height={{ base: "auto", md: "250px" }}>
            <HStack spacing={8} align="start" height="100%" flexWrap="wrap">
                <Image
                    src={imgUrl}
                    alt={heading}
                    width={{ base: "100%", md: "300px" }}
                    height={{ base: "auto", md: "100%" }}
                    objectFit="cover"
                    borderRadius="lg"
                />
                <VStack align="start" spacing={5} flex="1" height="100%" justify="center">
                    <HStack>
                        <Text fontSize="xl" fontWeight="bold">{heading}</Text>
                        <Link href={projectLink} isExternal>
                            <Image src="/images/github.png" alt="GitHub" boxSize="24px" />
                        </Link>
                    </HStack>
                    <Text fontSize="sm" fontStyle="italic" color="gray.500">{techs}</Text>
                    <Text fontSize="sm">{paragraph}</Text>
                </VStack>
            </HStack>
        </Box>
    );
}
