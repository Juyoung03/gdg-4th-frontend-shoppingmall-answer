import { useState } from "react";
import { priceSelectedData } from "../../__mocks__/itemData";
import GDGlogo from "../../assets/gdg-background.png";
import PriceBracketInput from "../input-bar/PriceBracketInput";
import ItemList from "../ItemList";
import { useLocation } from "react-router-dom";

const PriceFilter = () => {
  const location = useLocation();
  // 검색된 가격
  const [lowPrice, setLowPrice] = useState(0);
  const [highPrice, setHighPrice] = useState(0);

  // 검색된 데이터 배열
  const [priceResult, setPriceResult] = useState(priceSelectedData.items);

  const showItems = location.pathname === "/price" ? priceResult : [];
  const isEmpty = showItems.length === 0;

  function handleSearch(low, high) {
    console.log("검색 클릭됨");
    console.log(low, high);
  }

  return (
    <>
      <div className="mt-[60px] w-[652px]">
        <PriceBracketInput
          setLowPrice={setLowPrice}
          setHighPrice={setHighPrice}
          lowPrice={lowPrice}
          highPrice={highPrice}
          handleSearch={() =>
            handleSearch(priceSelectedData.low, priceSelectedData.high)
          }
        />

        <div>
          {isEmpty ? (
            <div className="absolute top-1/2 left-1/2 block h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 transform">
              <img src={GDGlogo} style={{ opacity: 0.15 }} />
              <div className="absolute top-[80%] flex w-full justify-center text-[16px] text-[#8F8F8F]">
                검색 결과가 없습니다.
              </div>
            </div>
          ) : (
            <div className="mt-[72px] mb-[200px]">
              <ItemList items={showItems} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default PriceFilter;
