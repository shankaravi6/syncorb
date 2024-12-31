import React from 'react'
import { TempCard, TempFlex, TempLinearText, TempSection, TempSubTitle, TempTypography } from '../../components/styled_components/globalStyles'
import { Fade } from 'react-awesome-reveal'
import { GrAchievement } from "react-icons/gr";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { TbApps } from "react-icons/tb";

const WhoWeSection = () => {
  return (
    <TempSection p="5rem 0 0 0">
      <Fade>
      <TempFlex dir='column' gap='0rem'>
        <TempSubTitle fs='clamp(2rem, 5vw, 5rem)'>WHO WE ARE</TempSubTitle>
        <TempLinearText fs='clamp(1rem, 10vw, 2rem)' >We always try to understand users expectation</TempLinearText>
      </TempFlex>
      <TempFlex dir='column' gap='2em' p='4rem 0'>
        <TempTypography>
        At Syncorb Every Developement is done with the thought to Exceed the Customer Expectations.
        </TempTypography>
        <TempFlex gap='clamp(2rem, 10vw, 5rem)' p='3rem 0'>
            <TempCard br='0.5rem' className='flex justify-center items-center' w='270px' h='250px' p='2.5rem'>
            <TempFlex dir='column' gap='1rem'>
                <GrAchievement style={{fontSize:"5rem", color:"#aeadab"}}/>
                <TempLinearText>2+ Years</TempLinearText>
                <TempTypography>Experience</TempTypography>
            </TempFlex>
            </TempCard>
            <TempCard br='0.5rem' className='flex justify-center items-center' w='270px' h='250px' p='2.5rem'>
            <TempFlex dir='column' gap='1rem'>
                <HiOutlineUserGroup style={{fontSize:"5rem", color:"#aeadab"}}/>
                <TempLinearText>20+</TempLinearText>
                <TempTypography>Team Members</TempTypography>
            </TempFlex>
            </TempCard>
            <TempCard br='0.5rem' className='flex justify-center items-center' w='270px' h='250px' p='2.5rem'>
            <TempFlex dir='column' gap='1rem'>
                <TbApps style={{fontSize:"5rem", color:"#aeadab"}}/>
                <TempLinearText>15+</TempLinearText>
                <TempTypography>Projects</TempTypography>
            </TempFlex>
            </TempCard>
        </TempFlex>
      </TempFlex>
      </Fade>
      </TempSection>
  )
}

export default WhoWeSection
