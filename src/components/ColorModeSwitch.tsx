import { Box, Flex, HStack, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ColorModeSlider = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Flex
        align="center"
        borderRadius="full"
        p={1}
        bg={colorMode === "light" ? "gray.100" : "gray.700"}
        position="relative"
        cursor="pointer"
        onClick={toggleColorMode}
        aria-label="Toggle color mode"
        w="70px"
        transition="all 0.3s ease"
        _hover={{ transform: "scale(1.05)" }}
      >
        <Box
          position="absolute"
          left={colorMode === "light" ? "2px" : "calc(100% - 28px)"}
          transition="all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)"
          w="24px"
          h="24px"
          borderRadius="full"
          bg={colorMode === "light" ? "white" : "gray.800"}
          boxShadow="md"
          borderWidth="1px"
          borderColor={colorMode === "light" ? "gray.200" : "gray.600"}
        />
        <Flex justify="space-between" w="full" px={1.5}>
          <SunIcon
            boxSize={4}
            color={colorMode === "light" ? "yellow.400" : "gray.400"}
          />
          <MoonIcon
            boxSize={4}
            color={colorMode === "dark" ? "blue.200" : "gray.400"}
          />
        </Flex>
      </Flex>
    </HStack>
  );
};

export default ColorModeSlider;
