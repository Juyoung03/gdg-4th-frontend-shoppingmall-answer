import axios from "axios";

// 기본 전체 상품 리스트
// mockData - itemData
//   [
//   { id: 1, name: "원피스", price: 1000, stock: 13 },
//   { id: 2, name: "상품2", price: 200, stock: 7 },
//   { id: 3, name: "상품3", price: 5000, stock: 14 },
//   { id: 4, name: "상품4", price: 8000, stock: 113 },
// ]
export async function fetchItemData({ setItems }) {
  try {
    const response = await axios.get("/item-list");
    console.log("반환 데이터: ", response.data);
    setItems(response.data);
  } catch (error) {
    console.log("Error GET data: ", error);
  }
}

// const API_URL = import.meta.env.VITE_API_URL;

// export async function fetchItemData({setItems}) {
//   const res = await fetch(`${API_URL}/item-list`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     }
//   });

//   if (!res.ok) {
//     throw new Error(`Failed to fetch Item Data: ${res.status}`);
//   }
//   const json = await res.json();
//   console.log(json.data);
// }

// 검색 된 하나의 상품
// mockData - searchedData
//   {
//   id: 1,
//   name: "원피스",
//   price: 1000,
//   stock: 13,
// }
export async function fetchSearchedData({ setItems }) {
  try {
    const response = await axios.get("/searched-item");
    console.log("반환 데이터: ", response.data);
    setItems([response.data]); // 하나여도 배열로 만들기
  } catch (error) {
    console.log("Error GET data: ", error);
  }
}
