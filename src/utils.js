export function camelToHyphen(string) {
	const result = string.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
	return result;
}

const toTitleCase = str =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.slice(0, 1).toUpperCase() + x.slice(1))
    .join(' ');

export default toTitleCase;