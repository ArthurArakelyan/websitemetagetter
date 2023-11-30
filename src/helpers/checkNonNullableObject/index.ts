const checkNonNullableObject = <T = any> (object: T): boolean => {
  try {
    if (typeof object !== 'object') {
      return false;
    }

    const values = Object.values(<Object>object);

    if (!values.length) {
      return false;
    }

    const nullValues: any[] = [];

    for (let i = 0; i < values.length; i++) {
      const value = values[i];

      if (value && typeof value === 'object') {
        nullValues.push(!checkNonNullableObject(value));
        continue;
      }

      if (value === null) {
        nullValues.push(true);
        continue;
      }

      break;
    }

    return nullValues.length !== values.length;
  } catch (error) {
    console.error(error);

    return false;
  }
};

export default checkNonNullableObject;
