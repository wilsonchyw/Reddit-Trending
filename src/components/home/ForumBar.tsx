import Bar from 'src/components/chart/Bar';

import { State } from 'src/pages';

export default function Forumbar({ datas }: { datas: State[] }) {
    let map = {};
    datas.forEach((data: State) => {
        if (!map[data.forum]) map[data.forum] = 0;
        map[data.forum]++;
    });
    map = Object.fromEntries(Object.entries(map).sort(([, a]: [string, number], [, b]: [string, number]) => b - a));

    const _data = {
        labels: Object.keys(map),
        data: Object.values(map)
    };

    return <Bar data={_data} title={'SubReddit'} subTitle={'24hr'} color={'#00E396'} />;
}
