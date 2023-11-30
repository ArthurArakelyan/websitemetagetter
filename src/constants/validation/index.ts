export const requiredMessage = 'Required';
export const emailMessage = 'Email is not correct';

const getMaxLengthMessage = (key: keyof typeof maxLength) => {
  return `Text is too long (maximum is ${maxLength[key]})`;
};

export const maxLength = {
  short: 64,
  base: 128,
  long: 256,
  extraLong: 512,
  textarea: 2048,
} as const;

export const maxLengthMessages = {
  short: getMaxLengthMessage('short'),
  base: getMaxLengthMessage('base'),
  long: getMaxLengthMessage('long'),
  extraLong: getMaxLengthMessage('extraLong'),
  textarea: getMaxLengthMessage('textarea'),
} as const;

