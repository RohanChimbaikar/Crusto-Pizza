import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */

const Button = ({
  children,
  disabled = false,
  to,
  type = 'primary',
  onClick,
}) => {
  const base =
    'inline-flex min-w-[7.5rem] items-center justify-center rounded-full font-semibold uppercase tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.97] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50';

  const styles = {
    small:
      `${base} bg-bronze px-3 py-2 text-xs text-cream-50 min-w-2 text-center   ` +
      'hover:bg-bronze-hover focus-visible:ring-bronze-hover md:px-5 md:py-2.5',

    round:
      `${base} bg-bronze px-2.5 py-1 text-sm text-cream-50 min-w-4 ` +
      'hover:bg-bronze-hover focus-visible:ring-bronze-hover md:px-3.5 md:py-2',
    primary:
      `${base} bg-bronze px-5 py-3 text-sm text-cream-50 ` +
      'hover:bg-bronze-hover focus-visible:ring-bronze-hover md:px-7 md:py-3.5',
    secondary:
      'inline-flex border-2 rounded-full border-stone-300 hover:bg-stone-200 hover:text-stone-600 items-center justify-center px-2 py-2 text-sm font-semibold uppercase tracking-wide text-stone-500 transition-colors hover:text-bronze  focus-visible:ring-2 <focus-visible:ring-stone-5></focus-visible:ring-stone-5>00 focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 text-xs',
  };

  const className = styles[type] ?? styles.primary;

  if (to) {
    return (
      <Link
        className={className}
        to={to}
        aria-disabled={disabled}
        onClick={(e) => {
          if (disabled) e.preventDefault();
        }}
      >
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button
        type="submit"
        onClick={onClick}
        disabled={disabled}
        className={className}
      >
        {children}
      </button>
    );
  }

  return (
    <button type="submit" disabled={disabled} className={className}>
      {children}
    </button>
  );
};

export default Button;
