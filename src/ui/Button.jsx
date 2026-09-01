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
    'inline-flex items-center justify-center rounded-full font-semibold uppercase tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.97] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50';

  const styles = {
    small:
      `${base} min-w-0 bg-bronze px-3 py-2 text-xs text-cream-50 ` +
      'hover:bg-bronze-hover focus-visible:ring-bronze-hover md:px-5 md:py-2.5',

    round:
      `${base} h-8 w-8 min-w-0 p-0 text-sm text-cream-50 ` +
      'bg-bronze hover:bg-bronze-hover focus-visible:ring-bronze-hover',

    primary:
      `${base} min-w-[7.5rem] bg-bronze px-5 py-3 text-sm text-cream-50 ` +
      'hover:bg-bronze-hover focus-visible:ring-bronze-hover md:px-7 md:py-3.5',

    secondary:
      `${base} border-2 border-stone-300 px-3 py-2 text-xs text-stone-500 ` +
      'hover:bg-stone-200 hover:text-stone-600 hover:text-bronze ' +
      'focus-visible:ring-stone-500',
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

  return (
    <button
      type={onClick ? 'button' : 'submit'}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;
