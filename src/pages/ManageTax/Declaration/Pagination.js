// import React, { useState } from "react";
// // import "../styles/Paginatiotwo.css";
// const Pagination = ({
//   currentPage,
//   setcurrentPage,
//   pages,
//   setitemsPerPage,
//   itemsPerPage,
// }) => {
//   const [pageNumberLimit, setpageNumberLimit] = useState(10);
//   const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(10);
//   const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
//   const handleNextbtn = () => {
//     setcurrentPage(currentPage + 1);

//     if (currentPage + 1 > maxPageNumberLimit) {
//       setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
//       setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
//     }
//   };

//   const handlePrevbtn = () => {
//     setcurrentPage(currentPage - 1);

//     if ((currentPage - 1) % pageNumberLimit === 0) {
//       setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
//       setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
//     }
//   };

//   let pageIncrementBtn = null;
//   if (pages.length > maxPageNumberLimit) {
//     pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
//   }

//   let pageDecrementBtn = null;
//   if (minPageNumberLimit >= 1) {
//     pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
//   }

//   const handleLoadMore = () => {
//     setitemsPerPage(itemsPerPage + 10);
//   };
//   const handleClick = (event) => {
//     setcurrentPage(Number(event.target.id));
//   };
//   const renderPageNumbers = pages.map((number) => {
//     if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
//       return (
//         <li
//           key={number}
//           id={number}
//           onClick={handleClick}
//           className={currentPage == number ? "active" : null}
//         >
//           {number}
//         </li>
//       );
//     } else {
//       return null;
//     }
//   });
//   return (
//     <div>
//       <ul className="pageNumbers">
//         <li>
//           <button
//             onClick={handlePrevbtn}
//             disabled={currentPage === pages[0] ? true : false}
//           >
//             Prev
//           </button>
//         </li>
//         {pageDecrementBtn}
//         {renderPageNumbers}
//         {pageIncrementBtn}

//         <li>
//           <button
//             onClick={handleNextbtn}
//             disabled={currentPage === pages[pages.length - 1] ? true : false}
//           >
//             Next
//           </button>
//         </li>
//       </ul>
//       <button onClick={handleLoadMore} className="loadmore">
//         Load More
//       </button>
//     </div>
//   );
// };

// export default Pagination;
