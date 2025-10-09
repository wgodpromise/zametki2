// const BtnSearch = document.getElementById('ButtonSearch')
const list = document.getElementById('list')
// const tags = ['Все', 'Идеи', 'Личное', 'Работа']
const BtnSearch = document.getElementById('ButtonSearch')
const SearchText = document.getElementById('searchText')
// const list = document.getElementById('list')
let activeTag = 1
const tags = ['Все', 'Идеи', 'Личное', 'Работа']
const notes = [
    {
        title: 'Сдать отчёт',
        tag: 'Работа',
        updateAt: new Date()
    },
    {
        title: 'ASDFСдать отчётadf',
        tag: 'Работа',
        updateAt: new Date()
    },
]

function createNote(note) {

    const element = document.createElement('div')
    element.classList.add('NoteBoxItem')

    const title = document.createElement('span')
    title.innerText = note.title
    title.classList.add('NoteTitle')

    const date = document.createElement('span')
    date.classList.add('NoteData')
    date.innerText = note.updateAt

    const tag = document.createElement('span')
    tag.innerText = note.tag
    tag.classList.add('NoteTag')

    element.appendChild(title)
    element.appendChild(date)
    element.appendChild(tag)

    return element
}



function NotesFilter() {
    return notes.filter((e) => e.title.startsWith(SearchText.value))
}

function render() {
    list.innerHTML = ' '
    let renderArr = notes
    if (SearchText.value.length) {
        renderArr = NotesFilter()
    }
    for (const note of renderArr) {
        const zametka = createNote(note)
        list.appendChild(zametka)
    }


}

function init() {
    render()
    BtnSearch.addEventListener('click', render)
}

init()
