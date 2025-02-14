// import { ethers } from 'ethers';
// import AdManagerABI from '../abis/AdManager.json';
// import ContentManagerABI from '../abis/ContentManager.json';

// const provider = new ethers.providers.JsonRpcProvider(process.env.MUMBAI_RPC_URL);
// const adManager = new ethers.Contract(
//   process.env.AD_MANAGER_ADDRESS,
//   AdManagerABI,
//   provider
// );
// const contentManager = new ethers.Contract(
//   process.env.CONTENT_MANAGER_ADDRESS,
//   ContentManagerABI,
//   provider
// );

// export const getAdCampaigns = async () => {
//   return adManager.getAllCampaigns();
// };

// export const getContentPosts = async () => {
//   return contentManager.getAllPosts();
// };
const { ethers } = require('ethers');
const AdManagerABI = require('../abis/AdManager.json');
const ContentManagerABI = require('../abis/ContentManager.json');

const provider = new ethers.providers.JsonRpcProvider(process.env.MUMBAI_RPC_URL);
const adManager = new ethers.Contract(
  process.env.AD_MANAGER_ADDRESS,
  AdManagerABI,
  provider
);
const contentManager = new ethers.Contract(
  process.env.CONTENT_MANAGER_ADDRESS,
  ContentManagerABI,
  provider
);

const getAdCampaigns = async () => {
  return adManager.getAllCampaigns();
};

const getContentPosts = async () => {
  return contentManager.getAllPosts();
};

module.exports = {
  getAdCampaigns,
  getContentPosts
};