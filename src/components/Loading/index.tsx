import React from 'react'
import { TailSpin } from 'react-loader-spinner'
import { LoadingStyles } from './styles'

interface ILoadingProps {
    visible: boolean
}

export const Loading = ({ visible }: ILoadingProps) => {
    return (
        <>
            {visible && (
                <LoadingStyles>
                    <TailSpin color="var(--blue)" height={80} width={80} />
                </LoadingStyles>
            )}
        </>
    )
}
