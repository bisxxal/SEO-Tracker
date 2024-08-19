// import axios from "axios"; 
// import {URL} from 'url';
// import { ConnectDb } from "@/lib/Database/ConnectDB";
// import { Result } from "@/lib/models/Results"; 
// import * as cheerio from 'cheerio';
// export async function POST(req) {
//   ConnectDb()
  
//   const data = await req.json();
//   console.log('Request:', data);
//   const response_id = data.response_id; 
//   const url = `https://api.brightdata.com/serp/get_result?customer=hl_de49e54c&zone=seotracker&response_id=${response_id}&brd_json=json` ;
//   const headers = {'Authorization': 'Bearer c99df2f9-c05c-4e7c-988e-2ea03ee73b18'};

//   console.log('Fetching result for:'+response_id);
 
//   const response = await axios.get(url  , {headers});
//   // console.log('Response:', response?.data); 

//   const $ = cheerio.load(response.data);

//   const title = $('organic').text().trim()
//   console.log('Title:', {title});
  
 
//   const ourResultDoc = await Result.findOne({
//     brightDataResponseId: response_id,
//   });


//   if (ourResultDoc) { 
//     const domain = ourResultDoc.domain;
//     const keyword = ourResultDoc.keyword;
 
//     const rank = response?.data?.organic
//     ?.find(result => result.link.includes(domain))?.rank;


//     const organicResults = response.data.organic || [];
//     console.log('Organic Results:', organicResults);

//     // const result = organicResults.find(result => result.link.includes(domain));
//     // const rank = result?.rank;

//     ourResultDoc.complete = true;
//     console.log('Rank:', rank);
    
//     if (rank) {
//       ourResultDoc.rank = rank;
//       console.log(`Rank ${rank} saved for keyword ${keyword} and domain ${domain}`);
//     }
//     await ourResultDoc.save();
//   } else {
//     console.log('our result NOT found');
//   }
  
//   return Response.json(true); 
// }

// export async function GET(req) {
//   ConnectDb();
//   const url = new URL(req.url);
//   const id = url.searchParams.get('id');
//   const domain = url.searchParams.get('domain');
//   const keyword = url.searchParams.get('keyword');
//   if (id) {
//     return Response.json(
//       await Result.findOne({brightDataResponseId:id})
//     );
//   }
//   if (domain && keyword) {
//     return Response.json(
//       await Result.find({domain,keyword})
//     );
//   }
// }