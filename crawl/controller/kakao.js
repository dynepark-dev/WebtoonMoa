const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

const KakaoUrl = "https://webtoon.kakao.com/original-webtoon?tab=mon";
const baseUrl = "https://webtoon.kakao.com";

const checkKakao = async () => {
  const target = `//p[normalize-space()='UP']/ancestor::a[".w-full h-full relative"]`;
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(KakaoUrl);
  await page.setViewport({
    width: 1200,
    height: 30000,
  });
  await page.waitForTimeout(3000);

  const webtoonList = await page.$x(target);
  const webtoonsLength = webtoonList.length;
  return [webtoonsLength, webtoonList, browser];
};

const updateKakao = async () => {
  const [webtoonsLength, webtoonList, browser] = await checkKakao();
  const webtoons = [];

  for (webtoon of webtoonList) {
    const title = await webtoon.evaluate((el) =>
      el.querySelector("img.my-0").getAttribute("alt")
    );
    const image = await webtoon.evaluate((el) =>
      el.querySelector("picture :nth-child(1)").getAttribute("srcset")
    );
    const link = await webtoon.evaluate((el) => el.getAttribute("href"));

    if (title && image && link) {
      webtoons.push({
        title,
        image,
        link: `${baseUrl}${link}`,
        platform: "카카오",
      });
    } else {
      console.log(`Kakao update failed. Title : ${title}`);
    }
  }
  browser.close();
  return webtoons;
};

module.exports = { checkKakao, updateKakao };
