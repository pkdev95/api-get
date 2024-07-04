import express from "express";
import cors from "cors";

const app = express()


app.use(cors());

app.listen(3000, (req, res) => {
  const msg = "servidor rodando";
  console.log(msg);
});

const products = [
  {
    id: 1,
    name: "smarthphone",
    brand: "reactShopping",
    description:
      "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
    photo:
      "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/11/22/125515500-i825995.png",
    price: "2000.00",
  },

  {
    id: 2,
    name: "fone de ouvido",
    brand: "reachShopping",
    description:
      "Ouça suas músicas com a tecnologia double beat",
    photo:
      "https://www.philips.com.br/c-dam/b2c/category-pages/sound-and-vision/headphones/master/homepage/hero-product-taph805.png",
    price: "5000.00",
  },
  {
    id: 3,
    name: "Notebook",
    brand: "reactShopping",
    description:
      "processador ultra veloz de última geração",
    photo:
      "https://images.kabum.com.br/produtos/fotos/520072/notebook-galaxy-book2-intel-core-i5-1235u-windows-11-home-8gb-256gb-ssd-intel-iris-xe-15-6-full-hd-led-np550xed-kf2br_1706818190_gg.jpg",
    price: "5000.00",
  },
  {
    id: 4,
    name: "Smarthphone",
    brand: "reactShopping",
    description:
      "Registre todos os momentos com essa potente câmers",
    photo:
      "https://statics-americanas.b2w.io/spacey/acom/2021/03/30/s21.webp",
    price: "5000.00",
  },
  {
    id: 5,
    name: "Smart watch",
    brand: "reactShopping",
    description:
      "Integre as suas notificações importantes a esse incrível dispositivo",
    photo:
      "https://i5.walmartimages.com/asr/dda6bc1f-d282-4cf9-ad29-e827222bc4d5.8d402328f4d54e2b9a252879ec51fb79.jpeg",
    price: "5000.00",
  },
  {
    id: 6,
    name: "Tablet",
    brand: "reactShopping",
    description:
      "Curta filmes, séries e muito mais!",
    photo:
      "https://http2.mlstatic.com/D_NQ_NP_842873-MLA73760714589_012024-O.webp",
    price: "5000.00",
  },
  {
    id: 7,
    name: "Tv",
    brand: "reactShopping",
    description:
      "tv 42 polegadas para lazer em tamanho familia",
    photo:
      "https://media.istockphoto.com/id/1395191574/pt/foto/black-led-tv-television-screen-blank-isolated.jpg?s=612x612&w=0&k=20&c=OGTWqib8oMtQzWL5O6XDd7ei2UXOppjdWcAz7mC_LUU=",
    price: "5000.00",
  },
  {
    id: 8,
    name: "Headset",
    brand: "reactShopping",
    description:
      "ideal para quem procura leveza e conforto",
    photo:
      "https://cdn.awsli.com.br/600x1000/2602/2602619/produto/248366625/headset-sem-fio-pulse-3d-adaptador-sem-fio-usb-ps4-e-ps5-midnight-black-cfi-zwh1-pzft9a9tr5.jpg",
    price: "5000.00",
  },
];

app.get("/", (req, res) => {
  res.send(products);
});
