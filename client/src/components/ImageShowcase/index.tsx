import Image from "../Image";
import { Container } from "./styles";

export default function ImageShowcase() {
  return (
    <Container>
      <Image
        src="https://res.cloudinary.com/dynwptmib/image/upload/v1753268243/83ec5cdf5ba126d60fea1ebbe1495f195e17d563_wr4krg.jpg"
        type={1}
      />
      <Image
        src="https://res.cloudinary.com/dynwptmib/image/upload/v1753268251/5c19e93ca4e2233dfae308e52c65dda40bc24cd2_if8n5i.jpg"
        type={2}
      />
      <Image
        src="https://res.cloudinary.com/dynwptmib/image/upload/v1753268243/0599019d64fa78a9bef7255f8a7525a75180c81e_my1wl2.jpg"
        type={3}
      />
    </Container>
  );
}
