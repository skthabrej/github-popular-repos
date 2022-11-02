import './index.css'

const RepositoryItem = props => {
    const {repositoryData} = props
    return(
        <li className='repository-card-item-container'>
            <img className='card-item-image' src={repositoryData.imageUrl} alt={repositoryData.name}/>
            <h1 className='card-item-name'>{repositoryData.name}</h1>
            <div className='stats-container'>
                <img src="" alt='' className='stats-icon'/>
                <p className='stats-text' >stars</p>
            </div>
            <div className='stats-container'>
                <img src="" alt='' className='stats-icon'/>
                <p className='stats-text' >stars</p>
            </div>
            <div className='stats-container'>
                <img src="" alt='' className='stats-icon'/>
                <p className='stats-text' >stars</p>
            </div>
        </li>
    )
}
export default RepositoryItem