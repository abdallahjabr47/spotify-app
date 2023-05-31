import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  min-width: 100%;
  min-height: 600px;

  @media screen and (max-width: 820px) {
    min-height: 142vh;
  }
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  background: linear-gradient(rgb(19, 18, 18), rgba(0,0,0,1));
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  min-height: 400px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  @media screen and (max-width: 820px) {
  }
`;

export const FooterLinksItems = styled.div`
  display: flex;
  flex-direction: column;
  align-itmes: flex-start;
  margin: 30px 25px;
  text-align: left;
  box-sizing: border-box;
  color: #fff;
  width: 160px;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinksTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  align-itmes: center;
  justify-content: space-around;
  max-width: 1000px;
  width: 100%;

  @media screen and (max-width: 820px) {
    flex-direction: row;
  }
`;

export const SocialIconLink = styled.a`
  color: #fff;
  margin: 5px 0;

  @media screen and (max-width: 820px) {
    margin: 5px 0;
  }
`;

export const StyleComponent = styled.div`
  display: inline;
`;

export const BreakLine = styled.div`
  margin: 20px 0;
  border-bottom: 1px solid #212121;
  width: 100%

  @media screen and (max-width: 820px) {
    width: 50%
  }
`;

export const FooterSecondLinksItems = styled.div`
  display: flex;
  margin: 16px;
  text-align: left;
  box-sizing: border-box;
  color: #fff;
  margin: 10px 5px;

  @media screen and (max-width: 820px) {
  }
`;

export const WebsiteLegals = styled.div`
  display: flex;
  justify-content: space-between;

  
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const WebsiteRights = styled.div`
  display: flex;
  color: #fff;
  font-size: 14px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 820px) {
    margin: 20px 0;
  }
`;