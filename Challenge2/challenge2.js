function findMajorityNum(majorityArr) {
	if (!Array.isArray(majorityArr) || majorityArr.length == 0) {
		return null;
	}

	let count;
	for (let i = 0; i <= majorityArr.length / 2; i++) {
		count = 1;
		let currentVal = majorityArr[i];

		let j = i;
		while (j < majorityArr.length) {
			j++;
			if (majorityArr[j] == currentVal) {
				count++;
			}
		}
		if (count > majorityArr.length / 2) {
			return majorityArr[i];
		}
	}
	return null;
}
