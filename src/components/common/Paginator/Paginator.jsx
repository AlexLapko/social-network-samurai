import React, {useState} from 'react'
import classes from './Paginator.module.css'
import cn from 'classnames'

let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 12 }) => {

  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={classes.paginatorWrap}>
      <div className={classes.Paginator}>
        {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}

        <div>
          {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
              return (
                <span className={cn({[classes.selectedPage] : currentPage === p}, classes.pageNumber)} onClick={e => {onPageChanged(p);}}>
                  {p}
                </span>
              );
            })}
        </div>

        {portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
      </div>
    </div>
  );
};
      
export default Paginator;