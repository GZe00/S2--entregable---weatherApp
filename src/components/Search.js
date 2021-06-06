import React from 'react';
import '../assets/styles/components/Search.css'

const Search = ({onChange, value, onClickS, onClickR}) => {


    return (
        <div className = 'search-box'>
            <input type = 'text' onChange = {onChange} value = {value} className = 'search-input' placeholder = '  Buscar ciudad... '/>
            <button onClick = {onClickS} className = 'search-box-ico-search'>🔍️</button>
            <button onClick = {onClickR} className = 'search-box-ico-clean'>❌</button>
        </div>
    )
}

export default Search
