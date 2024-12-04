import React from 'react';
import { HoverEventTag } from '../../style';
import { openLink, copyToClipboard } from './utils';

const ContactItem = ({ item, onCopy }) => {
  const handleClick = () => {
    if (item.type === "link") {
      openLink(item.url);
    } else if (item.type === "text") {
      copyToClipboard(item.text);
      onCopy();
    }
  };

  return (
    <HoverEventTag onClick={handleClick}>
      <span>{item.text}</span>
    </HoverEventTag>
  );
};

export default ContactItem;
