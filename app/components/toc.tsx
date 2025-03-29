'use client';

import React, { useEffect } from 'react';
import * as tocbot from 'tocbot';

function Toc() {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: '.post',
      headingSelector: 'h2, h3',
      scrollSmoothOffset: -100,
      headingsOffset: 100,
    });

    return () => tocbot.destroy();
  }, []);

  return (
    <div className="hidden lg:block sticky top-0 w-60 xl:w-68 rounded-box mt-5">
      <h2 className="text-xl border-l-4 border-secondary pl-1">目次</h2>
      <div className="toc px-0 pb-8 text-base"></div>
    </div>
  );
}

export default Toc;
