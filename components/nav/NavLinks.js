import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const NavLinks = () => {
  return (
    <Flex justify="flex-end" align="center">
      <Menu>
        <MenuButton
          as={Button}
          bg="black"
          color="white"
          rightIcon={<ChevronDownIcon />}
        >
          Tickets
        </MenuButton>
        <MenuList>
          <MenuItem>Single Games</MenuItem>
          <MenuItem>Season Tickets</MenuItem>
          <MenuItem>Pre-season Tickets</MenuItem>
          <MenuItem>Group Tickets</MenuItem>
          <MenuItem>Theme Nights</MenuItem>
        </MenuList>
      </Menu>
      <Button bg="black" color="white" href="#">
        Schedule
      </Button>
      <Button bg="black" color="white" href="#">
        NHL Standings
      </Button>
      <Menu>
        <MenuButton
          as={Button}
          bg="black"
          color="white"
          rightIcon={<ChevronDownIcon />}
        >
          Fans
        </MenuButton>
        <MenuList>
          <MenuItem>Single Games</MenuItem>
          <MenuItem>Season Tickets</MenuItem>
          <MenuItem>Pre-season Tickets</MenuItem>
          <MenuItem>Group Tickets</MenuItem>
          <MenuItem>Theme Nights</MenuItem>
        </MenuList>
      </Menu>
      <Button bg="black" color="white" href="#">
        Shop
      </Button>
    </Flex>
  );
};

export default NavLinks;
