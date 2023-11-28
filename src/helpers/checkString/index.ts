const checkString = (str: any): str is string => {
  try {
    if (typeof str !== 'string') {
      return false;
    }

    if (!str) {
      return false;
    }

    if (!str.trim()) {
      return false;
    }

    return true;
  } catch (error: any) {
    console.error(error);

    return false;
  }
};

export default checkString;
