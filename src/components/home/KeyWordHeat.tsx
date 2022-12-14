import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tree from 'src/components/chart/Tree';
import { RootState } from 'src/store';
import { setSearch } from 'src/store/settingSlice';

export default function KeyWordHeat({ showForums }) {
    const dispatch = useDispatch();
    const { trends, forums, lastestVote, lastestComment, symbolHeat } = useSelector((state:RootState) => state.raw);
    const heatmapData = useMemo(
        () =>
            symbolHeat.map(record => {
                let total = 0;
                for (const forum in record.forum) {
                    if (showForums[forum]) total += record.forum[forum];
                }
                return { x: record.id, y: total };
            }),
        [symbolHeat, showForums]
    );
    return <Tree title={'Keywords'} subTitle={'Heat map'} data={heatmapData} setSearchTarget={s => dispatch(setSearch(s))} />;
}
