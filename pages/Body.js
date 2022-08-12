import { Card, Container, Col, Grid, Row, Button, Text, Spacer, Image } from "@nextui-org/react";
import NewsCard from "./NewsCard";
import ShopCard from "./ShopCard";
import Other from "./Other";

export const Body = () => (
  <Grid.Container
    gap={0}
    alignItems="flex-start"
    justify="center"
    wrap="wrap"
    style={{
      paddingTop: "75px",
    }}
  >
    <Grid xs={12}>
      <Container fluid>
        <Row direction="column" align="center">
          <Col>
            <Image
              height={121}
              width={967}
              src="https://tpc.googlesyndication.com/simgad/13682594288002787745"
              alt="Banner"
            />
            <Spacer y={1} />
          </Col>
        </Row>
      </Container>
    </Grid>
    <Grid xs={12} md={6}>
      <NewsCard />
    </Grid>
    <Grid xs={12} md={6}>
      <ShopCard />
    </Grid>
    <Grid xs={12}>
      <Container fluid>
        <Row direction="column" align="center">
          <Col>
            <Spacer y={2} />
            <Image
              height={121}
              width={967}
              src="https://tpc.googlesyndication.com/simgad/8572446148985133851"
              alt="Banner"
            />
          </Col>
        </Row>
      </Container>
    </Grid>
    <Grid xs={12}>
      <Container fluid>
        <Row direction="column" align="center">
          <Col>
            <Spacer y={2} />
            <Other />
          </Col>
        </Row>
      </Container>
    </Grid>
  </Grid.Container>
);

export default Body;
