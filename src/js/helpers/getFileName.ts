export const getFileName = (url: string) => {
	if (!url) {
		return;
	}
	const jpg = /(?:(\w)+.jpg)/g;
	const png = /(?:(\w)+.png)/g;
	if (jpg) {
		return url.match(jpg);
	}
	if (png) {
		return url.match(png);
	}
	return 'no file found.';
};
