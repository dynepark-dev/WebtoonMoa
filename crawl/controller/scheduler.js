const schedule = require("node-schedule");
const NewWebtoon = require("../newWebtoon.model.js");
const { updateNaver, checkNaver } = require("./naver");
const { checkKakaopage, updateKakaopage } = require("./kakaopage.js");
const { checkKakao, updateKakao } = require("./kakao.js");

console.log("scheduler starting!");

const day = 24 * 60 * 60 * 1000;

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

//Naver
schedule.scheduleJob("*/10 23,0 * * *", async () => {
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
schedule.scheduleJob("*/10 23,0 * * *", async () => {
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
schedule.scheduleJob("*/10 23,0 * * *", async () => {
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

// delete three days doc
schedule.scheduleJob("0 4 */3 * *", async () => {
  showTime("Deleting outDated");
  threeDays = new Date(new Date() - 3 * day);
  let x = await NewWebtoon.deleteMany({ updatedAt: { $lt: threeDays } });
  console.log(x);
});

schedule.scheduleJob("* * * * * *", async () => {
  const message = "current time";
  showTime(message);
});
