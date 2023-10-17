const LoadMoreView = ({ handleClick }) => {
  return (
    <div className="d-flex justify-content-center w-100">
      <button onClick={handleClick}>
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="css-i6dzq1"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>{' '}
        Daha Fazla
      </button>
    </div>
  );
};

export default LoadMoreView;
