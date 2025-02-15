// const { create } = require('ipfs-http-client');

// const projectId = process.env.INFURA_PROJECT_ID;
// const projectSecret = process.env.INFURA_SECRET;
// const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

// const ipfs = create({
//   host: 'ipfs.infura.io',
//   port: 5001,
//   protocol: 'https',
//   headers: { authorization: auth },
// });

// exports.uploadToIPFS = async (file) => {
//   const { path } = await ipfs.add(file);
//   return path;
// };



const axios = require('axios');

const PINATA_API_KEY = process.env.PINATA_API_KEY;
const PINATA_SECRET_API_KEY = process.env.PINATA_SECRET_API_KEY;

exports.uploadToIPFS = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await axios.post(
    'https://api.pinata.cloud/pinning/pinFileToIPFS',
    formData,
    {
      headers: {
        'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
        'pinata_api_key': PINATA_API_KEY,
        'pinata_secret_api_key': PINATA_SECRET_API_KEY,
      },
    }
  );

  return response.data.IpfsHash;
};