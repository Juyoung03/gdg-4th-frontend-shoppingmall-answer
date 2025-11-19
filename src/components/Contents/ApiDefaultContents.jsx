import GDGlogo from "../../assets/gdg-background.png";
// import { itemData, searchedData } from "../../__mocks__/itemData";
import ItemList from "../ItemList";
import SearchInput from "../input-bar/SearchInput";
import { useState } from "react";
import { useEffect } from "react";
const API_URL = import.meta.env.VITE_API_URL;

const ApiDefaultContents = () => {
  // 검색어 (상품명명)
  const [itemName, setitemName] = useState("");

  // 검색 버튼이 클릭되었는지. 검색 여부
  const [searchClicked, setSearchClicked] = useState(false);
  // 검색된 데이터 배열
  const [searchResult, setSearchResult] = useState([]);
  // 전체 데이터 배열
  const [allItems, setAllItems] = useState([]);

  // ----------------------------------------------------------
  const showItems = searchClicked ? searchResult : allItems;
  //console.log(showItems);
  const isEmpty = showItems.length === 0;

  // 전체 상품 불러오기 api------------------------------------
  useEffect(() => {
    async function fetchAllItems() {
      try {
        const res = await fetch(`${API_URL}/items`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch items: ${res.status}`);
        }
        const jsonData = await res.json();
        console.log(jsonData.data);
      } catch (error) {
        console.log("데이터 fetch 실패: ", error.message || null);
      }
    }
    fetchAllItems();
  }, []);

  const isEmptyObject = obj =>
    obj && typeof obj === "object" && Object.keys(obj).length === 0;

  // 검색 api -------------------------------------------------------------
  // 클릭되면 searchClicked를 true로 설정
  async function handleSearch(queryItemName) {
    console.log("검색 버튼 클릭");
    setSearchClicked(true);
    console.log(queryItemName);

    try {
      const res = await fetch(`${API_URL}/items/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemName: itemName }),
      });

      if (!res.ok) {
        throw new Error(`Failed to search items: ${res.status}`);
      }

      const data = await res.json();

      if (isEmptyObject(data)) {
        setSearchResult([]); // 검색 결과 없음
      } else {
        setSearchResult([data]); // 검색 결과 있음 (배열로 감싸기)
      }

      // setSearchResult(response.data ? [response.data] : []);
      console.log("검색 반환 데이터: ", data);
      console.log("검색어 보내기 성공");
    } catch (error) {
      console.log("Error POST data: ", error);
      setSearchResult([]);
    }
  }

  return (
    <>
      <div className="mt-[60px] w-[652px]">
        <SearchInput
          itemName={itemName}
          setItemName={setitemName}
          handleSearch={() => handleSearch(itemName)}
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

export default ApiDefaultContents;
