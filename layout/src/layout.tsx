import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CoreLayout } from '@divriots/dockit-react/mdx-layout-core';

import './layout.scss';

const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="187"
      height="43"
      viewBox="0 0 187 43"
    >
      <text
        id="Polyngual"
        transform="translate(0 35)"
        fill="#d391ff"
        fontSize="32"
        fontFamily="SegoeUI-Bold, Segoe UI"
        fontWeight="700"
      >
        <tspan x="0" y="0">
          POLY
        </tspan>
        <tspan y="0" fill="#000">
          NGUAL
        </tspan>
      </text>
    </svg>
  );
};

export default function Layout(props) {
  return (
    <MDXProvider components={{}}>
      <CoreLayout logo={<Logo />} {...props} />
    </MDXProvider>
  );
}
