const removeHttp = (url: string): string => {
  try {
    return url.replace(/^https?:\/\//, '');
  } catch (error) {
    console.error(error);

    return url;
  }
};

export default removeHttp;
