import {
  useTheme,
  Button,
  Col,
  Container,
  Dropdown,
  Grid,
  Row,
} from "@nextui-org/react";
import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";

const Navigation = () => {
  const { theme } = useTheme();

  return (
    <div style={{ backgroundColor: "#000000", padding: "10px 40px", position: 'fixed', top: 0, width: '100%', zIndex: '1' }}>
      <Grid.Container alignItems="center" justify="space-between" wrap="nowrap">
        <Grid xs={8} md={4}>
          <Container alignContent="flex-start" fluid>
            <Row gap={0} justify="flex-start">
              <Col>
                <NavLogo />
              </Col>
            </Row>
          </Container>
        </Grid>
        <Grid>
          <NavLinks />
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default Navigation;
