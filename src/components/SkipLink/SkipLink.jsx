import { useState } from 'react';

const SkipLink = () => {
  const [focused, setFocused] = useState(false);

  return (
    <a
      href="#main-content"
      className={`
        fixed top-4 left-4 z-50 bg-red-600 text-white px-4 py-2 rounded-md
        transition-transform duration-300 focus:outline-none
        ${focused ? 'transform-none' : '-translate-y-20'}
      `}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      Skip to main content
    </a>
  );
};

export default SkipLink;