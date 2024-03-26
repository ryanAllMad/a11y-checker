export const insertElementStyles = (element: string, showLinks: boolean) => {
	const styleCode = `${element} { outline: 1px solid #483d8b !important;    border-radius: 2px; }`;
	const style = document.createElement('style');
	style.setAttribute('id', 'a11y-link-styles');
	style.innerHTML = styleCode;
	const editor = document.querySelector(`iframe[name="editor-canvas"]`);
	// @ts-expect-error
	const hasStyle = editor.contentDocument.querySelector(`#a11y-link-styles`);
	if (showLinks && editor && !hasStyle) {
		// @ts-expect-error
		editor.contentDocument.head.appendChild(style);
	}
	if (!showLinks && editor && hasStyle) {
		// @ts-expect-error
		editor.contentDocument.head.removeChild(
			// @ts-expect-error
			editor.contentDocument.head.lastChild
		);
	}
};
