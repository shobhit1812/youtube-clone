const Button = ({ name }) => {
  return (
    <div>
      <button
        className={`border rounded px-3 py-1 m-1 bg-slate-100 hover:bg-slate-200`}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
