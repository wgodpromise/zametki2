const list = document.getElementById('list')
const BtnSearch = document.getElementById('ButtonSearch')
const SearchText = document.getElementById('searchText')
const menu = document.getElementById('TagsList')
const overlay = document.getElementById('overlay')
const modalTitle = document.getElementById('ModalTitle')
const modalSelect = document.getElementById('ModalSelect')
const modalSaveBtn = document.getElementById('ModalButtonSave')
const modalForm = document.getElementById('modal-form')
const btnNote = document.getElementById('newNoteButton')
const btnModalClose = document.getElementById('btnModalClose')

let btnDel = null
let editingItem = null
let maxId = null
let activeTag = 1

const tags = [
    {
        id: 1,
        title: 'Все'
    },
    {
        id: 2,
        title: 'Идеи'
    },
    {
        id: 3,
        title: 'Личное'
    },
    {
        id: 4,
        title: 'Работа'
    }
]
const notes = [
    {
        title: 'Сдать отчёт',
        tag: 'Работа',
        updateAt: new Date().toDateString()
    },
    {
        title: 'ASDFСдать отчётadf',
        tag: 'Работа',
        updateAt: new Date().toDateString()
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



function getMaxId() {
    let max = 0
    for (let i of notes) {
        if (i.id > max) {
            max = i.id
        }
    }
    return max
}

function createTag(tag) {
    const element = document.createElement('ul')
    element.classList.add('TagsButton')
    element.innerText = tag.title
    return element
}

function renderMenu() {
    for (let tag of tags) {
        const element = createTag(tag)
        element.addEventListener('click', () => {
            activeTag = tag.id
            render()
        })
        menu.appendChild(element)
    }
}

function NotesFilter() {
    return notes.filter((e) => e.title.startsWith(SearchText.value))
}

function render() {
    list.innerHTML = ''
    let filtered = NotesFilter(SearchText.value)
    if (activeTag !== 1) {
        filtered = filtered.filter(i => i.tag === activeTag)
    }
    if (filtered.length === 0) {
        list.innerText = 'Ничего не найдено'
        return
    }
    for (let i of filtered) {
        const element = createNote(i)
        list.appendChild(element)
    }
}

function openModal() {
    overlay.classList.add('overlayOpened')
    modalTitle.value = editingItem.title
    for (let tag of tags) {
        const option = document.createElement('option')
        option.value = tag.id
        option.innerText = tag.title
        modalSelect.appendChild(option)
    }
}

function init() {
    maxId = getMaxId()
    renderMenu()
    render()
    BtnSearch.addEventListener('click', render)
    btnNote.addEventListener('click', () => {
        editingItem = {
            id: null,
            title: null,
            tag: null,
            updatedAt: new Date().toDateString()
        }
        openModal()
    })
    btnModalClose.addEventListener('click', closeModal)
}

function closeModal() {
    overlay.classList.toggle('overlayOpened')
    modalSelect.innerHTML = ''
    editingItem = null
    // btnDel.remove()
    //TODO clear form
}

init()
