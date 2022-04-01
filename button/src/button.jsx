import React from 'react';
import './button.scss';

export default function Button({ text = 'Submit', color = 'primary' }) {
  return (
    <button
      className="button"
      style={{ '--button-color': `var(--tdp-color-palette-${color})` }}
    >
      {text}
    </button>
  );
}
