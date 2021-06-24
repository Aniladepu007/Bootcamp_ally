const fetchApiData = async (url) => {
  const result = await new Promise(async (resolve) => {
    const data = fetch(url).then((res) => res.json());
    resolve(data);
  });
  return result;
};
