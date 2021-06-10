const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  // your server-side functionality

  // const proxy = 'https://api.rss2json.com/v1/api.json?rss_url=';
  // // console.log(event);
  // const encoded = encodeURIComponent(event.queryStringParameters.url);
  // const key = `&api_key=${process.env.SECRET_API}`;

  const fetchURL = `https://api-nba-v1.p.rapidapi.com/${event.queryStringParameters.path}`;
  // console.log(fetchURL);
  console.log(process.env.API_KEY);

  const request = await fetch(fetchURL, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": process.env.API_KEY,
      "x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
    }
  });

  // If request failed, we do an early return!
  if (request.status !== 200) {
    alert(
      "Couldn't fetch matches data from the NBA API."
    );
    // throw new Error(request.statusText);
    return {
      statusCode: 404,
      body: JSON.stringify({ message: 'Something went wrong with the request.' }),
    };
  }

  console.log(request);
  // console.log(typeof request);

  const json = await request.json();
  // console.log(json);
  // return json;

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(json),
    // "isBase64Encoded": true|false,
    // "statusCode": httpStatusCode,
    // "headers": { "headerName": "headerValue", ... },
    // "multiValueHeaders": { "headerName": ["headerValue", "headerValue2", ...], ... },
    // "body": "..."
  };
  // return;
};
