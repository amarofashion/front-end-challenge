import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from '../components/Header';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const PageLayout = props => {
  const { children } = props;

  return (
    <div className="App__container">
      <Header />

      <section className="App__products">
        <div className="App__products__wrapper">{children}</div>
      </section>
    </div>
  );
};

PageLayout.propTypes = propTypes;

const mapStateToProps = state => {
  return {
    ...state.store,
  };
};

export default withRouter(connect(mapStateToProps)(PageLayout));
