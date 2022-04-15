const x = [
  { name: "name1", publisher: "Naver", a: "x" },
  { name: "name1", publisher: "Naver", a: "x" },
  { name: "name1", publisher: "Naver", a: "y" },
  { name: "name1", publisher: "Naver" },
  { name: "name1", publisher: "Kakao" },
  { name: "name2", publisher: "Kakao" },
  { name: "name2", publisher: "Kakao" },
  { name: "name3", publisher: "Kakao" },
  { name: "name3", publisher: "toon" },
  { name: "name3222", publisher: "x" },
];

const uniqX = [
  ...x.reduce((map, obj) => map.set(obj.name, obj), new Map()).values(),
];

// console.log(uniqX);

function getUniquesOnly(data) {
  return Array.from(
    data.reduce(
      (map, obj) => map.set(obj.name, map.has(obj.name) ? 0 : obj),
      new Map()
    ),
    ([k, v]) => v
  ).filter((x) => x);
}

const unique = getUniquesOnly(x);

console.log(unique);
