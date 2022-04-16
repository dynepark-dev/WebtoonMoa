const schedule = require("node-schedule");
const NewWebtoon = require("./newWebtoon.model.js");
const { UpdateNaver, getUpdatedList } = require("./naver");

console.log("scheduler starting!");

function showTime(message) {
  const today = new Date();
  const time = `[${
    today.getMonth() + 1
  }/${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}]`;
  console.log(`${time} ${message}`);
}

// remove duplicated. by title
function getUniqueObjectFromArray(data) {
  return Array.from(
    data.reduce(
      (map, obj) => map.set(obj.title, map.has(obj.title) ? 0 : obj),
      new Map()
    ),
    ([key, value]) => value
  ).filter((x) => x);
}

async function postMongoDB(data) {
  try {
    await NewWebtoon.insertMany(data);
    console.log("upload success!");
  } catch (err) {
    console.log("upload failed!");
    console.log(err);
  }
}

schedule.scheduleJob("*/10 23,0 * * *", async () => {
  showTime("Naver crawl starting!");
  const dbData = await NewWebtoon.find({ platform: "네이버" });
  const [webtoonsLength] = await getUpdatedList();

  if (webtoonsLength > dbData.length) {
    const crawled = await UpdateNaver();
    const everyWebtoon = [...dbData, ...crawled];
    const onlyNew = getUniqueObjectFromArray(everyWebtoon);
    postMongoDB(onlyNew);
    showTime(`Naver uploaded ${newWebtoon.length}`);
  } else {
    showTime(`Naver nothing to upload`);
  }
});

schedule.scheduleJob("* * * * * *", async () => {
  const message = "current time";
  showTime(message);
});
