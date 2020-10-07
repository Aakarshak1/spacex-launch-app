import React from 'react';
import PropTypes from 'prop-types';
import './filter.css';

let years = [
  '2006',
  '2007',
  '2008',
  '2009',
  '2010',
  '2011',
  '2012',
  '2013',
  '2014',
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
];

export const Year = React.memo((props) => {
  const setLaunchYear = (e) => {
    props.setYear(e.target.textContent);
  };
  return (
    <section className="filter">
      <label>Launch Year</label>
      <div className="options">
        {years.map((year, i) => (
          <div onClick={setLaunchYear} key={`year-${i}`} data-testid={year}>
            <span className={props.year === year ? 'active' : ''}>{year}</span>
          </div>
        ))}
      </div>
    </section>
  );
});

export const Launch = React.memo((props) => {
  const setLaunchValue = (e) =>
    props.setLaunching(e.target.textContent.toLowerCase());

  return (
    <section className="filter">
      <label>Successfull Launch</label>
      <div className="options">
        <div onClick={setLaunchValue}>
          <span className={props.launch === 'true' ? 'active' : ''}>True</span>
        </div>
        <div onClick={setLaunchValue}>
          <span className={props.launch === 'false' ? 'active' : ''}>
            False
          </span>
        </div>
      </div>
    </section>
  );
});

export const Landing = React.memo((props) => {
  const setLandingValue = (e) =>
    props.setLanding(e.target.textContent.toLowerCase());

  return (
    <section className="filter">
      <label htmlFor="landing">Successfull Landing</label>
      <div className="options">
        <div onClick={setLandingValue}>
          <span className={props.land === 'true' ? 'active' : ''}>True</span>
        </div>
        <div onClick={setLandingValue}>
          <span className={props.land === 'false' ? 'active' : ''}>False</span>
        </div>
      </div>
    </section>
  );
});
export default class Filters extends React.Component {
  render() {
    const { setYear, setLaunching, initialValue, setLanding } = this.props;
    return (
      <div className="filterSections">
        <div className="filterLabel">Filters</div>
        <Year setYear={setYear} year={initialValue.year} />
        <Launch setLaunching={setLaunching} launch={initialValue.launching} />
        <Landing setLanding={setLanding} land={initialValue.landing} />
      </div>
    );
  }
}

Filters.propTypes = {
  setYear: PropTypes.func.isRequired,
  setLaunching: PropTypes.func.isRequired,
  initialValue: PropTypes.object.isRequired,
  setLanding: PropTypes.func.isRequired,
};
