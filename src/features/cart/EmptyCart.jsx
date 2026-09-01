import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className="h-screen px-2 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-7 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>

      <div className="flex h-[70%] items-center justify-center">
        <img
          className="h-60 sm:h-72 md:h-80"
          src="/empty.svg"
          alt="Empty cart"
        />
      </div>
    </div>
  );
}

export default EmptyCart;
