import request from 'superagent';

export const getColorCode = () => {
  return new Promise((resolve, reject) => {
    console.log("new promise");
    request.get('http://api.noopschallenge.com/hexbot')
    .set('Access-Control-Allow-Origin','http://localhost:3000','Access-Control-Allow-Credentials','true')
    .end(function(err,res) {
      if(res.status === 200) {
        console.log(res.body);
        return resolve(res.body);
      }
      throw console.error("Unable to connect "+ err.status);
    });
  });
}
