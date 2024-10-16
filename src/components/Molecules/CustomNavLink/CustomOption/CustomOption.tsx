import { FC } from 'react';
import { OptionProps } from 'react-select';

interface CustomOptionProps {
  label: string;
  icon?: React.ReactNode;
}

export const CustomOption: FC<OptionProps<CustomOptionProps, false>> = props => {
  const { data, innerRef, innerProps } = props;

  return (
    <div ref={innerRef} {...innerProps}>
      {data.icon && <span className="input-select__icon">{data.icon}</span>}
      <span>{data.label}</span>
    </div>
  );
};
