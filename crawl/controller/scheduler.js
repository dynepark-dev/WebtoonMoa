const schedule = require("node-schedule");
const NewWebtoon = require("../model/newWebtoon.model.js");
const { updateNaver, checkNaver } = require("./naver");
const { checkKakaopage, updateKakaopage } = require("./kakaopage.js");
const { checkKakao, updateKakao } = require("./kakao.js");

console.log("scheduler running");

const day = 24 * 60 * 60 * 1000;
const interval = "*/20 23,0 * * *";

function showTime(message) {
  const today = new Date();
  const time = `[${
    today.getMonth() + 1
  }/${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}]`;
  console.log(`${time} ${message}`);
}

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
    showTime("upload success!");
  } catch (err) {
    showTime("upload failed!");
    console.log(err);
  }
}

//Naver
schedule.scheduleJob(interval, async () => {
  showTime("Naver crawl starting!");
  const dbData = await NewWebtoon.find({
    platform: "네이버",
    updatedAT: { $gt: new Date(Date.now() - day) },
  });
  const [webtoonsLength] = await checkNaver();
  showTime(`Naver webtoons: ${webtoonsLength}`);

  if (webtoonsLength > dbData.length) {
    const crawled = await updateNaver();
    const everyWebtoon = [...dbData, ...crawled];
    const onlyNew = getUniqueObjectFromArray(everyWebtoon);
    postMongoDB(onlyNew);
    showTime(`Naver uploaded: ${onlyNew.length}`);
  } else {
    showTime(`Naver nothing to upload`);
  }
});

//Kakaopage
schedule.scheduleJob(interval, async () => {
  showTime("Kakaopage crawl starting!");
  const dbData = await NewWebtoon.find({
    platform: "카카오페이지",
    updatedAT: { $gt: new Date(Date.now() - day) },
  });
  const [webtoonsLength] = await checkKakaopage();
  showTime(`Kakaopage webtoons: ${webtoonsLength}`);

  if (webtoonsLength > dbData.length) {
    const crawled = await updateKakaopage();
    const everyWebtoon = [...dbData, ...crawled];
    const onlyNew = getUniqueObjectFromArray(everyWebtoon);
    postMongoDB(onlyNew);
    showTime(`Kakaopage uploaded: ${onlyNew.length}`);
  } else {
    showTime(`Kakaopage nothing to upload`);
  }
});

//Kakao
schedule.scheduleJob(interval, async () => {
  showTime("Kakao crawl starting!");
  const dbData = await NewWebtoon.find({
    platform: "카카오",
    updatedAT: { $gt: new Date(Date.now() - day) },
  });
  const [webtoonsLength] = await checkKakao();
  showTime(`Kakao webtoons: ${webtoonsLength}`);

  if (webtoonsLength > dbData.length) {
    const crawled = await updateKakao();
    const everyWebtoon = [...dbData, ...crawled];
    const onlyNew = getUniqueObjectFromArray(everyWebtoon);
    postMongoDB(onlyNew);
    showTime(`Kakao uploaded: ${onlyNew.length}`);
  } else {
    showTime(`Kakao nothing to upload`);
  }
});

// db cleanup
schedule.scheduleJob("0 4 */3 * *", async () => {
  showTime("Deleting old webtoons");
  threeDays = new Date(new Date() - 3 * day);
  let x = await NewWebtoon.deleteMany({ updatedAt: { $lt: threeDays } });
  console.log(x);
});

// for testing
schedule.scheduleJob("* * * * * *", async () => {
  const message = "current time";
  showTime(message);
});
