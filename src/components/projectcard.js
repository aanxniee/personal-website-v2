// src/components/projectcard.js
import { Box, Image, Heading, Text, VStack, Link, HStack } from '@chakra-ui/react';

export default function ProjectCard({ heading, techs, date, paragraph, imgUrl, projectLink }) {
    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} width="400px">
            <Image
                src={imgUrl}
                alt={heading}
                width="400px"
                height="230px"
                objectFit="cover"
            />
            <VStack align="start" mt={4}>
                <HStack>
                    <Text fontSize="xl">{heading}</Text>
                    <Link href={projectLink} isExternal>
                        <Image src="/images/github.png" alt="GitHub" boxSize="24px" />
                    </Link>
                </HStack>
                <Text fontSize="sm" color="gray.500">{techs}</Text>
                <Text fontSize="sm" color="gray.500">{date}</Text>
                <Text >{paragraph}</Text>
            </VStack>
        </Box>
    );
}
