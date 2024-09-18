function getElementWidth(content, padding, border) {
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding);
    const borderWidth = parseFloat(border);
    const boxSize = contentWidth + paddingWidth * 2 + borderWidth * 2;
    return `${boxSize}px`;
}

console.log(getElementWidth("50px", "8px", "4px"));