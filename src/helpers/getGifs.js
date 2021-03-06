const getGifs = async(category) => {
  const limit = 20;
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=LQlPwzYTwspAUi6ZQksl1x3qrxrOPfWb`;
  const res = await fetch(url);
  const { data } = await res.json();

  return data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  });
};

export default getGifs;