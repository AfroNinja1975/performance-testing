import {
  Card,
  Col,
  Container,
  Row,
  Button,
  Text,
  Spacer,
} from "@nextui-org/react";

export const NewsCard = () => (
  <Container fluid>
    <Row direction="column" align="space-between">
      <Col>
        <Text size={24} weight="bold">
          Top News
        </Text>
        <Spacer y={1} />
        <Card isPressable css={{ h: "100%" }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text
                size={12}
                weight="bold"
                transform="uppercase"
                color="#ffffffAA"
              >
                Breaking Story
              </Text>
              <Text h4 color="white">
                Dustin Brown to retire
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src="https://cdn.vox-cdn.com/thumbor/7Dakrrzay6RgNFh1EsH5j370tqY=/0x0:4000x2667/1200x800/filters:focal(1680x1014:2320x1654)/cdn.vox-cdn.com/uploads/chorus_image/image/65483999/1180921065.jpg.0.jpg"
              width="100%"
              height="100%"
              objectFit="cover"
              alt="Card image background"
            />
          </Card.Body>
          <Card.Footer>
            <Row direction="column">
              <Col>
                <Text size={18} weight="bold">
                  Kings to Retire Dustin Brown&lsquo;s No. 23 and Unveil Statue
                </Text>
                <Text size={12} color="#BBB">
                  Ceremony to Honor Two-Time Stanley Cup Captain and Franchise
                  Icon Set for Feb. 11 at Crypto.com Arena
                </Text>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default NewsCard;
