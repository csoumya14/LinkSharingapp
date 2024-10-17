import { styled } from 'styled-components';
import { Banner } from '../../Atoms/Banner/Banner';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

export const StyledHeading = styled(Banner)`
  font-size: ${props => props.theme.typography.headingM};
`;

export const StyledPara = styled(Banner)`
  font-size: ${props => props.theme.typography.bodyM};
`;
