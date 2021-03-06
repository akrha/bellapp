'use strict';

const line = require('@line/bot-sdk');
const client = new line.Client({
  channelAccessToken: process.env.LINE_ACCESS_TOKEN
});
const userId = process.env.TARGET_USER_ID;

module.exports.ring = async (event) => {
  const message = {
    type: 'text',
    text: 'π΄εΌγ³εΊγγγ¦γγΎγοΌ'
  };

  let success = true;
  await client.pushMessage(userId, message)
    .catch((e) => {
      success = false;
      console.log(e);
    });
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        text: `${success ? 'ιη₯' : 'ε€±ζ'}γγΎγγοΌ`
      }
    ),
  };
};
