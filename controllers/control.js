let result = {
    'statusCode': 200,
    'data' : {}
};

exports.vOneFn = function(req, res) {
    let str = req.body.data;
   // console.log(req.body);
    const regex = /([a-zA-Z]+[0]{4})([A-Z]+[0]{3})([0-9]+)/gm;
    var matches;
    
    if((matches = regex.exec(str)) !== null) {
        matches.shift();
        result['data'] = {
            'firstName':matches[0],
            'lastName':matches[1],
            'clientId':matches[2],
        }
        res.send(result);
    }
    
}

exports.vTwoFn = function(req, res) {
    let str = req.body.data;
   // console.log(req.body);
    const regex = /([a-zA-Z]+)(?:[0]{4})([A-Z]+)(?:[0]{3})([0-9]+)/gm;
    var matches;
    
    if((matches = regex.exec(str)) !== null) {
        matches.shift();
        result['data'] = {
            'firstName':matches[0],
            'lastName':matches[1],
            'clientId':formatClientId(matches[2]),
        }
        res.send(result);
    }
}

function formatClientId(value) {
    let strData = value.split('');
    strData.splice(3,0,'-');
    let result = strData.join('');

    return result;

}