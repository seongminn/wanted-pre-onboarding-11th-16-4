import { ChangeEvent, useEffect, useState } from 'react';

import { getSick } from '@/apis/sick';
import Layout from '@/components/common/Layout';
import { Sick } from '@/types/sick';

import SearchInput from './components/search/SearchInput';
import SearchList from './components/search/SearchList';
import useDebouncedValue from './hooks/useDebounce';

function App() {
  const [sicks, setSicks] = useState<Sick[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');

  const debounceOnChangeInput = useDebouncedValue<string>(input, 350);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const getSicks = () => {
      getSick({ q: debounceOnChangeInput })
        .then((res) => setSicks(res))
        .catch(() => setError(true));
    };

    getSicks();
  }, [debounceOnChangeInput]);

  return (
    <Layout>
      <form className="relative h-auto max-w-[700px] w-full">
        <SearchInput input={input} onChangeInput={onChangeInput} />
        {input && <SearchList sicks={sicks} error={error} />}
      </form>
    </Layout>
  );
}

export default App;
