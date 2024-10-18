function createPhoneNumberV0(numbers) {
    const area = 100 * numbers[0] + 10 * numbers[1] + numbers[2];
    const exchg = 100 * numbers[3] + 10 * numbers[4] + numbers[5];
    const last4 = 1000 * numbers[6] + 100 * numbers[7] + 10 * numbers[8] + numbers[9];
    const result = `(${area}) ${exchg}-${last4}`;
    return result;
}

function createPhoneNumber(numbers) {
    const area = numbers.slice(0, 3).join('');
    const exchg = numbers.slice(3, 6).join('');
    const last4 = numbers.slice(6, 10).join('');
    const result = `(${area}) ${exchg}-${last4}`;
    return result;
}

module.exports = createPhoneNumber;