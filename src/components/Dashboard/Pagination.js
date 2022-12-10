import { Pagination } from "react-bootstrap";
export default function Pagination_({ currentPage, total, handlePageChange }) {
    const pageChange = (value) => {
        if (currentPage + value > total || currentPage + value < 1) return;
        handlePageChange(currentPage + value);
    };
    //
    if(currentPage > total) handlePageChange(1)
    //console.log({ currentPage, total })
    return (
        <Pagination className="mx-auto">
            <Pagination.Prev onClick={() => pageChange(-1)} />
            <Pagination.Item active={currentPage === 1} onClick={() => handlePageChange(1)}>
                1
            </Pagination.Item>
            {Array.from({ length: total - 2 }, (_, i) => i + 2).map((page) => {
                if ((page >= currentPage - 4 && page <= currentPage + 4) ) {//|| page >= total - 4 || page <= 3
                    return (
                        <Pagination.Item onClick={() => pageChange(page - currentPage)} active={currentPage === page} key={page}>
                            {page}
                        </Pagination.Item>
                    );
                }  else if (page === total - 2 || page === 2) {
                    return <Pagination.Ellipsis key={page} />;
                }  else {
                    return "";
                }
            })}

            {total > 1 && (
                <Pagination.Item active={currentPage === total} onClick={() => handlePageChange(total)}>
                    {total}
                </Pagination.Item>
            )}
            <Pagination.Next onClick={() => pageChange(1)} />
        </Pagination>
    );
}
