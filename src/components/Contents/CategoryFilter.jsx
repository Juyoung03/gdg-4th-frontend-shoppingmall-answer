import { useLocation } from "react-router-dom";
import { categoryData } from "../../__mocks__/itemData";
import GDGlogo from "../../assets/gdg-background.png";
import ToggleInput from "../input-bar/ToggleInput";
import ItemList from "../ItemList";
import { useState } from "react";

const CategoryFilter = () => {
  const location = useLocation();

  // 카테고리 값
  const [category, setCategory] = useState("");

  // 카테고리가 검색된 데이터 배열
  const [categoryResult, setCategoryResult] = useState(categoryData);

  const showItems = location.pathname === "/category" ? categoryResult : [];
  const isEmpty = showItems.length === 0;

  return (
    <>
      <div className="mt-[132px] w-[652px]">
        <ToggleInput
          category={category}
          setState={setCategory}
          togglePlaceholder={"카테고리 선택"}
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
export default CategoryFilter;
