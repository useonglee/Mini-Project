import axios from 'axios';

const fetcher = (url: string) => 
    axios.get(url, {
        withCredentials: true,
    }).then((response) => 
        // console.log(response.data)
        response.data
    );

// 내가 원할 때 swr 뿌리기
// 주기적으로 스스로 swr 호출하는 것을 막기
export default fetcher;