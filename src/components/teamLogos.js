/* eslint-disable react/jsx-key */
import React from 'react';
import * as NBAIcons from 'react-nba-logos';

/**
 * This file maps the teamIds from the NBA API to the logos from the 'react-nba-logos' npm package.
 * This mapping is used to render correct logos in <SingleMatch/> & <TeamDetails/>.
 */

const iconsMap = new Map([
  ['1', <NBAIcons.ATL size={140} />],
  ['4', <NBAIcons.BKN size={140} />],
  ['2', <NBAIcons.BOS size={140} />],
  ['5', <NBAIcons.CHA size={140} />],
  ['6', <NBAIcons.CHI size={140} />],
  ['7', <NBAIcons.CLE size={140} />],
  ['8', <NBAIcons.DAL size={140} />],
  ['9', <NBAIcons.DEN size={140} />],
  ['10', <NBAIcons.DET size={140} />],
  ['11', <NBAIcons.GSW size={140} />],
  ['14', <NBAIcons.HOU size={140} />],
  ['15', <NBAIcons.IND size={140} />],
  ['16', <NBAIcons.LAC size={140} />],
  ['17', <NBAIcons.LAL size={140} />],
  ['19', <NBAIcons.MEM size={140} />],
  ['20', <NBAIcons.MIA size={140} />],
  ['21', <NBAIcons.MIL size={140} />],
  ['22', <NBAIcons.MIN size={140} />],
  ['23', <NBAIcons.NOP size={140} />],
  ['24', <NBAIcons.NYK size={140} />],
  ['25', <NBAIcons.OKC size={140} />],
  ['26', <NBAIcons.ORL size={140} />],
  ['27', <NBAIcons.PHI size={140} />],
  ['28', <NBAIcons.PHX size={140} />],
  ['29', <NBAIcons.POR size={140} />],
  ['30', <NBAIcons.SAC size={140} />],
  ['31', <NBAIcons.SAS size={140} />],
  ['38', <NBAIcons.TOR size={140} />],
  ['40', <NBAIcons.UTA size={140} />],
  ['41', <NBAIcons.WAS size={140} />],
]);

export default iconsMap;
