import { debounce } from 'lodash';
import { useEffect, useState } from 'react';

export default function useScroll() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = debounce(() => {
      setScrollY(window.scrollY);
    }, 20);
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return { scrollY };
}
