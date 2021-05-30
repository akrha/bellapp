'use strict';

const line = require('@line/bot-sdk');
const client = new line.Client({
  channelAccessToken: process.env.LINE_ACCESS_TOKEN
});
const userId = process.env.TARGET_USER_ID;

module.exports.ring = async (event) => {
  const message = {
    type: 'text',
    text: '🔴呼び出されています！'
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
        text: `${success ? '通知' : '失敗'}しました！`
      }
    ),
  };
};
