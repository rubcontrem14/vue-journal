
export default () => ({
    isLoading: true,
    entries:[
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores modi, reprehenderit provident a nostrum quis dignissimos tempora iste cum qui quas beatae ducimus, quos doloribus! Vero quo numquam fuga commodi?',
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Maiores modi, reprehenderit provident a nostrum quis dignissimos tempora iste cum qui quas beatae ducimus, quos doloribus! Vero quo numquam fuga commodi?',
            picture: null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Reprehenderit modi, reprehenderit provident a nostrum quis dignissimos tempora iste cum qui quas beatae ducimus, quos reprehenderit! Vero quo numquam fuga commodi?',
            picture: null
        },
    ]
})

