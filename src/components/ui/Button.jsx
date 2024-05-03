// eslint-disable-next-line react/prop-types
const Button = ({ text, classname }) => {
  return (
    <button
      type="button"
      className={`  font-medium rounded-3xl bg-transparent px-6 py-2 text-white border-white border-[1px]  ${classname} `}
    >
      {text}
    </button>
  );
};

export default Button;
