import { FC } from 'react';
import { Banner } from '../../Atoms/Banner/Banner';
import { LinkForm } from '../LinkForm/LinkForm';
import { StyledContainer, StyledHeading } from './AddLinks.style';

interface AddLinksProps {}
export const AddLinks: FC<AddLinksProps> = () => {
  return (
    <StyledContainer>
      <StyledHeading textLevel="h2">Customize your links</StyledHeading>
      <Banner textLevel="p">
        Add/edit/remove links below and then share all your profiles with the world!
      </Banner>
      <LinkForm />
    </StyledContainer>
  );
};
