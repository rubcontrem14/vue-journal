export default {
    name: 'daybook',
    path: '/daybook',
    component: () => import(/* webpackChunkName: "dayBook" */ '@/modules/daybook/layouts/DayBookLayout'),
    children:[
        {
            path: '',
            name: 'no-entry',
            component: ()=>import(/* webpackChunkName: "dayBook no-entry" */ '@/modules/daybook/views/NoEntrySelected')
        },
        {
            path: ':id',
            name: 'entry',
            component: ()=>import(/* webpackChunkName: "dayBook no-entry" */ '@/modules/daybook/views/EntryView')
        },
    ]
}