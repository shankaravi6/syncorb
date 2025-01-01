import React, {memo} from 'react';
import { TempBox, TempFlex, TempGrid, TempImg, TempSection, TempSubTitle } from '../../components/styled_components/globalStyles';
import Logo1 from '../../../public/assets/images/clients/logo_1.png';
import Logo2 from '../../../public/assets/images/clients/logo_2.webp';
import Logo3 from '../../../public/assets/images/clients/logo_3.png';
import Logo4 from '../../../public/assets/images/clients/logo_4.png';
import Logo5 from '../../../public/assets/images/clients/logo_5.png';
import Logo6 from '../../../public/assets/images/clients/logo_6.png';
import Logo7 from '../../../public/assets/images/clients/logo_7.png';
import Logo8 from '../../../public/assets/images/clients/logo_8.png';

import './ClientSection.css'


const ClientSection = () => {
  return (
    <TempSection p='5rem 0'>
      <TempFlex>
        <TempSubTitle fs='clamp(2rem, 5vw, 5rem)'>
            OUR CLIENTS
        </TempSubTitle>
      </TempFlex>
      <TempFlex className='flex-wrap' p='4rem 0 0 0' gap='clamp(3.5rem, 5vw, 5rem)'>
            <TempBox className='logo-gray' w='15%' h='15%' sw='50%' sh='50%'>
                <TempImg src={Logo1} />
            </TempBox>
            <TempBox className='logo-gray' w='10%' h='10%' sw='25%' sh='50%'>
                <TempImg src={Logo3} />
            </TempBox>
            <TempBox className='logo-gray' w='15%' h='15%' sw='50%' sh='50%'>
                <TempImg src={Logo2} />
            </TempBox>
            <TempBox className='logo-gray' w='10%' h='10%' sw='25%' sh='50%'>
                <TempImg src={Logo4} />
            </TempBox>
            <TempBox className='logo-gray' w='15%' h='15%' sw='50%' sh='50%'>
                <TempImg src={Logo5} />
            </TempBox>
            <TempBox className='logo-gray' w='15%' h='15%' sw='50%' sh='50%'>
                <TempImg src={Logo6} />
            </TempBox>
            <TempBox className='logo-gray' w='15%' h='15%' sw='50%' sh='50%'>
                <TempImg src={Logo7} />
            </TempBox>
            <TempBox className='logo-gray' w='15%' h='15%' sw='50%' sh='50%'>
                <TempImg src={Logo8} />
            </TempBox>
        </TempFlex>
    </TempSection>
  );
}

export default memo(ClientSection);
