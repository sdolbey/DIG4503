import React from 'react';

class Result extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td className="cell-icon">
                                <img src={this.props.icon}/>
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
                                        <p key={index} className="type">
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