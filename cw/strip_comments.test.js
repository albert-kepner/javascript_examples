function solution(text, markers) {
    // Split the text into lines
    const lines = text.split('\n');

    // Iterate over each line
    const result = lines.map(line => {
        // Find the index of the first marker in the line
        const markerIndex = markers.reduce((index, marker) => {
            const markerPos = line.indexOf(marker);
            return markerPos !== -1 && (index === -1 || markerPos < index) ? markerPos : index;
        }, -1);

        // If a marker is found, remove everything after it
        if (markerIndex !== -1) {
            line = line.substring(0, markerIndex);
        }

        return line.trimEnd();
    });

    // Join the lines back together
    return result.join('\n');
}

test('strip', () => {
    var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]);
    expect(result).toEqual("apples, pears\ngrapes\nbananas");
});
