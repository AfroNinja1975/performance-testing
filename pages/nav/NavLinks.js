import { Button, Col, Container, Dropdown, Grid, Row } from "@nextui-org/react";

const NavLinks = () => {
  return (
    <Container fluid nowrap>
      <Row gap={0} justify="flex-end" align="center">
        <Col>
          <Dropdown>
            <Dropdown.Button>Tickets</Dropdown.Button>
            <Dropdown.Menu aria-label="Tickets">
              <Dropdown.Item key="single">Single Games</Dropdown.Item>
              <Dropdown.Item key="season">Season Tickets</Dropdown.Item>
              <Dropdown.Item key="preseason">Pre-season Tickets</Dropdown.Item>
              <Dropdown.Item key="group">Group Tickets</Dropdown.Item>
              <Dropdown.Item key="theme">Theme Nights</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col>
          <Button href="#">Schedule</Button>
        </Col>
        <Col>
          <Button href="#">NHL Standings</Button>
        </Col>
        <Col>
          <Dropdown>
            <Dropdown.Button>Fans</Dropdown.Button>
            <Dropdown.Menu aria-label="Fans">
              <Dropdown.Item key="letsGoKings">LetsGoKings.com</Dropdown.Item>
              <Dropdown.Item key="boosterClub">Booster Club</Dropdown.Item>
              <Dropdown.Item key="wallpapers">Wallpapers</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col>
          <Button href="#">Shop</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default NavLinks;