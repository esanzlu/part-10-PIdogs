import React from 'react'
import {useState} from 'react';


function Paginado() {
  return (
    <nav>
            <div className={s.paginado}>
                {/* <span className={s.page_number}><a onClick={ () => paginado(1)}>{'<<'}</a></span>
                <span className={s.page_number}><a onClick={ () => prevPage(currentPage)}>{'<'}</a></span>
                {pageNumbers &&pageNumbers.map( page =>
                    <span className={page!==currentPage? s.page_number : s.page_number_current} key={page}><a onClick={ () => paginado(page)}>{page}</a></span>
                )}
                <span className={s.page_number}><a onClick={ () => nextPage(currentPage)}>{'>'}</a></span>
                <span className={s.page_number}><a onClick={ () => paginado(pageQnty)}>{'>>'}</a></span> */}
            </div>  
        </nav>
  )
}

export default Paginado