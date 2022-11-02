import {Component} from 'react'
import {Circles} from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
    {id:'ALL',language:'ALL'},
    {id:'JAVASCRIPT',language:'javascript'},
    {id:'RUBY',language:'ruby'},
    {id:'JAVA',language:'java'},
    {id:'CSS',language:'css'}
]

class GithubPopularRepos extends Component {
    state = {
        isLoading:true,
        repositoriesData:[],
        selectedLangeuageFilter:'ALL'
    }

    componentDidMount() {
        this.getRepositories(languageFiltersData[0].id)
    }

    setRepositories = (fetchedData,loadingStatus) => {
        this.setState({
            repositoriesData:fetchedData,
            isLoading:loadingStatus
        })
    }

    setIsLoading = loadingStatus => {
        this.setState({isLoading:loadingStatus})
    }

    getRepositories = async selectedLangeuageFilter => {
        this.setIsLoading(true)
        const response = await fetch(`${apiUrl}${selectedLangeuageFilter}`)
        const fetchedData = await response.json()
        const updatedData =  fetchedData.popular_repos.map(eachRepository => ({
            id:eachRepository.id,
            imageUrl:eachRepository.image_url,
            name:eachRepository.name,
            starsCount:eachRepository.stars_count,
            forksCount:eachRepository.forks_count,
            issuesCount:eachRepository.issues_count
        }))
        this.setRepositories(updatedData,false)
    }

    renderLoader = () => (
        <div testid='loader'>
            <Circles type='ThreeDots' color='blur' height={50} width={50} />
        </div>
    )

    renderRepositoriesList = () => {
        const {repositoriesData} = this.state

        return (
            <ul className='repositories-cards-list-container'>
                {repositoriesData.map(repositoryData => (
                    <RepositoryItem
                    key={repositoryData.id}
                    repositoryData={repositoryData}
                    />
                ))}
            </ul>
        )
    }

    renderLanguageFiltersList = () => {
        const {selectedLangeuageFilter} = this.state

        return (
            <ul className='filters-list-container'>
                {languageFiltersData.map(eachlanguageFilter => (
                    <LanguageFilterItem 
                    isSelected={eachlanguageFilter.id===selectedLangeuageFilter}
                    key={eachlanguageFilter.id}
                    languageFilter={eachlanguageFilter}
                    setSelectedLanguageFilterAndGetRepositories={this.setSelectedLanguageFilterAndGetRepositories}
                    />
                ))}
            </ul>
        )
    }

    render() {
        const {isLoading} = this.state
        return (
            <div app-container>
                <div className='github-popular-repositories-container'>
                    <h1 className='heading'>Popular</h1>
                    {this.renderLanguageFiltersList()}
                    {isLoading ? this.renderLoader() : this.renderRepositoriesList()}
                </div>
            </div>
        )
    }
}
export default GithubPopularRepos