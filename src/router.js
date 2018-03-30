const routers = [

    {
        path: '/findMusic',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/findMusic.vue'], resolve),
        children: [
            {
                path: '/',
                name: 'recommendComponent',
                component: (resolve) => require(['./views/findMusic/recommendMusic.vue'], resolve),
            }
        ]
    },
    {
        path: '/findMusic/classification',
        name: 'classificationComponent',
        component: (resolve) => require(['./views/findMusic/classification.vue'], resolve),
    },
    {
        path: '/findMusic/playList/:id',
        name: 'playListComponent',
        component: (resolve) => require(['./views/findMusic/playList.vue'], resolve),
    },
    {
        path: '/myMusic',
        name: 'myMusicComponent',
        component: (resolve) => require(['./views/myMusic.vue'], resolve),
    },
    {
        path: '/',
        redirect: '/findMusic'
    }
];
export default routers;