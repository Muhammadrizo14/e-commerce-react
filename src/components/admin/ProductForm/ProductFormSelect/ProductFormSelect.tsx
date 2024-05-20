import {Option} from '../../../../types/common';
import Select from '../../../UI/Select/Select';
import classes from './ProductFormSelect.module.css';
import {log} from "util";
import {useEffect} from "react";

interface IProductFormSelectProps {
  options: Option[];
  defaultOptionText: string;
  isDisabled?: boolean;
  label: string;
  required?: boolean;
  onSelect: (option: { [key: string]: string }) => void;
  value: string;
  field: string;
  errorText?: string;
  hidden?: boolean
}

const ProductFormSelect: React.FC<IProductFormSelectProps> = ({
                                                                label,
                                                                required,
                                                                errorText,
                                                                onSelect,
                                                                options,
                                                                value,
                                                                field,
                                                                defaultOptionText,
                                                                hidden
                                                              }) => {
  return (
    <div className={classes['product-form-select'] + ` ${hidden ?classes['dsnone']:''}`}>
      <span className={classes.label}>
        {label} {required && <span className={classes.highlighted}>*</span>}
      </span>

      <Select
        label={label}
        defaultOptionText={defaultOptionText}
        isDisabled={false}
        options={options}
        onSelect={onSelect}
        value={value || ''}
        errorText={errorText}
        field={field}
      />
      {errorText && <span className={classes.highlighted}>{errorText}</span>}
    </div>
  );
};

export default ProductFormSelect;
