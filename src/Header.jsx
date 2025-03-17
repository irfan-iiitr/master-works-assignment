import React from 'react';

const Header = ({ count }) => {
  return (
    <div className="py-4 px-6 border-b border-gray-200 text-center font-medium text-lg">
      You have {count} Todos
    </div>
  );
};

export default Header;
 