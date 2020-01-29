import React from 'react';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as OverlayActionsCreator } from '../../store/ducks/overlay';
import { Creators as MinicartActionsCreator } from '../../store/ducks/minicart';

import '../../styles/containers/HeaderAmaro.scss';

import LogoIcon from '../../assets/icons/logo.svg';
import CartIcon from '../../assets/icons/shopping-bag.svg';

import Button from '../../components/Button';
import Container from '../../layout/Container';

const HeaderAmaro = ({
  toolbar,
  quantity,
  minicartActions,
  overlayActions,
}) => {
  const { toggleOverlay } = overlayActions;
  const { toggleMinicart } = minicartActions;

  const handleToggleMinicart = () => {
    toggleOverlay(true);
    toggleMinicart(true);
  };
  return (
    <header className={`am-header ${toolbar ? 'is--active' : ''}`}>
      <div className="am-header__top">
        <p className="am-header__top-text">Amaro Front-End</p>
      </div>
      <Container>
        <div className="am-header__wrapper">
          <Link to="/" className="am-header__wrapper-logo">
            <ReactSVG src={LogoIcon} />
          </Link>
          <Button
            type="button"
            className="am-header__wrapper-cart"
            onClick={() => handleToggleMinicart()}
          >
            {quantity >= 1 && (
              <span className="am-header__wrapper-cart-qty">
                {quantity}
              </span>
            )}
            <ReactSVG
              className="am-header__wrapper-cart-icon"
              src={CartIcon}
            />
          </Button>
        </div>
      </Container>
    </header>
  );
};

const mapStateToProps = state => ({
  toolbar: state.overlay.toolbar,
  quantity: state.minicart.data.reduce(
    (total, product) => total + product.amount,
    0,
  ),
});

const mapDispatchToProps = dispatch => ({
  minicartActions: bindActionCreators(
    MinicartActionsCreator,
    dispatch,
  ),
  overlayActions: bindActionCreators(OverlayActionsCreator, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderAmaro);
