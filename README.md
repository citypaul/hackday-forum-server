brew update

brew install mongodb

brew services start mongodb

mongo 


setup:

From the root directory, do:
`nvm use`

If you don't have node 7.2.1 installed, you may need to do `nvm install 7.2.1` first.

Then run `npm install`.

Once you've got mongo installed and running locally, run `node setup-db.js`.

To see if it's working, then run `node index.js` and go to localhost:8000/topic/football-data

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