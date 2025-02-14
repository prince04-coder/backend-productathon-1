require('dotenv').config();

module.exports = {
  MUMBAI_RPC_URL: process.env.MUMBAI_RPC_URL,
  AD_MANAGER_ADDRESS: process.env.AD_MANAGER_ADDRESS,
  CONTENT_MANAGER_ADDRESS: process.env.CONTENT_MANAGER_ADDRESS,
  SESSION_SECRET: process.env.SESSION_SECRET,
  FRONTEND_URL: process.env.FRONTEND_URL,
};