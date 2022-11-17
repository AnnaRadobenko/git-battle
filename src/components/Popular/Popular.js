import React from "react";
import Tabs from "./Tabs";
import Repos from "./Repos";
import {fetchPopularRepos} from "../Api";
import Loader from "./Loader";


class Popular extends React.Component {
    state = {
        selectedLanguages: 'All',
        repos: []
    }

    componentDidMount() {
        this.fetchPopularReposHandler(this.state.selectedLanguages);
    }
    
    updateLanguage = (language) => {
        this.setState({selectedLanguages: language});
        this.fetchPopularReposHandler(language);
    }

    fetchPopularReposHandler = (language) => {
        fetchPopularRepos(language)
        .then(repos => this.setState({repos}));
    }

    render() {
        return (
            <>
                <Tabs 
                    selectedLanguages={this.state.selectedLanguages}
                    updateLanguage={this.updateLanguage}
                />
                {this.state.repos.length ? <Repos repos={this.state.repos} /> : <Loader />}
            </>
        )
    }
}

export default Popular;