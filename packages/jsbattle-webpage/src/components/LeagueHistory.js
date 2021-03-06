import React from "react";
import PropTypes from 'prop-types';

export default class LeagueHistory extends React.Component {

  renderRow(data) {
    const loserBadge = <span className="badge badge-dark"><i className="fas fa-skull"></i></span>;
    const winnerBadge = <span className="badge badge-danger"><i className="fas fa-trophy"></i></span>;
    const isSelected = (this.props.selectedId == data.players[0].id || this.props.selectedId == data.players[1].id);
    const rowStyle = isSelected ? {backgroundColor: "#555"} : {};
    return <tr style={rowStyle} key={data.id}>
        <td className="d-none d-sm-none d-md-block">
          {new Date(data.createdAt).toLocaleTimeString()}
        </td>
        <td>
          {data.players[0].winner ? winnerBadge : loserBadge} {data.players[0].name}
        </td>
        <td>
           {data.players[1].winner ? winnerBadge : loserBadge} {data.players[1].name}
        </td>
        <td className="text-right">
          <a href={`#/league/replay/${data.id}`} className="btn btn-sm btn-primary watch-button">
            <span className="fas fa-tv"></span><span className="d-none d-sm-none d-md-inline-block">&nbsp; Watch</span>
          </a>
        </td>
      </tr>;
  }

  render() {
    let rows = this.props.data.map((item) => this.renderRow(item));
    if(rows.length == 0) {
      rows = <tr>
          <td>
            <i className="fas fa-info-circle"></i> <em>The league has not started yet</em>
          </td>
        </tr>;
    }
    return <div className="card bg-dark text-white league-history" style={{height: '100%'}}>
      <div className="card-body">
        <h5 className="card-title">Recent battles</h5>
        <table className="table table-sm table-dark">
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    </div>;
  }
}

LeagueHistory.defaultProps = {
  data: [],
  selectedId: ''
};

LeagueHistory.propTypes = {
  data: PropTypes.array,
  selectedId: PropTypes.string,
};
