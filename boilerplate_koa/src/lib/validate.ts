import crypto from 'crypto';
import jwt, { Secret } from 'jsonwebtoken';
import { Payload } from '../interface';
export const cryptoPassword = async (password: string) => {
  return await crypto
    .createHmac('sha512', process.env.CRYPTO as string)
    .update(password)
    .digest('hex');
};

export const generateToken = async (payload: Payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.JWT_SECRET as Secret,
      {
        expiresIn: '7d',
      },
      (error, token) => {
        if (error) reject(error);
        resolve(token);
      }
    );
  });
};

export const decodedToken = (token: string) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET as Secret, (error, decoded) => {
      if (error) reject(error);
      resolve(decoded);
    });
  });
};
