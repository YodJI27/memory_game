import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img4 from "../images/4.png";
import img5 from "../images/5.png";
import img6 from "../images/6.png";
import img7 from "../images/7.png";
import img8 from "../images/8.png";
import img9 from "../images/9.png";
import img10 from "../images/10.png";
import img11 from "../images/11.png";
import img12 from "../images/12.png";
import img13 from "../images/13.png";
import img14 from "../images/14.png";
import img15 from "../images/15.png";
import img16 from "../images/16.png";
import img17 from "../images/17.png";
import img18 from "../images/18.png";

const icons = [
  { icon: img1, value: "1", visible: false },
  { icon: img1, value: "2", visible: false  },
  { icon: img2, value: "3", visible: false  },
  { icon: img2, value: "4", visible: false  },
  { icon: img3, value: "5", visible: false  },
  { icon: img3, value: "6", visible: false  },
  { icon: img4, value: "7", visible: false  },
  { icon: img4, value: "8", visible: false  },
  { icon: img5, value: "9", visible: false  },
  { icon: img5, value: "10", visible: false  },
  { icon: img6, value: "11", visible: false  },
  { icon: img6, value: "12", visible: false  },
  { icon: img7, value: "13", visible: false  },
  { icon: img7, value: "14", visible: false  },
  { icon: img8, value: "15", visible: false  },
  { icon: img8, value: "16", visible: false  },
  { icon: img9, value: "17", visible: false  },
  { icon: img9, value: "18", visible: false  },
  { icon: img10, value: "19", visible: false  },
  { icon: img10, value: "20", visible: false  },
  { icon: img11, value: "21", visible: false  },
  { icon: img11, value: "22", visible: false  },
  { icon: img12, value: "23", visible: false  },
  { icon: img12, value: "24", visible: false  },
  { icon: img13, value: "25", visible: false  },
  { icon: img13, value: "26", visible: false  },
  { icon: img14, value: "27", visible: false  },
  { icon: img14, value: "28", visible: false  },
  { icon: img15, value: "29", visible: false  },
  { icon: img15, value: "30", visible: false  },
  { icon: img16, value: "31", visible: false  },
  { icon: img16, value: "32", visible: false  },
  { icon: img17, value: "33", visible: false  },
  { icon: img17, value: "34", visible: false  },
  { icon: img18, value: "35", visible: false  },
  { icon: img18, value: "36", visible: false  },
];

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffle(icons);

export default icons;
