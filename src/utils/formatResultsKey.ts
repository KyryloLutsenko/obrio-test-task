export const formatResultKey = (key: string): string => {
  const formattedKey = key.replace(/-/g, ' ');
  return formattedKey.charAt(0).toUpperCase() + formattedKey.slice(1);
};
