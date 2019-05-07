'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World',
    }, null, 2),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.add = async (event) => {
  const a = event.a || 0;
  const b = event.b || 0;
  const sum = a + b;
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `${a} + ${b} = ${sum}`,
    }, null, 2),
  }; 
}
