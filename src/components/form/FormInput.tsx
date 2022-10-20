import { FC, Fragment, InputHTMLAttributes } from 'react'
import {isArray} from '../../utils/helper-functions'
import InputError from '../ui/InputError'

interface IFormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    label: string,
    className?: string,
    error?: any
}

let inputDefaultClasses = 'mt-1 block w-full px-3 py-2 bg-white border rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'

const FormInput: FC<IFormInputProps> = ({name, label, className, error, ...rest}) =>{
    const isError = !!(error || (isArray(error) && error.length))
    className = isError ? `${inputDefaultClasses} border-red-500 focus:border-red-600` : `${inputDefaultClasses} border-slate-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-500`

    return (
        <Fragment>
            <label htmlFor={name} className='form-label inline-block mb-1 text-gray-700'>
                {label}
            </label>
            <input 
                id={name}
                {...rest} 
                className={className}
            />
            <DisplayError isError={isError} error={error}/>
        </Fragment>
    )
}

const DisplayError = ({isError, error}:{isError:boolean, error:any}) => {
    return (
        <Fragment>
            {isError && isArray(error) ? error.map((err?:string, index?:number) => (
                <Fragment key={index}>
                    <InputError error={err}/>
                </Fragment>
            )) :
                <InputError error={error}/>
            }
        </Fragment>
    )
}

export default FormInput