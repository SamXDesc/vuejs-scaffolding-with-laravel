export default [
    {
        path: '',
        redirect: 'panel/dashboard'
    },

    {
        path: '/auth',
        component: () => import('../layouts/Auth.vue'),
        redirect: 'auth/login',
        children: [
            {
                path: 'login',
                component: () => import('../pages/auth/Login.vue')
            },

            {
                path: 'signup',
                component: () => import('../pages/auth/SignUp.vue')
            }
        ]
    },

    {
        path: '/panel',
        component: () => import('../layouts/Panel.vue'),
        redirect: 'panel/dashboard',
        children: [
            {
                path: 'dashboard',
                component: () => import('../pages/panel/dashboard/Index.vue')
            },

            {
                path: 'users',
                component: () => import('../pages/panel/users/Index.vue'),
                children: [
                    {
                        path: '',
                        component: () => import('../pages/panel/users/List.vue')
                    },

                    {
                        path: '{userId}',
                        component: () => import('../pages/panel/users/List.vue')
                    },
                ]
            }
        ]
    }
]
