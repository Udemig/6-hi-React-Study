import { useContext } from 'react';
import { BasketContext } from './../context/basketContext';
import { BiSolidUpArrow, BiSolidDownArrow } from 'react-icons/bi';

const Checkout = () => {
  const { basket, addToBasket } = useContext(BasketContext);

  return (
    <div>
      {basket.length === 0 && (
        <h3 className="text-center my-5">
          Öncelikle sepete bir kaç ürün ekleyiniz
        </h3>
      )}

      {basket?.map((i, index) => (
        <div
          key={index}
          className="d-flex justify-content-between align-items-center p-3 gap-3"
        >
          <img
            src={i.image}
            height={100}
            className="rounded shadow"
          />
          <h4>{i.title.slice(0, 15)}...</h4>
          <h3>$ {i.price}</h3>

          <p>miktar: {i.amount}</p>

          <div className="fs-2 d-flex flex-column">
            <BiSolidUpArrow
              role="button"
              className="text-success"
              onClick={() => addToBasket(i)}
            />

            <BiSolidDownArrow role="button" className="text-danger" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Checkout;
