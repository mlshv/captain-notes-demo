import React from 'react'
import styled from 'styled-components'
import { Card } from '@blueprintjs/core'

const CardStyled = styled(Card)`
    margin-top: 16px;
`

export function NoteCard(props) {
    return <CardStyled>
        <p>{props.text}</p>
        <em>Температура за бортом: {props.temp}°C</em>
    </CardStyled>
}
