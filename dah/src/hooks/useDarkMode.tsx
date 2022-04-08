import React from 'react';

export default function useDarkMode(initialState = true) {
  const [dark, setDark] = React.useState(initialState);
  React.useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return { dark, setDark };
}
