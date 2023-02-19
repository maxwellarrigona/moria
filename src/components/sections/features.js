import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="features">
    <StyledContainer>
      <Subtitle>Features</Subtitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Ransomware Prevention</FeatureTitle>
          <FeatureText>
            Moria prevents hackers from accessing any data.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Data Access Monitoring</FeatureTitle>
          <FeatureText>
            Visualize who is accessing your data, and from where. 
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Live Attack Updates</FeatureTitle>
          <FeatureText>
            Real-time data attack detection and source tracking.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>IP Safeguard</FeatureTitle>
          <FeatureText>
            Internal vulnerabilities addressed with employee guard rails.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Biometric Authentication</FeatureTitle>
          <FeatureText>Ensure employee access with computer camera.</FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Professional Monitoring</FeatureTitle>
          <FeatureText>
            Let our team handle your security monitoring.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
