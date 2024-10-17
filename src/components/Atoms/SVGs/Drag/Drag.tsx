import { FC } from 'react';
import { CustomSvgIcon } from '../CustomSVGIcons/CustomSVGIcons';

type Props = {
  primaryColor?: ColorGamut;
  color?: string;
  width?: string;
  height?: string;
};

export const Drag: FC<Props> = () => (
  <CustomSvgIcon viewBox="0 0 30 30" width="30" height="30" title="Add links" id="add-links">
    <path fill="#737373" d="M0 0h12v1H0zM0 5h12v1H0z" />
  </CustomSvgIcon>
);
