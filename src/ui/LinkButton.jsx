import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

/* eslint-disable react/prop-types */

const LinkButton = ({ children, to }) => {
  const navigate = useNavigate();
  if (to === -1) {
    return (
      <button
        type="button"
        className="text-sm text-blue-500 hover:text-blue-600 sm:text-base md:text-lg"
        onClick={() => navigate(-1)}
      >
        &larr; Go back
      </button>
    );
  }
  return (
    <Link
      to={to}
      className="text-sm text-blue-500 hover:text-blue-600 sm:text-base md:text-lg"
    >
      {children}
    </Link>
  );
};

export default LinkButton;
