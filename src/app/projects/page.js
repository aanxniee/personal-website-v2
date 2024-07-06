// src/app/projects/page.js
import { Box, Flex, Text, Link, VStack, HStack, Container } from '@chakra-ui/react';
import NextLink from 'next/link';
import Card from "../../components/projectcard";
import data from "../../projectdata";

export default function Projects() {
    return (
        <Container maxW="container.xl" p={8}>
            <VStack spacing={8} align="start">
                <HStack className="projects-back" spacing={4}>
                    <Link as={NextLink} href="/" className="link">
                        <Text as="i">back to home</Text>
                    </Link>
                </HStack>
                <Box className="projects-header">
                    <Text fontSize="lg">some cool stuff i've done</Text>
                </Box>
                <Flex className="projects-list" wrap="wrap" justify="space-around">
                    {data.projects.map((project, index) => (
                        <Card
                            key={index}
                            heading={project.title}
                            techs={project.techs}
                            paragraph={project.para}
                            imgUrl={project.imageSrc}
                            projectLink={project.url}
                        />
                    ))}
                </Flex>
            </VStack>
        </Container>
    );
}
