const setCookie = (key: string, value: string) => {
  try {
    document.cookie = `${key}=${value};path=/;expires=Fri, 31 Dec ${new Date().getFullYear() + 1} 23:59:59 GMT;Secure`;
  } catch (error: any) {
    console.error(error);
  }
};

export default setCookie;
