export const serializeQuery = (obj: Record<string, string>): string => {
  try {
    const str = [];

    for (const p in obj) {
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }
    }

    return str.join('&');
  } catch (error: any) {
    console.error(error);

    return '';
  }
};

const getUrlWithQuery = (url: string[], searchParams: Record<string, string>): string => {
  try {
    const query = serializeQuery(searchParams);

    return `https://${url.join('/')}${query ? `?${query}` : ''}`;
  } catch (error: any) {
    console.error(error);

    return '';
  }
};

export default getUrlWithQuery;
