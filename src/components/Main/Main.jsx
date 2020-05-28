import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './Main.css';

const Main = () => {
	return (
		<Fragment>
			<Link
				className="unicode mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect"
				to="/3d"
			>
				သုံးလုံးကြည့်မယ်
			</Link>

			<a
				className="unicode mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect"
				href="https://lucky.myanmarnews.best/"
			>
				ထိုင်းခဲခြစ်ဂဏန်းကြည့်မယ်
			</a>

			<div className="d2-card-wide mdl-card mdl-shadow--5dp">
				<div className="mdl-card__title" align="center">
					<div align="center" style={{ width: '100%' }}>
						<b style={{ fontSize: '150px' }} className="d2" id="d21">
							.
						</b>
						<b style={{ fontSize: '150px' }} className="d2" id="d22">
							.
						</b>
					</div>
				</div>
				<div className="mdl-card__supporting-text">
					<small className="d2text"></small>
					<br />
					<small className="d2text2"></small>
				</div>
				<div className="mdl-card__actions mdl-card--border">
					<div style={{ float: 'left', margin: '10px' }} className="clock">
						<sub className="material-icons" style={{ color: 'white' }}>
							alarm
						</sub>
						<b id="hour" className="text-white"></b> :{' '}
						<b id="minute" className="text-white"></b> :{' '}
						<b id="second" className="text-white"></b>{' '}
						<b id="ampm" className="text-white"></b>
					</div>
					<div
						style={{
							float: 'right',
							margin: '10px',
						}}
						className="unicode d2status text-white"
					>
						Market Status
					</div>
				</div>
				<div className="mdl-card__menu">
					<button
						type="button"
						onClick="Refresh()"
						className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"
					>
						<i className="material-icons text-white">refresh</i>
					</button>
				</div>
				<div
					style={{ position: 'absolute', top: '20px', left: '15px' }}
					className="d2tick text-white"
				>
					5
				</div>
				<div
					id="d2set"
					style={{
						position: 'absolute',
						left: '10px',
						top: '105px',
						textAlign: 'left',
					}}
				></div>
				<div
					id="d2val"
					style={{
						position: 'absolute',
						right: '10px',
						top: '105px',
						textAlign: 'right',
					}}
				></div>
			</div>

			<div align="center">
				<table
					id="d2Table"
					className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp"
					style={{ width: '95%' }}
				>
					<tbody></tbody>
				</table>
			</div>
		</Fragment>
	);
};

export default Main;
