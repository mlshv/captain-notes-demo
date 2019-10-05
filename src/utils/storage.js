const NOTES_KEY = '@notes'

export function loadNotes() {
    return JSON.parse(localStorage.getItem(NOTES_KEY)) || []
}

export function saveNotes(notes) {
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes))
}
