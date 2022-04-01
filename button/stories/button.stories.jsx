import React from 'react';
import RippleButton from '../src/ripple-button';
import Button from '../src/button';

export const ButtonPrimary = () => {
  return <Button text="Primary" />;
};

export const ButtonSecondary = () => {
  return <Button text="Secondary" color="secondary" />;
};

export const RippleButtonPrimary = () => {
  return <RippleButton text="Primary" />;
};

export const RippleButtonSecondary = () => {
  return <RippleButton text="Secondary" color="secondary" />;
};
