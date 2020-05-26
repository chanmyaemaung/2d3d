import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './ThreeD.css';

const ThreeD = () => {
	return (
		<Fragment>
			<Link
				className="unicode mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect"
				to="/2d"
			>
				ပြန်သွားမယ်
			</Link>

			<a
				className="unicode mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect"
				href="https://scratch.chanmyaemaung.net/"
			>
				ထိုင်းခဲခြစ်ဂဏန်းကြည့်မယ်
			</a>

			<div className="d2-card-wide mdl-card mdl-shadow--2dp">
				<div className="mdl-card__title" align="center">
					<div align="center" style={{ width: '100%' }}>
						<b style={{ fontSize: '150px' }} className="d2" id="d3">
							...
						</b>
					</div>
				</div>
				<div className="mdl-card__supporting-text d2text"></div>
				<div className="mdl-card__actions mdl-card--border">
					<div style={{ float: 'left', margin: '10px' }} className="clock">
						<sub className="material-icons" style={{ color: 'dark' }}>
							{' '}
							alarm{' '}
						</sub>
						<b id="hour"></b> : <b id="minute"></b> : <b id="second"></b>
						<b id="ampm"></b>
					</div>
				</div>
				<div className="mdl-card__menu">
					<button
						className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"
						onclick="if (!window.__cfRLUnblockHandlers) return false; get3DClick()"
						data-cf-modified-4833b07ac0a37b0d6ad3f355-=""
					>
						<i className="material-icons">refresh</i>
					</button>
				</div>
				<div
					style={{ position: 'absolute', top: '20px', left: '15px' }}
					className="d2tick"
				>
					30
				</div>
			</div>

			<div align="center">
				<table
					id="d3Table"
					className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp"
				></table>
			</div>

			<div
				id="progressbar"
				className="mdl-progress mdl-js-progress mdl-progress__indeterminate"
				style={{ width: '100%' }}
			></div>
		</Fragment>
	);
};

export default ThreeD;
