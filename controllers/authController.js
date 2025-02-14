// import { SiweMessage } from 'siwe';
// import { generateNonce } from '../utils/auth';

// export const getNonce = (req, res) => {
//   req.session.nonce = generateNonce();
//   res.json({ nonce: req.session.nonce });
// };

// export const verifySignature = async (req, res) => {
//   try {
//     const { message, signature } = req.body;
//     const siweMessage = new SiweMessage(message);
//     const fields = await siweMessage.validate(signature);

//     if (fields.nonce !== req.session.nonce) {
//       return res.status(422).json({ message: 'Invalid nonce' });
//     }

//     req.session.siwe = fields;
//     res.json({ success: true, address: fields.address });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };



const { SiweMessage } = require('siwe');
const { generateNonce } = require('../utils/auth');

exports.getNonce = (req, res) => {
  req.session.nonce = generateNonce();
  res.json({ nonce: req.session.nonce });
};

exports.verifySignature = async (req, res) => {
  try {
    const { message, signature } = req.body;
    const siweMessage = new SiweMessage(message);
    const fields = await siweMessage.validate(signature);

    if (fields.nonce !== req.session.nonce) {
      return res.status(422).json({ message: 'Invalid nonce' });
    }

    req.session.siwe = fields;
    res.json({ success: true, address: fields.address });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};