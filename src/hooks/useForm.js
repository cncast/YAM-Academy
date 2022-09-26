import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {}) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setFormValidation ] = useState({});

    useEffect(() => {
        createValidators();
    }, [ formState ])

    useEffect(() => {
        setFormState( initialForm );
    }, [ initialForm ])
    
    
    const isFormValid = useMemo( () => {

        for (const formValue of Object.keys( formValidation )) {
            if ( formValidation[formValue] !== null ) return false;
        }

        return true;
    }, [ formValidation ])


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }
    const onDatepickerChange = (date, name) => {
        setFormState({
            ...formState,
            [ name ]: date
        });
    }
    const onCheckboxChange = ({ target }, actualObject = {}) => {
        const fieldName = target.parentNode.parentNode.getAttribute('name');
        const isChecked = target.checked;
        const checkValue = target.value;
        setFormState({
            ...formState,
            [ fieldName ]: {
                ...actualObject,
                [checkValue]: isChecked
            }
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {
        
        const formCheckedValues = {};
        
        for (const formField of Object.keys( formValidations )) {
            const [ fn, errorMessage ] = formValidations[formField];

            formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;
        }

        setFormValidation( formCheckedValues );
    }



    return {
        ...formState,
        formState,
        onInputChange,
        onDatepickerChange,
        onResetForm,
        onCheckboxChange,

        ...formValidation,
        isFormValid
    }
}