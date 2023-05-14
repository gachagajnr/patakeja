import { Facebook, Instagram, Twitter } from "react-bootstrap-icons";
import Stack from "react-bootstrap/Stack";
import { social } from "../constants/social";

function SocialLinks() {
  let size = "30";
  return (
    <Stack direction="horizontal" gap={2}>
      <a href={social.FACEBOOK} class="link-primary">
        <Facebook size={size} />
      </a>
      <a href="https" class="link-primary">
        <Instagram size={size} />
      </a>

      <a href="https" class="link-primary">
        <Twitter size={size} />
      </a>
    </Stack>
  );
}
export default SocialLinks;
