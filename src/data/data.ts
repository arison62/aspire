import progressIcon from "../assets/Icon-0.png";
import financeIcon from "../assets/Icon-1.png";
import reloadIcon from "../assets/Icon-2.png";
import lastIcon from "../assets/Icon-3.png";

import img2 from "../assets/Image 2.png";
import img3 from "../assets/Image 3.png";
import img4 from "../assets/Image 4.png";
import img5 from "../assets/Image 5.png";
import img6 from "../assets/Image 6.png";
import img7 from "../assets/Image 7.png";
import img8 from "../assets/Image 8.png";
import img9 from "../assets/Image 9.png";

type AboutType = {
  title: string;
  icon: string;
  desc: string;
};

type TeamCardType = {
  img: string;
  title: string;
  desc: string;
};

export const teamCards: TeamCardType[] = [
  {
    img: img2,
    title: "John Doe",
    desc: "CEO & founder",
  },
  {
    img: img3,
    title: "Nathalie Doe",
    desc: "RH & co-founder",
  },
  {
    img: img4,
    title: "Celine Dan",
    desc: "Marketing",
  },
  {
    img: img5,
    title: "Ethan Roy",
    desc: "Finance director",
  },
  {
    img: img6,
    title: "Suzzie Ruth",
    desc: "Senior designer",
  },
  {
    img: img7,
    title: "Mark Torodo",
    desc: "Frontend developer",
  },
  {
    img: img8,
    title: "Jane Xium",
    desc: "Backend developer",
  },
  {
    img: img9,
    title: "Rosanna Ugicci",
    desc: "DevOps engineer",
  },
];

export const about: AboutType[] = [
  {
    title: "50M+",
    icon: progressIcon,
    desc: "Wel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
  },
  {
    title: "$100M",
    icon: financeIcon,
    desc: "Wel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
  },
  {
    title: "30%",
    icon: reloadIcon,
    desc: "Wel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
  },
  {
    title: "60+",
    icon: lastIcon,
    desc: "Wel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
  },
];
