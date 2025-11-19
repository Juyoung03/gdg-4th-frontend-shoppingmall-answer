// mockData

// 모든 상품 리스트 api
export const itemData = [
  { id: 1, itemName: "원피스", price: 1000, quantity: 13 },
  { id: 2, itemName: "상품2", price: 200, quantity: 7 },
  { id: 3, itemName: "상품3", price: 5000, quantity: 14 },
  { id: 4, itemName: "상품4", price: 8000, quantityk: 113 },
];

// 검색된 상품 리스트 api
export const searchedData = {
  id: 1,
  itemName: "원피스",
  price: 1000,
  quantity: 13,
};

// 장바구니 상품 페이지 api
export const cartList = {
  totalPrice: 20000,
  items: [
    { itemName: "구매된 상품1", count: 5, price: 1000 },
    { itemName: "구매된 상품2", count: 5, price: 7000 },
    { itemName: "구매된 상품3", count: 5, price: 500 },
  ],
};

// 의류로 카테고리 선택된 상품 리스트 api
export const categoryData = [
  {
    id: 1,
    category: "의류",
    itemName: "원피스",
    price: 1000,
    quantity: 13,
  },
  {
    id: 2,
    category: "의류",
    itemName: "청바지",
    price: 1000,
    quantity: 13,
  },
];

// 100~1000인 가격 검색된 데이터 리스트
export const priceSelectedData = {
  low: 100,
  high: 10000,

  items: [
    {
      id: 1,
      itemName: "원피스",
      price: 500,
      quantity: 13,
    },
    {
      id: 2,
      itemName: "청바지",
      price: 200,
      quantity: 13,
    },
  ],
};

// 정렬된 결과 리스트 api
export const sortedData = [
  {
    id: 1,
    itemName: "가나",
    price: 200,
    quantity: 13,
  },
  {
    id: 2,
    itemName: "나다다",
    price: 200,
    quantity: 13,
  },
  {
    id: 3,
    itemName: "다라",
    price: 200,
    quantity: 13,
  },
];
