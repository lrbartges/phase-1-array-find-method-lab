const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
];

function superbowlWin(records) {
    const winYear = records.find(game => game.result === "W");
    if (winYear) { return winYear.year; }
    else { return undefined; }
}

console.log(superbowlWin(record));
