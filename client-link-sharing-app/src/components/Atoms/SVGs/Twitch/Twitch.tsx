import { FC } from 'react';
import { CustomSvgIcon } from '../CustomSVGIcons/CustomSVGIcons';

type Props = {
  primaryColor?: ColorGamut;
  color?: string;
  width?: string;
  height?: string;
};

export const Twitch: FC<Props> = ({ color }) => (
  <CustomSvgIcon viewBox="-5 -5 30 20" width="30" height="20" title="Twitch logo" id="twitch">
    <path
      fill={color}
      d="M7.76 3.954h.954v2.853H7.76m2.62-2.854h.954v2.854h-.954M4.667 1.333l-2.38 2.38v8.574H5.14v2.38l2.387-2.38h1.9L13.714 8V1.333m-.954 6.194-1.9 1.9H8.954l-1.667 1.667V9.427H5.14v-7.14h7.62v5.24Z"
    />
  </CustomSvgIcon>
);