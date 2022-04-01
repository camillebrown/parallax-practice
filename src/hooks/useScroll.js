import { useEffect } from 'react';

function useScroll(tags) {
  useEffect(() => {
    tags.forEach(tag => {
      let element =
        tag === 'header'
          ? document.querySelector('header')
          : document.getElementById(tag);

      window.addEventListener('scroll', () => {
        let value = window.scrollY;
        if (tag === 'stars') element.style.left = value * 0.25 + 'px';
        if (tag === 'moon') element.style.top = value * 1.005 + 'px';
        if (tag === 'mountains_behind') element.style.top = value * 0.5 + 'px';
        if (tag === 'mountains_front') element.style.top = value * 0 + 'px';
        if (tag === 'text') element.style.marginRight = value * 3 + 'px';
        if (tag === 'text') element.style.marginTop = value * 1.5 + 'px';
        if (tag === 'btn') element.style.marginTop = value * 1.5 + 'px';
        if (tag === 'header') element.style.top = value * 0.5 + 'px';
      });
    })
    

    return () => {
      tags = '';
    };
  }, [tags]);
}
export default useScroll;
