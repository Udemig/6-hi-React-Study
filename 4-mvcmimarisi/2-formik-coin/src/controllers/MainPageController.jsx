import axios from 'axios';
import MainPageView from '../views/MainPageView';
import { useEffect, useState } from 'react';
axios.defaults.baseURL = 'https://api.coincap.io/v2';

const MainPageController = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get('/assets?limit=15&offset=1')
      .then((res) => setCoins(res.data.data));
  }, []);

  return <MainPageView coins={coins} />;
};

export default MainPageController;
