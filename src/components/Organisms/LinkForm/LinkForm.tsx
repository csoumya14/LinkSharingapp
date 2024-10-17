import { FC } from 'react';
import { useForm, SubmitHandler, useFieldArray, Controller } from 'react-hook-form';
import Select from 'react-select';
import { CustomOption } from '../../Molecules/CustomNavLink/CustomOption/CustomOption';
import { Github } from '../../Atoms/SVGs/Github/Github';
import { FrontendMentor } from '../../Atoms/SVGs/FrontendMentor/FrontendMentor';
import { Button } from '../../Atoms/Button/Button';
import { StyledButton } from './LinkForm.style';
import { Drag } from '../../Atoms/SVGs/Drag/Drag';

interface LinkFormProps {}

// Define a type for the form data
interface FormData {
  links: {
    platform: { value: string; label: string } | null;
    link: string;
  }[];
}

const platformOptions = [
  { value: 'github', label: 'GitHub', icon: <Github /> },
  { value: 'frontendmentor', label: 'Frontend Mentor', icon: <FrontendMentor /> },
  /* { value: 'linkedin', label: 'LinkedIn' },
  { value: 'facebook', label: 'Facebook' },
  { value: 'instagram', label: 'Instagram' }, */
];

export const LinkForm: FC<LinkFormProps> = () => {
  // React Hook Form setup
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      links: [{ platform: null, link: '' }], // Initialize with one set of fields
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'links',
  });
  // Handle form submission
  const onSubmit: SubmitHandler<FormData> = data => {
    console.log('Form Data:', data);
    // Perform any additional actions such as API calls here

    // Reset the form after submission
    reset();
  };

  // Handle adding a new set of fields
  const handleAddNewLinkClick = () => {
    append({ platform: null, link: '' }); // Append a new set of fields
  };

  return (
    <div>
      <StyledButton variant="secondary" onClick={handleAddNewLinkClick}>
        + Add New Link
      </StyledButton>

      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((_field, index) => (
          <div style={{ marginBottom: '20px' }} key={index}>
            <label>Platform:</label>
            <Controller
              name={`links.${index}.platform`}
              control={control}
              rules={{ required: 'Platform is required' }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={platformOptions}
                  components={{ Option: CustomOption }}
                  isClearable
                  placeholder="Select a platform"
                />
              )}
            />
            {errors.links?.[index]?.platform && <p>{errors.links[index].platform?.message}</p>}

            <div>
              <label>Link:</label>
              <input
                type="url"
                {...register(`links.${index}.link`, {
                  required: 'Link is required',
                  pattern: {
                    value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,
                    message: 'Enter a valid URL',
                  },
                })}
                placeholder="Enter a link"
              />
              {errors.links?.[index]?.link && <p>{errors.links[index].link?.message}</p>}
            </div>
            <button type="button" onClick={() => remove(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
