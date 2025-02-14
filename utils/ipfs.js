const { create } = require('ipfs-http-client');

const projectId = process.env.INFURA_PROJECT_ID;
const projectSecret = process.env.INFURA_SECRET;
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const ipfs = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: { authorization: auth },
});

exports.uploadToIPFS = async (file) => {
  const { path } = await ipfs.add(file);
  return path;
};