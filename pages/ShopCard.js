import { Card, Col, Container, Row, Button, Text, Spacer } from "@nextui-org/react";

export const ShopCard = () => (
  <Container fluid>
    <Row direction="column" align="flex-start">
      <Col>
        <Text size={24} weight="bold">
          Featured Product
        </Text>
        <Spacer y={1} />
        <Card>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text
                size={12}
                weight="bold"
                transform="uppercase"
                color="#FFCC33"
              >
                New
              </Text>
              <Text h3 color="black">
                LA Kings Snapback &quot;On the Ice&quot; Cap
              </Text>
            </Col>
          </Card.Header>
          <Card.Body
            css={{ p: 0 }}
            style={{
              marginBottom: "6px",
            }}
          >
            <Card.Image
              src="https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4464000/ff_4464752-163e2be83c6e9b688e2e_full.jpg"
              width="100%"
              height="100%"
              objectFit="cover"
              alt="Card example background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#ffffff66",
              borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row align="center">
              <Col>
                <Text color="#000" size={36}>
                  $26.99
                </Text>
                <Text color="#000" size={12}>
                  One Size Fits All
                </Text>
              </Col>
              <Col>
                <Row justify="flex-end">
                  <Button flat auto rounded>
                    <Text
                      css={{ color: "inherit" }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      Add to Cart
                    </Text>
                  </Button>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default ShopCard;
