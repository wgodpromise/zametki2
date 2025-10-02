const tags = ['Все', 'Идеи', 'Личное', 'Работа']
const notes = [
    {
    title: 'Сдать отчёт',
    tag: 'Работа',
    uptadeAt: new Date()
},
    {
    title: 'Сдать отчёт',
    tag: 'Работа',
    uptadeAt: new Date()
},
]

function createNote(notes) {
    const element = document.createElement('div')
    element.classList.add('NoteBoxItem')
    
    const title = document.createElement('span')
    title.innerHTML = '1'
    title.classList.add('NoteTitle')
    
    const date = document.createElement('span')
    date.classList.add('NoteData')

    const tag = document.createElement('span')
    tag.classList.add('NoteTag')

    element.appendChild(title)
    element.appendChild(date)
    element.appendChild(tag)
    return element
}


function render() { 
    list.innerHTML= ''
    for (let i of notes) {
        const element = createNote(i)
        list.appendChild(element)
    }
}

function init() {
    render()
}

init()
