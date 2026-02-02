const noop = async () => null;

const AsyncStorage = {
  getItem: noop,
  setItem: noop,
  removeItem: noop,
  clear: noop,
  getAllKeys: async () => [],
  multiGet: async () => [],
  multiSet: async () => undefined,
  multiRemove: async () => undefined,
};

export default AsyncStorage;
