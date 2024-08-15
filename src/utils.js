function camelToTitle(string) {
  const result = string.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
}

export function camelToHyphen(string) {
	const result = string.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
	return result;
}

export default camelToTitle;