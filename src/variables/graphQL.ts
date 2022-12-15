import parseParams from 'src/lib/parseParams';
export enum GraphQuery {
    fetchAll = `query fetchAll($limit:Int, $minVote:Int, $minComment:Int, $dateRange:Int ) {
                    state {
                        all(limit: $limit, minVote: 100, minComment: 100, dateRange: $dateRange) {
                            id
                            title
                            forum
                            updated
                            vote
                            comment
                        }
                        vote(limit: $limit, minVote: $minVote, minComment: $minComment, dateRange: $dateRange) {
                            id
                            title
                            change
                            forum
                            MAX
                            MIN
                        }
                        comment(limit: $limit, minVote: $minVote, minComment: $minComment, dateRange: $dateRange) {
                            id
                            title
                            forum
                            change
                            MAX
                            MIN
                        }
                        distribution(limit: $limit, minVote: $minVote, minComment: $minComment, dateRange: $dateRange)
                    }
                    count {
                        thread
                        threadState
                        latest
                        forum
                    }
                }`,
    fetchOne = `query fetchOne($limit: Int, $id: ID!) {
					thread {
						one(limit: $limit, id: $id) {
							id
							title
							forum
							updated
							vote
							comment
						}
					}
				}`
}
