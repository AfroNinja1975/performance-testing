import { Box } from "@mui/material";

export const Image = ({ alt, src, width, height }) => (
  <Box
    component="img"
    alt={alt}
    src={src}
    width="100%"
  />
);

export default Image;
