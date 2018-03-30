import axios from 'axios';
import env from '../config/env';

let util = {

};
util.title = function(title) {
    title = title ? title + ' - Home' : 'iView project';
    window.document.title = title;
};


const ajaxUrl = env === 'development' ?
    'http://localhost:8080' :
    env === 'production' ?
    'https://www.url.com' :
    'https://debug.url.com';

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000
});

// const service = axios.create({
//     baseURL: ajaxUrl, // api的base_url
//     timeout: 15000                  // 请求超时时间
// })

export default util;