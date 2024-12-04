import { LINK_PROPS } from './constants';

export const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
};

export const openLink = (url) => {
  window.open(url, LINK_PROPS.target, LINK_PROPS.rel);
};
