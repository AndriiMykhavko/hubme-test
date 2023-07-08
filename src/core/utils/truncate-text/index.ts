import { MAX_LENGTH } from '@constants/index';

export const truncateText = (text: string, maxLength: number = MAX_LENGTH) => {
  if (text.length <= maxLength) {
    return text;
  }

  return text.substring(0, maxLength) + '...';
};

