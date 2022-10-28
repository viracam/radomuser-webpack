const APPI = process.env.APPI;

const getData = async (id) => {
  const apiURl = id ? `${APPI}${id}` : APPI;
  try {
    const response = await fetch(apiURl);
    const data = await response.json();
    return data.results[0];
  } catch (error) {
    console.log('Fetch Error', error);
  };
};

export default getData;