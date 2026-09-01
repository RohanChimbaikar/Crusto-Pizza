import React from 'react';
import { useSelector } from 'react-redux';

const Username = () => {
  const username = useSelector((state) => state.user.username);

  if (!username) return;

  return (
    <div className="hidden text-sm font-semibold uppercase text-cream-100 md:block">
      {username}
    </div>
  );
};

export default Username;
