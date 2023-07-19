import { ChangeEvent } from 'react';

import SearchIcon from '@/components/common/Icon/SearchIcon';

type SearchInputProps = {
  input: string;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput = (props: SearchInputProps) => {
  const { input, onChangeInput } = props;

  return (
    <div className="flex items-center w-full pr-3 bg-white border-2 rounded-full jutify-center">
      <label
        htmlFor="searchBar"
        className="relative flex items-center justify-start flex-1 py-7 pl-7 mr-7"
      >
        <SearchIcon className="w-6 h-6 mr-3 fill-gray-400" />
        <input
          id="searchBar"
          value={input}
          onChange={onChangeInput}
          className="flex-1 text-xl outline-none"
          placeholder="질환명을 입력해주세요."
        />
      </label>
      <button
        type="button"
        className="h-full px-3 text-white bg-blue-500 rounded-full aspect-square"
      >
        검색
      </button>
    </div>
  );
};

export default SearchInput;
