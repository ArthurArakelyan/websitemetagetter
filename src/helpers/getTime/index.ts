const getTime = (date: string): number => {
  try {
    return new Date(date).getTime();
  } catch (error: any) {
    console.error(error);

    return 0;
  }
};

export default getTime;
