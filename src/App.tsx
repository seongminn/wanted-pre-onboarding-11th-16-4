import { ChangeEvent, useEffect, useState } from 'react';

import { getSick } from '@/apis/sick';
import Layout from '@/components/common/Layout';
import { Sick } from '@/types/sick';

import useDebouncedValue from './hooks/useDebounce';

function App() {
  const [sicks, setSicks] = useState<Sick[] | null>(null);
  const [input, setInput] = useState<string>('');

  const debounceOnChangeInput = useDebouncedValue<string>(input, 200);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const getSicks = () => {
      getSick({ q: debounceOnChangeInput }).then((res) => setSicks(res));
    };

    getSicks();
  }, [debounceOnChangeInput]);

  return (
    <Layout>
      <form className="relative h-auto max-w-[800px] w-full">
        <input
          value={input}
          onChange={onChangeInput}
          className="w-full text-xl border-2 rounded-full p-7"
          placeholder="질환명을 입력해주세요."
        />
        <div className="absolute w-full pt-5 mt-5 overflow-auto bg-white border-2 rounded-2xl min-h-[400px] max-h-96 top-full">
          <span className="text-sm text-gray-400 px-7">추천 검색어</span>
          {sicks?.length ? (
            <ul className="pt-3">
              {sicks?.map((sick) => (
                <li key={sick.sickCd} className="py-2 px-7 hover:bg-slate-50">
                  {sick.sickNm}
                </li>
              ))}
            </ul>
          ) : (
            <div className="py-2 text-gray-400 px-7">검색어 없음</div>
          )}
        </div>
      </form>
    </Layout>
  );
}

export default App;
