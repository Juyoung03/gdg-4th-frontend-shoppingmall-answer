import { useState } from "react";
import BlueButton from "../BlueButton";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";

// 고정 리스트
const categoryList = [
  { id: 1, name: "의류" },
  { id: 2, name: "전자기기" },
  { id: 3, name: "화장품" },
  { id: 4, name: "식품" },
];

const sortList = [
  { id: 1, name: "이름(가나다순)" },
  { id: 2, name: "가격" },
];

const ToggleInput = ({
  sortType,
  category,
  setState,
  togglePlaceholder,
  className,
}) => {
  const [active, setActive] = useState(false);

  const location = useLocation();

  // 카테고리 선택
  const handleSelect = name => {
    setState(name);
    setActive(false);
    console.log("선택된 토글:", name);
  };

  // 카테고리 변경 확인
  useEffect(() => {
    console.log("sortType 변경됨:", sortType);
  }, [sortType]);

  // 카테고리 변경 확인
  useEffect(() => {
    console.log("category 변경됨:", category);
  }, [category]);

  // 토글 열고 닫기
  const onClickListing = () => {
    console.log("클릭함");
    setActive(!active); // 토글 상태 변경
  };

  return (
    <>
      <div className="relative flex w-full items-center gap-[20px]">
        <input
          readOnly
          onClick={onClickListing}
          value={location.pathname === "/sort" ? sortType : category}
          placeholder={togglePlaceholder}
          className={twMerge(
            "h-[43px] w-[200px] cursor-pointer rounded-[8px] border border-[#8F8F8F] px-[16px] py-[12px]",
            className
          )}
          //className="h-[43px] w-[200px] cursor-pointer rounded-[8px] border border-[#8F8F8F] px-[16px] py-[12px]"
        />
        {active && location.pathname === "/sort" ? (
          <div className="absolute top-full left-0">
            {sortList.map(s => (
              <div
                onClick={() => handleSelect(s.name)}
                className="h-[43px] w-[200px] rounded-[8px] border border-[#8F8F8F] bg-[#e8e8e8] px-[16px] py-[12px]"
                key={s.id}
              >
                {s.name}
              </div>
            ))}
          </div>
        ) : null}
        {active &&
        (location.pathname === "/category" ||
          location.pathname === "/admin") ? (
          <div className="absolute top-full left-0">
            {categoryList.map(cat => (
              <div
                onClick={() => handleSelect(cat.name)}
                //className="h-[39px] w-[205px] rounded-[8px] border border-[#8F8F8F] px-[12px] py-[6px] text-[14px] placeholder:text-[14px]"
                className={twMerge(
                  "h-[43px] w-[200px] rounded-[8px] border border-[#8F8F8F] bg-[#e8e8e8] px-[16px] py-[12px]",
                  className
                )}
                key={cat.id}
              >
                {cat.name}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};
export default ToggleInput;
