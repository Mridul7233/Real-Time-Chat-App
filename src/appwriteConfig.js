import { Client, Account, Databases } from 'appwrite';


//export const API_ENDPOINT = 'https://cloud.appwrite.io/v1'
export const PROJECT_ID = '674db8a00010734a82fc'
export const DATABASE_ID = '674dba17000c92a5fa78'
export const COLLECTION_ID_MESSAGES = '674dba45003741377645'

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') 
    .setProject('674db8a00010734a82fc');

export const account = new Account(client);
export const databases = new Databases(client)

export default client;