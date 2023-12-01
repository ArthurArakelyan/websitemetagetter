export const getBlogStructuredDate = (dateTime: number): string => {
  try {
    const date = new Date(dateTime);

    let day: string | number = date.getDate();
    day = day < 10 ? `0${day}` : day;

    let month: string | number = date.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;

    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
  } catch (error: any) {
    console.error(error);

    return '';
  }
};

export const getBlogDate = (dateTime: number): string => {
  try {
    const date = new Date(dateTime);

    let day: string | number = date.getDate();
    day = day < 10 ? `0${day}` : day;

    let month: string | number = date.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;

    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  } catch (error: any) {
    console.error(error);

    return '';
  }
};
