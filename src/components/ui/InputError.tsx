import {Fragment}  from 'react'

type IInputProps = {
    error: any 
}

const InputError = ({ error }: IInputProps) =>{
    const isError = !!error

    return (
        <Fragment>
            {isError &&
                <span className='flex items-center font-medium tracking-wide text-red-500 text-xs'>
                    {error}
                </span>
            }
        </Fragment>
    )
}

export default InputError