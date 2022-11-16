const continents = [
  {
    _id: 1,
    name: "서울시 마포구",
  },
  {
    _id: 2,
    name: "서울시 중구",
  },
  {
    _id: 3,
    name: "서울시 용산구",
  },
  {
    _id: 4,
    name: "서울시 종로구",
  },
  {
    _id: 5,
    name: "서울시 강남구",
  },
  {
    _id: 6,
    name: "서울시 송파구",
  },
  {
    _id: 7,
    name: "서울시 성동구",
  },
];

const price = [
  {
    _id: 0,
    name: "전체",
    array: [],
  },
  {
    _id: 1,
    name: "~1.5만원",
    array: [0, 15000],
  },
  {
    _id: 2,
    name: "1.5만원 ~ 2만원",
    array: [15000, 20000],
  },
  {
    _id: 3,
    name: "2만원 ~ 2.5만원",
    array: [20000, 25000],
  },
  {
    _id: 4,
    name: "2.5만원 ~ 3만원",
    array: [25000, 30000],
  },
  {
    _id: 5,
    name: "3만원 ~ 4만원",
    array: [30000, 40000],
  },
  {
    _id: 6,
    name: "4만원 이상 ",
    array: [40000, 1000000],
  },
];

export { continents, price };
