import Mock from 'mockjs';
import api from 'config/api';
//api.ftpBaseUrl='';

Mock.setup({
    timeout:500
});

let mockList=[];
mockList=mockList.concat(require('./teaching'));
mockList=mockList.concat(require('./flow'));
mockList=mockList.concat(require('./news'));
mockList=mockList.concat(require('./system'));
mockList=mockList.concat(require('./home'));
mockList=mockList.concat(require('./profile'));
mockList=mockList.concat(require('./common'));
mockList=mockList.concat(require('./login'));
mockList=mockList.concat(require('./feedback'));

let mockData={};

mockList.forEach((obj) => {
    mockData[obj.url]=obj.result;
});

function mockServer(url){
    if(mockData[url]) {
        Mock.mock(api.baseUrl + url, mockData[url]);
    }
}

module.exports=mockServer;