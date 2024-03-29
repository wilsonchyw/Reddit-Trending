import { Pagination } from 'react-bootstrap';
import useAgent from 'src/lib/useAgent';
import { useDispatch, useSelector } from 'react-redux';
import { setForumData, setHeat, setLastestComment, setLastestVote, setTrendsData } from 'src/store/rawDataSlice';
import { setPage } from 'src/store/settingSlice';
import { RootState } from 'src/store';

export default function Pagination_({ /*  currentPage, */ total /* , handlePageChange  */ }) {
    const isMobile: Boolean = useAgent();
    const dispatch = useDispatch();
    const { currentPage } = useSelector((state: RootState) => state.setting);
    console.log({ currentPage } )

    const pageChange = value => {
        if (currentPage + value > total || currentPage + value < 1) return;
        dispatch(setPage(currentPage + value));
    };
    if (currentPage > total) dispatch(setPage(1));

    const COUNT = isMobile ? 2 : 4;

    return (
        <Pagination className="mx-auto" size={'sm'}>
            <Pagination.Prev onClick={() => pageChange(-1)} />
            <Pagination.Item active={currentPage === 1} onClick={() => dispatch(setPage(1))}>
                1
            </Pagination.Item>
            {Array.from({ length: total - 2 }, (_, i) => i + 2).map(page => {
                if (page >= currentPage - COUNT && page <= currentPage + COUNT) {
                    return (
                        <Pagination.Item onClick={() => pageChange(page - currentPage)} active={currentPage === page} key={page}>
                            {page}
                        </Pagination.Item>
                    );
                } else if (page === total - 2 || page === 2) {
                    return <Pagination.Ellipsis key={page} />;
                } else {
                    return '';
                }
            })}

            {total > 1 && (
                <Pagination.Item active={currentPage === total} onClick={() => dispatch(setPage(total))}>
                    {total}
                </Pagination.Item>
            )}
            <Pagination.Next onClick={() => pageChange(1)} />
        </Pagination>
    );

    /* const pageChange = value => {
        if (currentPage + value > total || currentPage + value < 1) return;
        handlePageChange(currentPage + value);
    };
    if (currentPage > total) handlePageChange(1);

    const COUNT = isMobile ? 2 : 4;

    return (
        <Pagination className="mx-auto" size={'sm'}>
            <Pagination.Prev onClick={() => pageChange(-1)} />
            <Pagination.Item active={currentPage === 1} onClick={() => handlePageChange(1)}>
                1
            </Pagination.Item>
            {Array.from({ length: total - 2 }, (_, i) => i + 2).map(page => {
                if (page >= currentPage - COUNT && page <= currentPage + COUNT) {
                    return (
                        <Pagination.Item onClick={() => pageChange(page - currentPage)} active={currentPage === page} key={page}>
                            {page}
                        </Pagination.Item>
                    );
                } else if (page === total - 2 || page === 2) {
                    return <Pagination.Ellipsis key={page} />;
                } else {
                    return '';
                }
            })}

            {total > 1 && (
                <Pagination.Item active={currentPage === total} onClick={() => handlePageChange(total)}>
                    {total}
                </Pagination.Item>
            )}
            <Pagination.Next onClick={() => pageChange(1)} />
        </Pagination>
    ); */
}
