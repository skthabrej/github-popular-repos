import './index.css'

const RepositoryItem = props => {
    const {repositoryData} = props
    return(
        <li className='repository-card-item-container'>
            <img className='card-item-image' src={repositoryData.imageUrl} alt={repositoryData.name}/>
            <h1 className='card-item-name'>{repositoryData.name}</h1>
            <div className='stats-container'>
                <img src="https://i.postimg.cc/hjjMdkQR/icons-ge6846ec9b-1280.png" alt='star' className='stats-icon'/>
                <p className='stats-text'>{repositoryData.starsCount} Stars</p>
            </div>
            <div className='stats-container'>
                <img src="https://i.postimg.cc/XvJ4rvLj/ip-access-control-1.png" alt='fork' className='stats-icon'/>
                <p className='stats-text' >{repositoryData.forksCount} Forks</p>
            </div>
            <div className='stats-container'>
                <img src="https://i.postimg.cc/JnLHwZm6/warning.png" alt='issue' className='stats-icon'/>
                <p className='stats-text' >{repositoryData.issuesCount} open issues</p>
            </div>
        </li>
    )
}
export default RepositoryItem