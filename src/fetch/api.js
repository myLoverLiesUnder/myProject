import fetch from '../../src/libs/util'

export function getRecommendMusicImgs() {
    return fetch.ajax({
        url: '/recommendMusicImgs',
        method: 'get',
    })
}

export function checkMusic(key) {
    return fetch.ajax({
        url: '/checkMusic?key=' + key,
        method: 'get',
    })
}

export function getClassification() {
    return fetch.ajax({
        url: '/musicClassification',
        method: 'get',
    })
}

export function getPlayList(id) {
    return fetch.ajax({
        url: '/playList/' + id,
        method: 'get',
    })
}

