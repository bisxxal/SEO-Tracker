'use server' 
import { Domain } from "../models/domain";
import axios from 'axios';
import { JSDOM } from 'jsdom'; 
import { ConnectDb } from "../Database/ConnectDB";
 


async function getIconUrl(domain) {
    try {
      if (!/^https?:\/\//i.test(domain)) {
        domain = 'https://' + domain;
      }
  
      const response = await axios.get(domain);
      const dom = new JSDOM(response.data);
      const links = dom.window.document.querySelectorAll('link[rel*="icon"]');
  
      let href = '';
      links.forEach(link => {
        if (link.getAttribute('rel').includes('icon')) {
          href = link.getAttribute('href');
        }
      });
  
      if (!href) {
        return null;  
      }
  
      if (href.includes('://')) {
        return href;
      } else if (href.startsWith('/')) {
        return domain.replace(/\/+$/, '') + href;
      } else {
        return domain + '/' + href;
      }
    } catch (error) {
      console.error(`Failed to fetch icon URL from ${domain}:`, error);
      return null;
    }
  }

export const setDomainName = async({domain , owner })=>{
    ConnectDb();

    let icon = null;
    try {
      icon = await getIconUrl(domain);
    } catch(e) {
      console.error('error getting icon', e);
    }

    const newDomain = await Domain.create({
        domain: domain,       
        owner: owner,
        icon ,
    }) 
     
}

export const getDomains = async({owner})=>{
    ConnectDb();
    const domains = await Domain.find({owner: owner});
    return JSON.parse(JSON.stringify(domains))
}
export const deleteDomains = async({owner})=>{
    ConnectDb();
    const domains = await Domain.find({owner: owner});

    if(!domains) return;

    await Domain.deleteOne({owner: owner});

    return JSON.parse(JSON.stringify(domains))
}