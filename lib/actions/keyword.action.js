'use server'

import { ConnectDb } from "../Database/ConnectDB";
import { Domain } from "../models/domain";
import { Keyword } from "../models/keyword";
import { Result } from "../models/Results";
import { doGoogleSearch } from "../rankingFunction";

export const setKeyWord = async({keyword , owner , domain })=>{
    ConnectDb();

    const newKeyWord = await Keyword.create({
        domain ,       
        owner ,
       keyword,
    })  

 const res = await Result.create({ 

    domain ,
    keyword, 
    
  })

    return JSON.parse(JSON.stringify( {brightDataResponseId : res.brightDataResponseId}))
}

export const getKeyWord = async({owner , domain})=>{
    ConnectDb();
    const Keywd = await Keyword.find({owner: owner , domain});
    if(!Keywd) return;
    const results = await Result.find({ domain ,keyword: Keywd.map(k=>k.keyword) });

    // console.log(' result data is ',results);
    
    return JSON.parse(JSON.stringify({Keywd , results}));
}

export const deleteKeyword = async({owner , domain , keyword})=>{
    ConnectDb();
    const keywors = await Keyword.find({owner: owner});
    if(!keywors) return;
    await Keyword.deleteOne({owner: owner , domain , keyword: keyword});
    return ;
}

export const getResults = async({owner , domain})=>{ 
    ConnectDb();
    const results = await Result.find({owner: owner , domain , });
    if(!results) return;
    return JSON.parse(JSON.stringify(results));
}

 