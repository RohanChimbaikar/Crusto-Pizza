import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      {/* Hero */}
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-red-600">
          Welcome to Crusto Pizza
        </p>

        <h1 className="mb-6 font-semibold text-stone-800">
          <span className="text-3xl font-extrabold sm:text-5xl">
            The best pizza.
          </span>
          <br />
          <span className="text-xl sm:text-2xl">
            Straight out of the oven, straight to you.
          </span>
        </h1>

        <p className="mx-auto mb-8 max-w-xl text-base leading-7 text-stone-500 sm:text-lg">
          Fresh ingredients, crispy crusts, and plenty of cheese. Pick your
          favorite pizza, customize your order, and we&apos;ll get it to you
          while it&apos;s still hot.
        </p>

        <div>
          {' '}
          {/* Main action */}
          {username === '' ? (
            <CreateUser />
          ) : (
            <Button to="/menu" type="primary">
              Continue Ordering, {username}
            </Button>
          )}
        </div>
      </div>

      {/* Features */}
      <div className="mx-auto mt-10 grid max-w-3xl gap-8 border-t border-stone-200 pt-10 sm:grid-cols-3">
        <div>
          <div className="mb-2 text-3xl">🍕</div>
          <h3 className="mb-1 font-semibold text-stone-800">Freshly Made</h3>
          <p className="text-sm leading-6 text-stone-500">
            Every pizza is prepared fresh and baked to order.
          </p>
        </div>

        <div>
          <div className="mb-2 text-3xl">🔥</div>
          <h3 className="mb-1 font-semibold text-stone-800">Oven Hot</h3>
          <p className="text-sm leading-6 text-stone-500">
            Straight from the oven and ready for delivery.
          </p>
        </div>

        <div>
          <div className="mb-2 text-3xl">🚴</div>
          <h3 className="mb-1 font-semibold text-stone-800">Fast Delivery</h3>
          <p className="text-sm leading-6 text-stone-500">
            We get your order to your door while it&apos;s hot.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
