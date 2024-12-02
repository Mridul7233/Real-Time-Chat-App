import { Client, Databases, Account } from 'appwrite';

export const PROJECT_ID = '674c20e6001be1f7237b'
export const DATABASE_ID = '674c21df000b3ae903bf'
export const COLLECTION_ID_MESSAGES = '674c21eb0031b8a307e7'

const client = new Client();
client.setEndpoint('https://cloud.appwrite.io/v1')
client.setProject('674c20e6001be1f7237b');

export const databases = new Databases(client);
export const account = new Account(client);

export default client;