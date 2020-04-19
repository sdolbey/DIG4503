import React from 'react';

class Result extends React.Component {

    render() {
        return(
            <div className="results">
                <table className="u-full-width">
                    <thead>
                        <tr>
                            <th></th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Types</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="cell-icon">
                                <img src={this.props.icon} alt={this.props.name + " icon"}/>
                            </td>
                            <td className="cell-ID">
                                <p>#{this.props.id}</p>
                            </td>
                            <td className="cell-name">
                                <p>{this.props.name}</p>
                            </td>
                            <td className="cell-types">
                            {
                                this.props.types.map((type, index) => {
                                    return(
                                        <p key={index} className={type + " type-icon"}>
                                            {type}
                                        </p>
                                    )
                                })
                            }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Result;