import millify from 'millify';
import React from 'react';
import { FaBitcoin } from 'react-icons/fa';
import LoadMoreController from '../controllers/LoadMoreController';

const MainPageView = ({ coins }) => {
  return (
    <div className="container-xl mt-5">
      <h4 className="d-flex align-items-center gap-3">
        <FaBitcoin /> <span>Hoş Geldiniz, Coin Listesi</span>
      </h4>
      <p>
        Coin Listesi, dünya genelindeki kripto para birimlerini ve
        dijital varlıkları takip etmek için mükemmel bir kaynaktır. En
        güncel kripto fiyatları, piyasa haberleri ve analizler burada!
        Kripto dünyasının nabzını tutan Coin Listesi ile yatırımınızı
        yönlendirin
      </p>

      <table className="table table-dark  table-hover w-100 mt-5">
        <thead>
          <tr>
            <th>#</th>
            <th>coin</th>
            <th>fiyat</th>
            <th>market hacmi</th>
            <th>değişim 24s</th>
            <th>%değişim (24s)</th>
          </tr>
        </thead>
        <tbody>
          {coins
            ? coins.map((coin, id) => (
                <tr>
                  <td>{id + 1}</td>
                  <td>
                    <span className="text-warning fw-bold me-2">
                      {coin.symbol}
                    </span>
                    <span className="text-nowrap text-truncate overflow-hidden ">
                      {coin.name}
                    </span>
                  </td>
                  <td>${millify(coin.priceUsd)}</td>
                  <td>${millify(coin.marketCapUsd)}</td>
                  <td>${millify(coin.volumeUsd24Hr)}</td>
                  <td>{millify(coin.changePercent24Hr)}%</td>
                </tr>
              ))
            : 'yükleniyor'}
        </tbody>
      </table>

      <LoadMoreController />
    </div>
  );
};

export default MainPageView;
