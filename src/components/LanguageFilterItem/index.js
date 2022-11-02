import './index.css'
import { Component } from 'react'

const LanguageFilterItem = props => {
    const {isSelected,languageFilter,setSelectedLanguageFilterAndGetRepositories}=props
    const btnClassName = isSelected ? 'language-btn selected-language-btn' : 'language-btn'
    const onClickLanguageFilter = () => {
        setSelectedLanguageFilterAndGetRepositories(languageFilter.id)
    }    

    return (
        <li>
            <button className={btnClassName} onClick={onClickLanguageFilter} type='button'>{languageFilter.language}</button>
        </li>
    )
}
export default LanguageFilterItem