import {Group,StyledFormInput} from './form-input.styles'; 

const FormInput = ({handleChange, label, ...otherProps}) => (
    <Group>
        <StyledFormInput onChange={handleChange} {...otherProps}/>
        { 
            label ? 
            (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>) : null 
        }
    </Group>
) 

export default FormInput; 