import ReactPaginate from 'react-paginate';

import React from 'react';

const List = () => {
  return (
    <div>
      <ReactPaginate>
        <div>
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          {/* FIXME: add a pageCount prop */}
          pageCount={this.props.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={4}
          {/* FIXME: add a onPageChange  */}
          onPageChange={this.props.handlePageClick}
          containerClassName={'pagination'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-link'}
          nextClassName={'page-link'}
          activeClassName={'page-item active'}
        </div>
      </ReactPaginate>
    </div>
  );
};

export default List;
