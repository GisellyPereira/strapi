'use client';
import Strapi from 'strapi-sdk-js';

const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

export default strapi;