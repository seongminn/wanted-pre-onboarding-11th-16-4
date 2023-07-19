import { Sick } from '@/types/sick';

import SearchItem from '../SearchItem';

type SearchListProps = {
  sicks: Sick[];
  error: boolean;
};

const SearchList = (props: SearchListProps) => {
  const { sicks, error } = props;

  if (error)
    return (
      <div className="absolute w-full py-5 mt-2 bg-white border-2 rounded-2xl top-full">
        <span className="px-6 text-base text-gray-500">
          문제가 발생했습니다. 다시 시도해주세요!
        </span>
      </div>
    );

  if (!sicks.length) {
    return (
      <div className="absolute w-full py-5 mt-2 bg-white border-2 rounded-2xl top-full">
        <span className="px-6 text-base text-gray-500">검색어 없음</span>
      </div>
    );
  }

  return (
    <div className="absolute w-full py-5 mt-2 overflow-auto bg-white border-2 rounded-2xl max-h-96 top-full">
      <span className="text-sm text-gray-400 px-7">추천 검색어</span>

      <ul className="pt-3">
        {sicks.map((sick) => (
          <SearchItem key={sick.sickCd} tabIndex={0} sickNm={sick.sickNm} />
        ))}
      </ul>
    </div>
  );
};

export default SearchList;
