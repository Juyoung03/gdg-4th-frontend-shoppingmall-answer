import UserNavbar from "../components/navbar/UserNavbar";
import CategoryFilter from "../components/Contents/CategoryFilter";
import PriceFilter from "../components/Contents/PriceFilter";
import ItemSort from "../components/Contents/ItemSort";
// import DefaultContents from "../components/Contents/DefaultContents";
import { useLocation, useNavigate } from "react-router-dom";
import ApiDefaultContents from "../components/Contents/ApiDefaultContents";
import { useState } from "react";
import { useEffect } from "react";
import { useCart } from "../contexts/CartContext";
const API_URL = import.meta.env.VITE_API_URL;

const Home = () => {
  const { cartItems } = useCart();
  const location = useLocation();
  const nav = useNavigate();

  // 메뉴바 선택에 따른 콘텐츠 렌더링
  const renderContent = () => {
    switch (location.pathname) {
      case "/category":
        return <CategoryFilter />;
      case "/price":
        return <PriceFilter />;
      case "/sort":
        return <ItemSort />;
      default:
        return <ApiDefaultContents />;
    }
  };

  // 여러 개의 상품처리 관리 상태
  const [items, setItems] = useState([{ itemName: "", count: 0 }]);

  // 구매 POST 보낼 데이터
  const buyItemData = { items: cartItems };

  // 구매 POST 받을 데이터
  // {totalPrice, items: [ {itemName, price, count} ]}; // 설명 주석

  // ----장바구니 구매하기 api ------------------------------
  async function handleBuy() {
    console.log("구매하기 버튼 클릭됨");

    if (items.length === 0) {
      alert("장바구니로 추가된 상품이 없습니다.");
      return;
    }

    try {
      const res = await fetch(`${API_URL}/items/buy`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(buyItemData),
      });
      if (!res.ok) {
        throw new Error(`Failed to send items: ${res.status}`);
      }

      const jsondata = await res.json();
      console.log(jsondata);
      alert("구매 완료");

      // 구매 내역을 localStorage 에 저장하기 - '내 구매 내역' 버튼 기능을 위한.
      localStorage.setItem("lastBuyResult", JSON.stringify(jsondata));

      // 성공하면 구매완료 페이지로, 응답 데이터를 Cart로 넘기기
      // useLocation.state 이용하기
      nav("/purchased", { state: { buyResult: jsondata } });
    } catch (error) {
      console.error("구매하기 실패: ", error);
      alert("구매 실패");
    }
  }

  //----------------------------------------------------------

  return (
    <>
      <UserNavbar />
      {renderContent()}

      <button
        onClick={handleBuy}
        className="fixed bottom-[40px] w-[652px] rounded-[8px] border-[2px] border-[#008CFF] bg-white px-[16px] py-[12px] text-[#008CFF] hover:cursor-pointer"
      >
        장바구니 구매하기
      </button>
    </>
  );
};

export default Home;
