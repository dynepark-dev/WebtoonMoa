const cheerio = require("cheerio");
const axios = require("axios");
const NaverURL = "https://comic.naver.com/webtoon/weekday";

const getHTML = async (url) => {
  try {
    return await axios.get(url);
  } catch (error) {
    console.log(error);
  }
};

const checkNaver = async () => {
  const html = await getHTML(NaverURL);
  const $ = cheerio.load(html.data);
  const $webtoonList = $(".ico_updt");
  const webtoonsLength = $webtoonList.length;
  console.log(`Updated Naver webtoons: ${webtoonsLength}`);
  return [webtoonsLength, $, $webtoonList];
};

const getPrimaryData = async () => {
  const [webtoonsLength, $, $webtoonList] = await checkNaver();
  const webtoons = [];
  $webtoonList.each((index, node) => {
    const title = $(node).siblings("img").attr("title");
    const image = $(node).siblings("img").attr("src");
    const link = $(node).parent("a").attr("href");
    if (title && image && link) {
      webtoons.push({ title, image, link: `https://comic.naver.com${link}` });
    } else {
      console.log(`Naver webtoon updated failed: ${index}`);
    }
  });
  return webtoons;
};

const getLatestData = async (url) => {
  const html = await getHTML(`https://comic.naver.com${url}`);
  $ = cheerio.load(html.data);
  const $newEpisode = $(".title:eq(1)");
  const episodeTitle = $newEpisode.children("a").text();
  const episodeLink = $newEpisode.children("a").attr("href");
  return [episodeTitle, episodeLink];
};

const updateNaver = async () => {
  const webtoons = await getPrimaryData();
  for (const [index, element] of webtoons.entries()) {
    const [episodeTitle, episodeLink] = await getLatestData(element.link);
    webtoons[index].episodeTitle = episodeTitle;
    webtoons[index].episodeLink = `https://comic.naver.com${episodeLink}`;
    webtoons[index].platform = "네이버";
  }
  return webtoons;
};

module.exports = { checkNaver, updateNaver };
