'use server'
import axios from "axios";
// import * as cheerio from "cheerio";

// export async function doGoogleSearch(keyword) {

//   const url = `https://www.google.com/search?q=${keyword}&brd_json=1`;
//   const username = String(process.env.BRIGHT_DATA_USERNAME);
//   const password = String(process.env.BRIGHT_DATA_PASSWORD);
//   const port = 22225;
//   const session_id = (1000000 * Math.random()) | 0;

//   const options = {
//     auth: {
//       username: `${username}-session-${session_id}`,
//       password,
//     },
//     host: "brd.superproxy.io",
//     port,
//     rejectUnauthorized: false,
//   };

//   try {
//     // Fetch the product page
//     const response = await axios.get(url, options);
//     const $ = cheerio.load(response.data);

//     // Extract the product title
//     const title = $("organic").text().trim();

//     console.log("Title:", { title });
//     // console.log("Response:", response.data);
    
    
//   } catch (error) {
//     console.log("error at ranking function ", error);
//   }
// }
export async function doGoogleSearch(keyword) {
  const data = { country: "us", query: { q: keyword, num: 100 }, num: 100 };
  const url =
    "https://api.brightdata.com/serp/req?customer=hl_de49e54c&zone=seotracker";
  const headers = {
    Authorization: "Bearer c99df2f9-c05c-4e7c-988e-2ea03ee73b18",
  };
  try {
    const response = await axios.post(url, data, { headers });

    if (!response?.headers) {
      console.error("no header in response " + url);
      console.error(data);
      return null;
    } else {
      console.log("responseId in ranking function :" + response?.headers.get("x-response-id"));
      return response?.headers.get("x-response-id");

    }
  } catch (error) {
    console.log("error", error);
  }
} 
