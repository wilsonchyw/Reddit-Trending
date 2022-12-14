import parseParams from 'src/lib/parseParams';

export function getQueryOneString(params) {
    return `{
        thread{
            one(${parseParams(params)}) {
                id
                title
                forum
                updated
                vote
                comment
            }
        }
    }`;
}
export function getQueryAllString(params) {
    return `{
        state {
          all(${parseParams(params)}) {
            id
            title
            forum
            updated
            vote
            comment
          }
          vote(${parseParams(params)}) {
            id
            title
            change
            forum
            MAX
            MIN
          }
          comment(${parseParams(params)}) {
            id
            title
            forum
            change
            MAX
            MIN
          }
          distribution(${parseParams(params)})
        }
        count {
          thread
          threadState
          latest
          forum
        }
      }`;
}
