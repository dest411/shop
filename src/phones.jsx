import huaweinovay61 from './png/phones/huawei_nova_y61.png';
import iphone12 from './png/phones/iphone_12_64gb.png';
import iphone14 from './png/phones/iphone_14_128gb.png';
import iphone14pro from './png/phones/iphone_14_pro_128gb.png';
import xiaomiredmi128gb from './png/phones/xiaomi_redmi_128gb.png';

const phones = [
  {
    id: 1,
    title: "Смартфон Apple iPhone Pro 14 128GB",
    price: "84 999 ₴",
    oldPrice: "88 000 ₴",
    discount: "-4%",
    image: iphone14pro,
    inStock: true,
    brand: "Apple",
    ram: "6GB",
    memory: "128GB",
    cores: 6
  },
  {
    id: 2,
    title: "Смартфон Apple iPhone 12 64GB",
    price: "42 980 ₴",
    oldPrice: "47 750 ₴",
    discount: "-10%",
    image: iphone12,
    inStock: true,
    brand: "Apple",
    ram: "4GB",
    memory: "64GB",
    cores: 6
  },
  {
    id: 3,
    title: "Смартфон HUAWEI nova Y61",
    price: "11 999 ₴",
    oldPrice: "14 111 ₴",
    discount: "-15%",
    image: huaweinovay61,
    inStock: true,
    brand: "Huawei",
    ram: "3GB",
    memory: "64GB",
    cores: 4
  },
  {
    id: 4,
    title: "Смартфон Xiaomi Redmi 128GB",
    price: "17 665 ₴",
    oldPrice: "87 999 ₴",
    discount: "-4%",
    image: xiaomiredmi128gb,
    inStock: true,
    brand: "Xiaomi",
    ram: "6GB",
    memory: "128GB",
    cores: 8
  },
  {
    id: 5,
    title: "Смартфон Apple iPhone 14 128GB",
    price: "75 999 ₴",
    oldPrice: "79 999 ₴",
    discount: "-4%",
    image: iphone14,
    inStock: false,
    brand: "Apple",
    ram: "6GB",
    memory: "128GB",
    cores: 6
  },
];

export default phones