import { Link } from 'react-router-dom';

const Card = ({ book }) => {
  return (
    <div className="card shadow rouned p-1">
      <img className="rounded" src={book.image} />

      <div className="card-body">
        <h4>{book.title}</h4>
        <p>{book.author}</p>
        <Link
          to={`/ürün/${book.id}`}
          className="btn btn-primary w-100"
        >
          Detay Gör
        </Link>
      </div>
    </div>
  );
};

export default Card;
