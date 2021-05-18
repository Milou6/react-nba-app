/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { } from "react";
import PropTypes from 'prop-types';
import * as NBAIcons from 'react-nba-logos';

function SingleMatch(props) {
  
    const iconsMap = new Map([
        ["ATL", <NBAIcons.ATL size={140} />],
        ["BKN", <NBAIcons.BKN size={140} />],
        ["BOS", <NBAIcons.BOS size={140} />],
        ["CHA", <NBAIcons.CHA size={140} />],
        ["CHI", <NBAIcons.CHI size={140} />],
        ["CLE", <NBAIcons.CLE size={140} />],
        ["DAL", <NBAIcons.DAL size={140} />],
        ["DEN", <NBAIcons.DEN size={140} />],
        ["DET", <NBAIcons.DET size={140} />],
        ["GSW", <NBAIcons.GSW size={140} />],
        ["HOU", <NBAIcons.HOU size={140} />],
        ["IND", <NBAIcons.IND size={140} />],
        ["LAC", <NBAIcons.LAC size={140} />],
        ["LAL", <NBAIcons.LAL size={140} />],
        ["MEM", <NBAIcons.MEM size={140} />],
        ["MIA", <NBAIcons.MIA size={140} />],
        ["MIL", <NBAIcons.MIL size={140} />],
        ["MIN", <NBAIcons.MIN size={140} />],
        ["NOP", <NBAIcons.NOP size={140} />],
        ["NYK", <NBAIcons.NYK size={140} />],
        ["OKC", <NBAIcons.OKC size={140} />],
        ["ORL", <NBAIcons.ORL size={140} />],
        ["PHI", <NBAIcons.PHI size={140} />],
        ["PHX", <NBAIcons.PHX size={140} />],
        ["POR", <NBAIcons.POR size={140} />],
        ["SAC", <NBAIcons.SAC size={140} />],
        ["SAS", <NBAIcons.SAS size={140} />],
        ["TOR", <NBAIcons.TOR size={140} />],
        ["UTA", <NBAIcons.UTA size={140} />],
        ["WAS", <NBAIcons.WAS size={140} />],
    ]);

    // const Icon = iconsMap.get(props.matchData.home_team.abbreviation);
    // console.log(Icon);


    return (
        <div className="single_match">
            <div className="home_team">
                {iconsMap.get(props.matchData.home_team.abbreviation)}
                <div>{props.matchData.home_team.full_name}</div>
            </div>
            <div className="visitor_team">
                {iconsMap.get(props.matchData.visitor_team.abbreviation)}
                {props.matchData.visitor_team.full_name}
            </div>
        </div>
  );
}
// React.createElement(iconsMap.get({props.matchData.home_team.abbreviation}), {});
// <NBAIcons.{props.matchData.home_team.abbreviation} size={140} />

// =============================================================================
// 
// =============================================================================
SingleMatch.propTypes = {
    matchData: PropTypes.object,
    
}

export default SingleMatch