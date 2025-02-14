const { getAdCampaigns } = require('../utils/web3');

exports.getAllCampaigns = async (req, res) => {
  try {
    const campaigns = await getAdCampaigns();
    res.json(campaigns);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};