import React from "react";
import {
  TempBox,
  TempFlex,
  TempImg,
  TempLinearText,
  TempTitle,
} from "../../components/styled_components/globalStyles";
import Logo from '../../../public/assets/images/logo.png'
import { colorTokens } from "../../context/theme/themeConfig";

const NavLogo = () => {
  return (
    <TempFlex sm_dir='row' gap="0px">
      <TempBox w='50px' h='50px'><TempImg src={Logo} sw='35px' width='100%'></TempImg></TempBox>
      <TempBox>
        <TempTitle color={colorTokens.drops[200]} ls=".5rem" fs="clamp(1rem,10vw,1.5rem)">
          yncorb
        </TempTitle>
      </TempBox>
    </TempFlex>
  );
};

export default NavLogo;
