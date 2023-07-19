1. API 호출 별로 로컬 캐싱 구현

- [x] 한 번 호출에 성공했다면, 해당 정보를 cache에 등록
- [x] 다음 호출 시 interceptor를 통해 cache에 해당 내용이 있는지 확인
- [x] 만약 없을 시 api 호출
- [x] 있다면 해당 내용을 그대로 반환
- [x] expire time은 어떻게 구현해야 할까?

  - [x] data를 cache에 등록할 때 Date.now() 값을 함께 등록
  - [x] api 호출 시 interceptor로 cache에 해당 내용이 저장되어 있는지 확인
  - [x] 저장되어 있다면, (캐시 등록 시간 + 만료 시간)을 확인
  - [x] 현재 시간이 (캐시 등록 시간 + 만료 시간) 이후라면, 해당 캐시를 제거 후 api 호출
  - [x] 현재 시간이 만료 시간을 지나지 않았다면 캐시를 반환

  --useEffect를 통해 일정 시간마다 만료 시간을 확인하고 만료된 캐시를 반환하도록 이중으로 구현--

2. 입력마다 API 호출하지 않도록 호출 횟수를 줄이는 전략

- [x] debounce 사용할 것

3. API 호출 시 `consonle.info('calling api')` 출력을 통해 콘솔창에서 API 호출 횟수를 확인

4. 키보드만으로 추천 검색어로 이동 가능하도록 구현
