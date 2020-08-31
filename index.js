const testVar = {};

function testFunc() {
  return "hi";
}

superbowlWin = (records) => {
  let result = records.find((record) => record.result === "W");
  return !!result ? result.year : undefined;
};
