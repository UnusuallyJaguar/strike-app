import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { compose } from 'recompose';
import { Tooltip, Icon } from 'antd';
import Button from '@material-ui/core/Button';
import commaNumber from 'comma-number';
import { connectAccount } from 'core';
import {
  getComptrollerContract,
  getTokenContract,
  methods
} from 'utilities/ContractService';
import DelegationTypeModal from 'components/Basic/DelegationTypeModal';
import LoadingSpinner from 'components/Basic/LoadingSpinner';
import { Card } from 'components/Basic/Card';
import coinImg from 'assets/img/strike_32.png';
import { addToken } from 'utilities/common';
import metaMaskImg from 'assets/img/metamask.png';
import IconQuestion from 'assets/img/question.png';
import { useInstance } from 'hooks/useContract';

const VotingWalletWrapper = styled.div`
  width: 100%;
  border-radius: 6px;
  background-color: var(--color-bg-primary);
  padding: ${props => (props.pageType !== 'strk' ? '36px 22px 48px 15px' : '')};

  .balance-info {
    padding-left: 30px;
  }

  .header {
    padding-left: 35px;
    margin-bottom: 20px;
    .title {
      font-size: 17px;
      font-weight: 900;
      color: var(--color-text-main);
    }
  }

  .content {
    padding: 20px 0px;
    border-bottom: 1px solid var(--color-bg-active);

    .coin-img {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      margin-right: 9px;
    }

    a,
    p {
      font-size: 16px;
      font-weight: bold;
      color: var(--color-text-green);
    }

    .content-label {
      padding-left: 35px;
      font-size: 16px;
      color: var(--color-text-secondary);

      &.balance {
        img {
          margin-left: 10px;
          width: 25px;
          height: 25px;
        }
      }
    }

    .content-value {
      font-size: 28.5px;
      font-weight: 900;
      color: var(--color-text-main);
      @media only screen and (max-width: 768px) {
        font-size: 18px;
      }
    }
  }
  .delegate-change {
    padding-left: 35px;
    .content-label {
      padding-left: 0px;
    }
    .change {
      font-size: 16px;
      font-weight: bold;
      color: var(--color-blue);
    }
  }
  .setup {
    padding: 30px 35px 0px;

    .setup-header {
      font-size: 18px;
      font-weight: 900;
      color: var(--color-text-main);
    }

    .setup-content {
      margin-top: 32px;
      font-size: 16px;
      color: var(--color-text-secondary);

      a {
        color: var(--color-blue);
      }
    }
  }

  .started-btn {
    margin-top: 30px;
    width: 50%;
    height: 46px;
    border-radius: 6px;
    background: linear-gradient(
      242deg,
      #246cf9 0%,
      #1e68f6 0.01%,
      #0047d0 100%,
      #0047d0 100%
    );
    .MuiButton-label {
      font-size: 17px;
      font-weight: 500;
      color: var(--color-white);
      text-transform: capitalize;
    }
  }

  span {
    color: var(--color-blue);
  }

  .mint-content-label {
    margin-top: 20px;
    padding-left: 35px;
    font-weight: 900;
    font-size: 16px;
    color: var(--color-text-secondary);
  }
`;

const SQuestion = styled.img`
  margin: 0px 20px 0px 10px;
`;

let timeStamp = 0;
const format = commaNumber.bindWith(',', '.');

function VotingWallet({ balance, pageType, settings, earnedBalance }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [delegateAddress, setDelegateAddress] = useState('');
  const [delegateStatus, setDelegateStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingEarn, setIsLoadingEarn] = useState(false);
  const instance = useInstance(settings.walletConnected);

  useEffect(() => {
    if (settings.selectedAddress && timeStamp % 3 === 0) {
      const tokenContract = getTokenContract(instance, 'strk');
      methods
        .call(tokenContract.methods.delegates, [settings.selectedAddress])
        .then(res => {
          setDelegateAddress(res);
          if (res !== '0x0000000000000000000000000000000000000000') {
            setDelegateStatus(
              res === settings.selectedAddress ? 'self' : 'delegate'
            );
          } else {
            setDelegateStatus('');
          }
        })
        .catch(() => {});
    }
    timeStamp = Date.now();
  }, [settings.markets, instance]);

  useEffect(() => {
    if (!earnedBalance) {
      setIsLoadingEarn(true);
      return;
    }
    setIsLoadingEarn(false);
  }, [earnedBalance]);

  const getBefore = value => {
    const position = value.indexOf('.');
    return position !== -1 ? value.slice(0, position + 5) : value;
  };

  const getAfter = value => {
    const position = value.indexOf('.');
    return position !== -1 ? value.slice(position + 5) : null;
  };

  const handleCollect = () => {
    if (+earnedBalance !== 0) {
      setIsLoading(true);
      const appContract = getComptrollerContract(instance);
      methods
        .send(
          appContract.methods.claimStrike,
          [settings.selectedAddress],
          settings.selectedAddress
        )
        .then(res => {
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <Card>
      <VotingWalletWrapper pageType={pageType}>
        {pageType !== 'strk' && (
          <div className="flex align-center header">
            <p className="title">Voting Wallet</p>
          </div>
        )}
        <div className="flex flex-column content">
          <p className="content-label balance">
            <span>STRK Balance</span>
            <img
              className="add-token pointer"
              src={metaMaskImg}
              alt="metamask"
              onClick={() =>
                addToken('strk', settings.decimals['strk'].token, 'token')
              }
            />
          </p>
          <div className="flex align-center just-between">
            <div className="flex align-center balance-info">
              <img className="coin-img" src={coinImg} alt="coin" />
              <p className="content-value">
                {getBefore(format(balance))}
                <span>{getAfter(format(balance))}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-column content">
          {isLoadingEarn && <LoadingSpinner />}
          {!isLoadingEarn && (
            <div className="flex align-center just-between">
              <div className="flex flex-column">
                <p className="content-label">STRK Earned</p>
                <div className="flex align-center balance-info">
                  <img className="coin-img" src={coinImg} alt="coin" />
                  <p className="content-value">
                    {getBefore(format(earnedBalance))}
                    <span>{getAfter(format(earnedBalance))}</span>
                  </p>
                </div>
              </div>
              {settings.selectedAddress && (
                <div className="flex align-center">
                  <p className="pointer" onClick={handleCollect}>
                    {isLoading && <Icon type="loading" />} Collect&nbsp;
                    <Tooltip
                      placement="bottom"
                      title={
                        <span>
                          Distributed STRK rewards have an 12-week vesting
                          period. During the vesting period tokens count as
                          staked tokens and earn platform fees. User must claim
                          the accumulated STRK rewards on the Rewards page in
                          order to put them into the 12-week vesting. Rewards
                          can be claimed during the vesting period for a 50%
                          penalty fee
                        </span>
                      }
                    >
                      <SQuestion src={IconQuestion} />
                    </Tooltip>
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
        {pageType !== 'strk' && delegateStatus && (
          <div className="flex flex-column content delegate-change">
            <p className="content-label">Delegating To</p>
            <div className="flex align-center just-between">
              <div className="flex align-center">
                <a
                  className="content-value"
                  href={`${process.env.REACT_APP_ETH_EXPLORER}/address/${delegateAddress}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {delegateStatus === 'self'
                    ? 'Self'
                    : `${delegateAddress.substr(
                        0,
                        4
                      )}...${delegateAddress.substr(
                        delegateAddress.length - 4,
                        4
                      )}`}
                </a>
              </div>
              <div className="flex align-center">
                <p
                  className="change pointer"
                  onClick={() => setIsOpenModal(true)}
                >
                  Change
                </p>
              </div>
            </div>
          </div>
        )}
        {pageType !== 'strk' && settings.selectedAddress && !delegateStatus && (
          <div className="flex flex-column setup">
            <p className="setup-header">Setup Voting</p>
            <p className="setup-content">
              You can either vote on each proposal yourself or delegate your
              votes to a third party. Strike Governance puts you in charge of
              the future of Strike.
              {/* <a href="/#">Learn more.</a> */}
            </p>
          </div>
        )}
        {pageType !== 'strk' && settings.selectedAddress && !delegateStatus && (
          <div className="center footer">
            <Button
              className="started-btn"
              onClick={() => setIsOpenModal(true)}
            >
              Get Started
            </Button>
          </div>
        )}
        <DelegationTypeModal
          visible={isOpenModal}
          balance={balance}
          delegateStatus={delegateStatus}
          address={settings.selectedAddress ? settings.selectedAddress : ''}
          instance={instance}
          onCancel={() => setIsOpenModal(false)}
        />
      </VotingWalletWrapper>
    </Card>
  );
}

VotingWallet.propTypes = {
  balance: PropTypes.string.isRequired,
  pageType: PropTypes.string.isRequired,
  earnedBalance: PropTypes.string.isRequired,
  settings: PropTypes.object.isRequired
};

const mapStateToProps = ({ account }) => ({
  settings: account.setting
});

export default compose(connectAccount(mapStateToProps, undefined))(
  VotingWallet
);
