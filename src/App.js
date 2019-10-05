import React from 'react'
import 'normalize.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'

import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Button, EditableText, Card, H1 } from '@blueprintjs/core'
import { useWeather } from './useWeather'
import { NoteCard } from './NoteCard'
import { loadNotes, saveNotes } from './utils/storage'

const Container = styled.div`
    padding: 32px 0;
`

function App() {
    const [text, setText] = React.useState('')
    const [notes, setNotes] = React.useState(loadNotes())
    const weather = useWeather()

    console.log(weather)

    const onAddNote = () => {
        setNotes([{ text, temp: weather.temp2m }, ...notes])
    }

    React.useEffect(() => {
      saveNotes(notes)
    }, [notes])

    return (
        <Container>
            <Grid>
                <Row>
                    <Col xs={12}>
                        <EditableText
                            multiline
                            placeholder="Введите текст"
                            minLines={3}
                            value={text}
                            onChange={setText}
                        />
                        <Button onClick={onAddNote}>Добавить заметку</Button>
                    </Col>
                </Row>
                <Row>
                    {notes.map(note => (
                        <Col xs={12} md={6} lg={3}>
                            <NoteCard text={note.text} temp={note.temp} />
                        </Col>
                    ))}
                </Row>
            </Grid>
        </Container>
    )
}

export default App
