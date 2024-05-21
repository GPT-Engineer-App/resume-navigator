import React, { useState } from "react";
import { Container, VStack, HStack, Input, Button, Text, Select, Box, IconButton, Heading, Divider } from "@chakra-ui/react";
import { FaFilter, FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [candidates, setCandidates] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState("");
  const [filter, setFilter] = useState("");

  const addCandidate = () => {
    setCandidates([...candidates, { name, email, skills: skills.split(",").map((skill) => skill.trim()) }]);
    setName("");
    setEmail("");
    setSkills("");
  };

  const deleteCandidate = (index) => {
    setCandidates(candidates.filter((_, i) => i !== index));
  };

  const filteredCandidates = candidates.filter((candidate) => candidate.skills.some((skill) => skill.toLowerCase().includes(filter.toLowerCase())));

  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8}>
        <Heading>Resume Builder</Heading>
        <VStack spacing={4} w="100%">
          <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="Skills (comma separated)" value={skills} onChange={(e) => setSkills(e.target.value)} />
          <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={addCandidate}>
            Add Candidate
          </Button>
        </VStack>
        <Divider />
        <Heading>Recruiter Dashboard</Heading>
        <HStack w="100%" spacing={4}>
          <Input placeholder="Filter by skill" value={filter} onChange={(e) => setFilter(e.target.value)} />
          <IconButton aria-label="Filter" icon={<FaFilter />} />
        </HStack>
        <VStack spacing={4} w="100%">
          {filteredCandidates.map((candidate, index) => (
            <Box key={index} p={4} borderWidth={1} borderRadius="md" w="100%">
              <HStack justifyContent="space-between">
                <VStack align="start">
                  <Text fontSize="lg" fontWeight="bold">
                    {candidate.name}
                  </Text>
                  <Text>{candidate.email}</Text>
                  <Text>Skills: {candidate.skills.join(", ")}</Text>
                </VStack>
                <IconButton aria-label="Delete" icon={<FaTrash />} colorScheme="red" onClick={() => deleteCandidate(index)} />
              </HStack>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
