import React from 'react';

class RecentSearches extends React.Component {
    constructor(props) {
        super(props);

        this.recentSearchHandler = this.recentSearchHandler.bind(this);
    }

    recentSearchHandler(search) {
        this.props.recentSearch(search);
    }

    render() {
        return(
            <table>
                <tbody>
                    {
                        this.props.searches.map((search, index) => {
                            return(
                                <tr key={index} className="search-row" onClick={() => this.recentSearchHandler(search)}>
                                    <td className="cell-ID">
                                        <p>#{search.id}</p>
                                    </td>
                                    <td className="cell-name">
                                        <p>{search.name}</p>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        );
    }
}

export default RecentSearches;