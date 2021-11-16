import React from "react";
import styles from "./Paginator.module.css";

export type PaginatorPropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void
}

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}: PaginatorPropsType) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        {pages.map(p => {
            return <span className={currentPage === p && styles.selectedPage || undefined}
                /*? styles.selectedPage : styles.unselectedPage}*/
                         onClick={() => {
                             onPageChanged(p)
                         }}> {p}</span>
        })}
    </div>

}
export default Paginator