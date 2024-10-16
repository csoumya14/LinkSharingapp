import { FC } from 'react';
import { Banner } from '../../Atoms/Banner/Banner';
import { LinkForm } from '../LinkForm/LinkForm';

interface AddLinksProps {}
export const AddLinks: FC<AddLinksProps> = () => {
  return (
    <div>
      <Banner textLevel="h2">Customize your links</Banner>
      <Banner textLevel="p">
        Customize your links Add/edit/remove links below and then share all your profiles with the
        world!
      </Banner>
      <LinkForm />
    </div>
  );
};
