import React from 'react'
import { BreakLine, FooterContainer, FooterLink, FooterLinksContainer, FooterLinksItems, FooterLinksTitle, FooterLinksWrapper, FooterSecondLinksItems, FooterWrap, SocialIconLink, SocialIcons, SocialMediaWrap, WebsiteLegals, WebsiteRights } from './AboutUsElements'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const AboutUs = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <styleComponent>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinksTitle>Company</FooterLinksTitle>
                                <FooterLink to="/">About</FooterLink>
                                <FooterLink to="/">Jobs</FooterLink>
                                <FooterLink to="/">For the Record</FooterLink>
                                <FooterLink to="/">Investors</FooterLink>
                                <FooterLink to="/">Terms</FooterLink>
                        </FooterLinksItems>

                        <FooterLinksItems>
                            <FooterLinksTitle>Communitites</FooterLinksTitle>
                                <FooterLink to="/">For Artists</FooterLink>
                                <FooterLink to="/">Developers</FooterLink>
                                <FooterLink to="/">Advertising</FooterLink>
                                <FooterLink to="/">Investors</FooterLink>
                                <FooterLink to="/">Vendors</FooterLink>
                                <FooterLink to="/">Spotify for Work</FooterLink>
                        </FooterLinksItems>

                        <FooterLinksItems>
                            <FooterLinksTitle>Useful links</FooterLinksTitle>
                                <FooterLink to="/">Support</FooterLink>
                                <FooterLink to="/">Free Mobile App</FooterLink>
                        </FooterLinksItems>

                        <FooterLinksItems>
                            <SocialMediaWrap>
                                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                    <InstagramIcon />
                                </SocialIconLink>

                                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                    <TwitterIcon />
                                </SocialIconLink>

                                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                    <FacebookOutlinedIcon />
                                </SocialIconLink>
                            </SocialMediaWrap>
                        </FooterLinksItems>
                    </FooterLinksWrapper>

                    <BreakLine>
                    </BreakLine>

                    <WebsiteLegals>
                        <FooterSecondLinksItems>
                            <FooterLink to="/">Legal</FooterLink>
                            <FooterLink to="/">Privacy Policy</FooterLink>
                            <FooterLink to="/">Cookies</FooterLink>
                            <FooterLink to="/">About Ads</FooterLink>
                            <FooterLink to="/">Accessibility</FooterLink>
                        </FooterSecondLinksItems> 

                        <WebsiteRights>
                        © 2023 Spotfiy AB
                        </WebsiteRights>
                    </WebsiteLegals>
                </styleComponent>
            </FooterLinksContainer>
        </FooterWrap>
    </FooterContainer>
  )
}

export default AboutUs