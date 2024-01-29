export const exerciseOptions =  {
    method: 'GET',
    params: {limit: '10'},
    headers: {
      'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY ,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0051bf512emsh3386474eb9bd05ep1c7becjsn1841d7b7c825',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url , options) => {
    const response = await fetch(url , options);
    const data =  await response.json();

    return data;
}


