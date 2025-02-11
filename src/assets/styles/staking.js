import styled from 'styled-components';

export const SHr = styled.div`
  width: 100%;
  height: 1px;
  background: #e5e5e5;
`;
export const SMain = styled.div`
  width: 100%;
  .all-section {
    width: 100%;
    padding: 15px;
  }
`;
export const SDivPadding = styled.div`
  width: 100%;
  background: var(--color-bg-primary);
  margin-top: 20px;
  padding: 10px 15px;
  border-radius: 6px;
  box-sizing: content-box;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 3%);
  .box-staking {
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    margin-top: 0;
    padding: 20px 0;
  }
`;
export const SDivPaddingMT = styled.div`
  width: 100%;
  background: var(--color-bg-primary);
  margin-top: 20px;
  padding: 10px 15px;
  border-radius: 6px;
  box-sizing: content-box;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 3%);
  .box-staking {
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    margin-top: 20px;
    padding: 20px 0;
  }
`;
export const SDiv = styled.div`
  width: 100%;
  background: var(--color-bg-primary);
  padding: 10px 15px;
  margin-top: 20px;
  border-radius: 6px;
  box-sizing: content-box;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 3%);
  .box-staking {
    text-align: center;
  }
  :last-child {
    margin-bottom: 50px;
  }
  @media only screen and (max-width: 768px) {
    padding: 20px 0px;
  }
`;
export const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 10px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 10px 10px 10px;
  }
`;
export const SText = styled.div`
  color: var(--color-text-main);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;

  img {
    margin-left: 10px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 17px;
    margin: 0;
    /* padding: 0 10px; */
  }
`;

export const STextLeft = styled.div`
  color: var(--color-text-main);
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;

  @media only screen and (max-width: 768px) {
    font-size: 17px;
    padding: 0 10px;
    align-self: flex-start;
  }
`;

export const SDivHarvest = styled.div`
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const STextModel = styled.div`
  color: var(--color-text-main);
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  margin-top: 10px;
  min-width: 200px;
  img {
    margin-left: 10px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 17px;
    margin: 0;
  }
`;
export const SHref = styled.a`
  color: #107def;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
    margin-right: 10px;
  }
`;
export const SInput = styled.div`
  position: relative;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-start;

  input {
    background: var(--color-bg-main);
    color: var(--color-text-main);
    border: 0px;
    width: 90%;
    padding: 8px;
    border-radius: 6px;
    outline: none;
    &:hover,
    &:active,
    &:focus,
    &:focus-visible {
      outline: none;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 0 10px;
    input {
      width: 100%;
    }
  }
`;
export const SInputUnStake = styled.div`
  position: relative;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;
  input {
    background: var(--color-bg-main);
    color: var(--color-text-main);
    border: 0px;
    width: 90%;
    padding: 8px;
    border-radius: 6px;
    outline: none;
    &:hover,
    &:active,
    &:focus,
    &:focus-visible {
      outline: none;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 0 10px;
    margin-top: 10px;
    input {
      width: 100%;
    }
  }
`;
export const SError = styled.div`
  color: #e80e0e;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  @media only screen and (max-width: 768px) {
    margin-left: 10px;
  }
`;
export const SErrorUn = styled.div`
  color: #e80e0e;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  margin-left: 10%;
  @media only screen and (max-width: 768px) {
    margin-left: 10px;
  }
`;
export const SHrefErr = styled.div`
  color: #e80e0e;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
`;
export const SLinkErr = styled.a`
  color: #f84960;
  display: flex;
  margin-top: 5px;
  :hover {
    color: #f84960;
  }
  @media only screen and (max-width: 768px) {
    margin-left: 3%;
    margin-top: 0px;
    display: flex;
    align-items: center;
  }
`;
export const SLinkErrUn = styled.a`
  color: #f84960;
  display: flex;
  margin-left: 10%;
  margin-top: 5px;
  :hover {
    color: #f84960;
  }
`;
export const SImgErr = styled.img`
  margin: 0 10px;
  width: 12px;
  height: 12px;
`;
export const SImgErrNoMargin = styled.img`
  margin: 0;
  width: 12px;
  height: 12px;
`;
export const SMax = styled.button`
  margin-left: 10px;
  cursor: pointer;
  color: #107def;
  font-weight: 700;
  background: #107def;
  border-radius: 6px;
  color: #fff;
  font-size: 12px;
  padding: 5px 15px;
  outline: none;
  border: none;
  position: absolute;
  top: 15%;
  right: 11%;
  :disabled {
    cursor: not-allowed;
    color: #fff;
  }
  @media only screen and (max-width: 768px) {
    right: 4%;
  }
`;
export const SMaxUn = styled.button`
  margin-left: 10px;
  cursor: pointer;
  color: #107def;
  font-weight: 700;
  background: #107def;
  border-radius: 6px;
  color: #fff;
  font-size: 12px;
  padding: 5px 15px;
  outline: none;
  border: none;
  position: absolute;
  top: 15%;
  right: 1%;
  :disabled {
    cursor: not-allowed;
    color: #fff;
  }
  @media only screen and (max-width: 768px) {
    right: 4%;
  }
`;
export const SBoxOne = styled.div`
  width: 100%;
  :last-child {
    margin-top: 10px;
  }
  @media only screen and (max-width: 768px) {
    padding-bottom: 10px;
    border-bottom: 1px solid #e5e5e5;
    :last-child {
      margin-top: 20px;
    }
  }
`;
export const SBoxHarvest = styled.div`
  width: 100%;
  @media only screen and (max-width: 768px) {
    padding-bottom: 10px;
    border-bottom: 1px solid #e5e5e5;
    :last-child {
      border-bottom: none;
    }
  }
`;
export const SBtnDisabled = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;
  color: #107def;
  font-weight: 700;
  background: #9d9fa7;
  border-radius: 6px;
  color: #fff;
  padding: 5px;
  cursor: not-allowed;
`;
export const SBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    margin-top: 10px;
    margin-left: 5px;
    margin-left: 10px;
  }
`;
export const SBtnUn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    justify-content: flex-start;
    margin-top: 24px;
    flex-direction: column;
  }
`;
export const SBtnStake = styled.button`
  cursor: pointer;
  background: #107def;
  color: #fff;
  border-radius: 6px;
  padding: 8px 20px;
  min-width: 280px;
  text-align: center;
  margin-right: 10px;
  border: none;
  outline: none;
  margin-right: 15px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0px !important;
    margin-top: 0;
    margin-right: 0;
  }
  :disabled {
    color: #fff !important;
    cursor: not-allowed;
    &:hover {
      background: #d9d9d9 !important;
    }
  }
`;
export const SBtnApprove = styled.button`
  cursor: pointer;
  background: #107def;
  color: #fff;
  border-radius: 6px;
  padding: 8px 20px;
  min-width: 280px;
  text-align: center;
  margin-right: 10px;
  border: none;
  outline: none;
  margin-right: 15px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0px !important;
    margin-right: 10px !important;
  }
  :disabled {
    color: #fff !important;
    cursor: not-allowed;
    &:hover {
      background: #d9d9d9 !important;
    }
  }
`;
export const SBtnLoadding = styled.button`
  cursor: pointer;
  background: #107def;
  color: #fff;
  border-radius: 6px;
  padding: 8px 20px;
  min-width: 280px;
  text-align: center;
  border: none;
  outline: none;
  margin-right: 15px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0px !important;
  }
  :disabled {
    color: #fff !important;
    cursor: not-allowed;
  }
`;
export const SBtnUnstake = styled.button`
  cursor: pointer;
  background: #107def;
  color: #fff;
  border-radius: 6px;
  border: none;
  padding: 8px 20px;
  min-width: 280px;
  text-align: center;
  margin-right: 15px;
  outline: none;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-top: 0;
  }
  :disabled {
    color: #fff !important;
    cursor: not-allowed;
  }
`;
export const SSTake = styled.button`
  cursor: pointer;
  background: #107def;
  color: #fff;
  border-radius: 6px;
  padding: 9px 20px;
  min-width: 150px;
  min-height: 38px;
  text-align: center;
  margin-left: 30px;
  border: none;
  outline: none;
  :disabled {
    color: #fff !important;
    cursor: not-allowed;
  }
  @media only screen and (max-width: 768px) {
    min-width: 125px;
    margin-left: 0;
    /* margin: 3%; */
  }
`;
export const SSTaked = styled.button`
  cursor: pointer;
  background: #107def;
  color: #fff;
  border-radius: 6px;
  padding: 8px 20px;
  min-width: 150px;
  text-align: center;
  margin-left: 30px;
  border: none;
  outline: none;
  :disabled {
    color: #fff !important;
    cursor: not-allowed;
  }
  @media only screen and (max-width: 768px) {
    min-width: 125px;
    margin: 3%;
    margin-left: 0px;
  }
`;
export const SSUnSTakedWeb = styled.button`
  cursor: pointer;
  background: #107def;
  color: #fff;
  border-radius: 6px;
  border: none;
  padding: 8px 20px;
  min-width: 150px;
  text-align: center;
  outline: none;
  :disabled {
    color: #fff !important;
    cursor: not-allowed;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const SSUnTake = styled.button`
  cursor: pointer;
  background: #107def;
  color: #fff;
  border-radius: 6px;
  padding: 8px 20px;
  min-width: 280px;
  text-align: center;
  border: none;
  outline: none;
  margin-right: 15px;
  .mg-10:disabled {
    @media only screen and (max-width: 768px) {
      margin-top: 0 !important;
    }
  }
  :disabled {
    color: #fff !important;
    cursor: not-allowed;
    :hover {
      background-color: #fff !important;
    }
  }
  :hover {
    background-color: #fff !important;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const SBtnUnStakeStart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    justify-content: center;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 15px;
    img {
      margin-left: 15px;
    }
  }
`;
export const SBtnUnStakeStartNotBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    justify-content: center;
    padding-bottom: 10px;
    margin-top: 14px;
  }
`;
export const SCountDown = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SBoxState = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const SBoxUnState = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 10px;
  }
`;
export const SBoxUnStateDetails = styled.div`
  // float: right;
  // margin-right: 15px;
  @media only screen and (max-width: 768px) {
    margin: auto;
    float: none;
    text-align: center;
    margin-top: 10px;
    button {
      margin-left: 10px;
      margin-right: 0;
    }
    img {
      margin-left: 10px;
    }
  }
`;
export const SInfor = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  @media only screen and (max-width: 768px) {
    padding: 0 10px;
  }
`;
export const SInforNotBorder = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  @media only screen and (max-width: 768px) {
    padding: 0 10px;
  }
`;
export const SInforClaim = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding-bottom: 15px;
  @media only screen and (max-width: 768px) {
    border-bottom: none;
    margin: 10px 10px 0;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 15px;
    width: auto;
  }
`;
export const SInforClaimNotBorder = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding-bottom: 15px;
  @media only screen and (max-width: 768px) {
    border-bottom: none;
    padding: 0 10px;
  }
`;
export const SInforClaimCountDown = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  padding-bottom: 15px;
  @media only screen and (max-width: 768px) {
    border-bottom: none;
    padding: 0 10px;
  }
`;
export const SInforClaimNoBorder = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding-bottom: 15px;
  @media only screen and (max-width: 768px) {
    border-bottom: none !important;
    padding: 0 10px;
  }
`;
export const SInforText = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #6d6f7b;
  display: flex;
`;
export const SInforTextMargin = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #6d6f7b;
  display: flex;
  margin-left: 10%;
  @media only screen and (max-width: 768px) {
    margin-left: 0%;
  }
`;
export const SInforTextVSTRK = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #6d6f7b;
  display: flex;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
    padding: 0 10px;
    margin-top: 10px;
    justify-content: space-between;
  }
`;
export const SInforTextVSTRKDetail = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #6d6f7b;
  margin-right: 20px;
`;
export const SInforTextUn = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #6d6f7b;
  display: flex;
  margin-left: 10%;
  @media only screen and (max-width: 768px) {
    margin: 10px 0px 10px 0px;
  }
`;
export const SVSTRKTootip = styled.div`
  margin-right: 30px;
  margin-left: 10px;
  @media only screen and (max-width: 768px) {
    margin: 0;
  }
`;
export const SInforValue = styled.div`
  font-weight: 900;
  font-size: 16px;
  line-height: 24px;
  color: var(--color-text-main);
  display: flex;
  margin-right: 10%;
  @media only screen and (max-width: 768px) {
    margin-right: 0%;
  }
`;
export const SInforValueNoMargin = styled.div`
  font-weight: 900;
  font-size: 16px;
  line-height: 24px;
  color: var(--color-text-main);
  display: flex;
  @media only screen and (max-width: 768px) {
    margin-right: 0%;
  }
`;
export const SInforValueUn = styled.div`
  font-weight: 900;
  font-size: 16px;
  line-height: 24px;
  color: var(--color-text-main);
  display: flex;
`;
export const SIconSmall = styled.div`
  margin-right: 10px;
  display: inline-block;
`;
export const STotalClaim = styled.div`
  font-weight: 900;
  color: var(--color-text-main);
  display: flex;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
export const SImgFlashSmall = styled.img``;
export const SImgLpSmall = styled.img`
  margin-left: -5px;
`;
export const SQuestion = styled.img`
  width: 23px;
  height: 23px;
  margin-right: 10px;
  @media only screen and (max-width: 768px) {
    width: 15px;
    height: 15px;
    margin-right: 0px !important;
  }
`;
export const SHrefNftWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-left: 20px;
  @media only screen and (max-width: 768px) {
    position: absolute;
    bottom: 10px;
    left: 10px;
    margin-left: 0px;
  }
`;
export const SHrefGetNft = styled.span`
  font-size: 16px;
  color: #1890ff;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    margin-left: 0px;
  }
`;
export const SHrefNft = styled.a`
  font-size: 16px;
  @media only screen and (max-width: 768px) {
    margin-left: 0px;
  }
`;
export const SQuestionNFT = styled.img`
  width: 23px;
  height: 23px;
  margin: 5px 0 0 10px;
  @media only screen and (max-width: 768px) {
    width: 15px;
    height: 15px;
    margin-right: 0px !important;
    margin-top: 10px;
  }
`;
export const SQuestionClaimed = styled.img`
  width: 23px;
  height: 23px;
  margin-right: 10px;
  @media only screen and (max-width: 768px) {
    width: 15px;
    height: 15px;
    margin-right: 20px;
    margin-left: 5px;
  }
`;
export const SQuestionClaim = styled.img`
  width: 23px;
  height: 23px;
  margin-right: 10px;
  @media only screen and (max-width: 768px) {
    width: 15px;
    height: 15px;
    margin-right: 0;
  }
`;
export const SBtnClaim = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  @media only screen and (max-width: 768px) {
    justify-content: center;
    margin-top: 0;
  }
`;
export const SBtnClaimStart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  @media only screen and (max-width: 768px) {
    justify-content: center;
    padding: 0;
    margin-top: 0;
  }
`;
export const SClaim = styled.button`
  cursor: pointer;
  background: #107def;
  color: #fff;
  font-weight: 700;
  border-radius: 6px;
  padding: 8px 20px;
  min-width: 280px;
  text-align: center;
  margin-right: 15px;
  outline: none;
  border: none;
  :disabled {
    cursor: not-allowed;
    color: #fff !important;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const SUnClaim = styled.div`
  cursor: pointer;
  background: #9d9fa7;
  font-weight: 700;
  color: #fff;
  opacity: 0.5;
  border-radius: 6px;
  padding: 8px 20px;
  min-width: 280px;
  text-align: center;
  margin-right: 15px;
  cursor: not-allowed;
  @media only screen and (max-width: 768px) {
    /* width: 100%; */
  }
`;
export const STimeClaim = styled.div`
  margin-left: 10px;
  display: block;
  width: 100%;
`;
export const STimeNumer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const STimeText = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SItemTime = styled.div``;
export const SFlash = styled.img`
  /* margin-right: 10px; */
`;
export const SDetails = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #6d6f7b;
  margin-top: 20px;
  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
export const SDetailsColor = styled.div`
  min-width: fit-content;
  font-size: 16px;
  line-height: 35px;
  color: #6d6f7b;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    font-size: 13px;
    justify-content: right;
  }
`;
export const SDetailsColorBold = styled.div`
  font-weight: 900;
  color: #000000;
  margin-left: 5px;
`;
export const SDetailsColorNotBold = styled.div`
  font-weight: 400;
  color: #000000;
  margin-left: 5px;
`;
export const SRowFlex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px 10px 20px 10px;
  border-bottom: 1px solid #e5e5e5;
`;
export const SRowColumn = styled.div`
  display: flex;
  margin-bottom: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const SRowRow = styled.div`
  display: flex;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  @media only screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
export const SFlex = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;
export const SFlexEnd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 145px;
  padding-left: 10px;
  @media only screen and (max-width: 768px) {
    justify-content: flex-end;
  }
`;

export const SSlider = styled.div`
  width: 100%;
  .slick-slide img {
    margin: auto;
  }
`;
export const SSliderNoData = styled.div`
  display: block;
  width: 100%;
`;
export const SSliderNoDataImg = styled.img`
  display: block;
  margin: auto;
`;
export const SSliderNoDataText = styled.div`
  width: 100%;
  display: block;
  margin: auto;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  color: #9d9fa7;
  margin-bottom: 20px;
  margin-top: 20px;
`;
export const SItemSlider = styled.div`
  width: 100%;
  padding: 10px;
  position: relative;
`;
export const SImgSlider = styled.img`
  height: 100%;
  display: flex;
  justify-content: center;
  algin-items: center;
  @media only screen and (max-width: 3840px) {
    height: 567px;
  }
  @media only screen and (max-width: 1920px) {
    height: 375px;
    display: flex;
    justify-content: center;
    algin-items: center;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    algin-items: center;
    height: 149px;
  }
`;
export const SLoadingNFT = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  algin-items: center;
  @media only screen and (max-width: 3840px) {
    height: 567px;
  }
  @media only screen and (max-width: 1920px) {
    height: 375px;
    display: flex;
    justify-content: center;
    algin-items: center;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    algin-items: center;
    height: 149px;
  }
`;
export const SBoxSlider = styled.div`
  width: 100%;
  background: #3e3f4d;
  padding: 15px;
  @media only screen and (max-width: 768px) {
    padding: 5px;
    font-size: 12px;
  }
`;
export const STitleSlider = styled.div`
  color: #fff;
`;
export const SDescriptionSlider = styled.div`
  color: #ff897e;
`;
export const SSactive = styled.img`
  position: absolute;
  width: 25px !important;
  height: 25px !important;
  top: 25px;
  right: 25px;
`;
export const SSUnactive = styled.img`
  position: absolute;
  width: 25px !important;
  height: 25px !important;
  top: 25px;
  right: 25px;
`;
export const SDivBlack = styled.div`
  background: #333;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.5;
`;
export const STextSelecT = styled.div`
  width: 100%;
  text-align: center;
  margin: auto;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: #27282b;
  margin-top: 15px;
`;

export const SWrapperNFTStake = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const SWrapperCountDownClaim = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const SUnstakeCountDownMobile = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const SToolTipStakeNFT = styled.div`
  img {
    margin-right: 0px;
    margin-left: 10px;
  }
`;

export const SNexSlider = styled.img`
  color: #fff !important;
  cursor: pointer;
  border-radius: 50%;
`;

export const SRowFlexNFTStaking = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 10px 20px 10px;
  border-bottom: 1px solid #e5e5e5;
`;

export const SUnstakeCountDownWeb = styled.div`
  display: flex;
  align-self: flex-end;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const SWrapperTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SWrapperCountDownWeb = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const SWrapperCountDownMobile = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SSUnSTakedMobile = styled.button`
  display: none;
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    float: right;
    width: 125px;
    cursor: pointer;
    background: #107def;
    color: #fff;
    border-radius: 6px;
    border: none;
    padding: 8px 20px;
    min-width: 125px;
    text-align: center;
    outline: none;
    :hover {
      background-color: #fff !important;
    }
    :disabled {
      color: #fff !important;
      cursor: not-allowed;
    }
    :hover {
      background-color: #fff !important;
    }
  }
`;

export const SWrapperUnStake = styled.div`
  display: flex;
  justify-content: flex-end;
`;
