import { useLocation } from "react-router-dom";
import { sortedData } from "../../__mocks__/itemData";
import GDGlogo from "../../assets/gdg-background.png";
import ToggleInput from "../input-bar/ToggleInput";
import ItemList from "../ItemList";
import { useState } from "react";

const ItemSort = () => {
  const location = useLocation();

  // 정렬 값 - 이름(가나다순), 가격
  const [sortType, setSortType] = useState("");

  // 정렬된 결과 데이터 배열
  const [sortResult, setSortResult] = useState(sortedData);

  const showItems = location.pathname === "/sort" ? sortResult : [];
  const isEmpty = showItems.length === 0;

  return (
    <>
      <div className="mt-[132px] w-[652px]">
        <ToggleInput
          sortType={sortType}
          setState={setSortType}
          togglePlaceholder={"정렬 기준 선택"}
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
              <div className="mt-[72px] mb-[200px]">
                <ItemList items={showItems} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default ItemSort;
