import { Checkbox, FormControl } from '@contentful/f36-components';
import { FieldValues, useController } from 'react-hook-form';
import { colorGray } from '../../styles';
import { ControlledCheckboxProps } from './ControlledCheckbox.types';

export const ControlledCheckbox = <T extends FieldValues>({ label, ...props }: ControlledCheckboxProps<T>) => {
  const {
    field: { ref, value, ...inputProps },
  } = useController(props);

  return (
    <FormControl marginBottom="none">
      <Checkbox {...inputProps} ref={ref} isChecked={value} isDisabled={inputProps.disabled}>
        <span css={[inputProps.disabled && colorGray]}>{label}</span>
      </Checkbox>
    </FormControl>
  );
};