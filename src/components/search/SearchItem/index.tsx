import SearchIcon from '@/components/common/Icon/SearchIcon';

type SearchItemProps = {
  sickNm: string;
  tabIndex: number;
};

const SearchItem = (props: SearchItemProps) => {
  const { sickNm, tabIndex } = props;

  return (
    <li tabIndex={tabIndex} className="flex items-center py-2 px-7 hover:bg-slate-50">
      <SearchIcon className="w-4 h-4 mr-3" />
      <span>{sickNm}</span>
    </li>
  );
};

export default SearchItem;
