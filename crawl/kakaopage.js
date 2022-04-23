const puppeteer = require("puppeteer-extra");

const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

const checkKakaopage = async () => {
  const KakaopageURL =
    "https://page.kakao.com/main?categoryUid=10&subCategoryUid=1002";
  const btn =
    "#root > div.jsx-3157985592.mainContents.mainContents_pc > div.css-1sna24c > div.css-l0s1jq > ul > li:nth-child(3) > div";
  const target = `//img[@alt="업데이트"]/ancestor::a`;

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(KakaopageURL);
  await page.waitForSelector(btn);
  await page.click(btn);

  await page.waitForTimeout(3000);

  const webtoonList = await page.$x(target);
  const webtoonsLength = webtoonList.length;
  return [webtoonsLength, webtoonList, browser];
};

const updateKakaopage = async () => {
  const [webtoonsLength, webtoonList, browser] = await checkKakaopage();
  const webtoons = [];

  // console.log(webtoonsLength);
  for (webtoon of webtoonList) {
    const title = await webtoon.evaluate((el) =>
      el.querySelector(".css-1ms9218").getAttribute("alt")
    );
    const image = await webtoon.evaluate((el) =>
      el.querySelector(".css-1ms9218").getAttribute("src")
    );
    const link = await webtoon.evaluate((el) => el.getAttribute("href"));

    if (title && image && link) {
      webtoons.push({
        title,
        image,
        link: `https://page.kakao.com${link}`,
        platform: "카카오페이지",
      });
    } else {
      console.log(`Kakao webtoon updated failed!`);
    }
  }
  browser.close();
  return webtoons;
};

module.exports = { checkKakaopage, updateKakaopage };
