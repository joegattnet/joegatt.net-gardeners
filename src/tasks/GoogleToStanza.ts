// https://slack.dev/node-slack-sdk/web-api

import fs from 'fs';
import path from 'path';
const googleDocsAuthorize = require('../components/googleDocsAuthorize'); // CHANGE TO IMPORT!!!
const googleToStanza = require('../components/googleToStanza');
const CREDENTIALS_PATH = path.resolve(__dirname, '../../googledocs.credentials.json');

export {};

module.exports = (googleDocsId: string) => {
  console.log('Running GoogleToStanza......');
  fs.readFile(CREDENTIALS_PATH, (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    googleDocsAuthorize(JSON.parse(content.toString()), googleToStanza, { googleDocsId, collate: true });
  });
}
