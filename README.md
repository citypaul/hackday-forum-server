brew update
brew install mongodb
brew services start mongodb
mongo 


[
    topics: [
        {
            name: 'football-data',
            comment: 'We are interested in your ideas for our football data refresh',
            threads: [
                {
                    message:'Build feature x',
                    votes: {
                        up: 50,
                        down: 37
                    },
                    createdAt: '',
                    lastModified: '',
                    comments: [
                        {
                            comment: 'asdasd',
                            votes: {
                                up:40,
                                down:36
                            }
                        }
                    ]
                },
                {
                    message:'Build feature yy',
                    votes: {
                        up: 10,
                        down: 37
                    },
                    createdAt: '',
                    lastModified: '',
                    comments: [
                        {
                            comment: 'another comment',
                            votes: {
                                up:20,
                                down:316
                            }
                        }
                    ]
                },
            ]
        }
    ]
]