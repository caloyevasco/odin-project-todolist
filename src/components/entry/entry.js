import "./entry-component.css";

const EntryCheckBox = (todo, setCheckCallback) => {
    const checkBoxInput = document.createElement('input');
    checkBoxInput.checked = todo.isChecked;
    checkBoxInput.type = 'checkbox';
    checkBoxInput.className = 'entry-checkbox';
    checkBoxInput.addEventListener('click', () => {
        setCheckCallback(todo, checkBoxInput.checked)
    })
    return checkBoxInput;
}

const EntryContent = (content, isChecked, createdAt, selectCallback, id) => {

    const entryContent = document.createElement('p');

    if(isChecked) entryContent.style.textDecoration = "line-through";

    entryContent.addEventListener('click', () => {
        selectCallback({
            isChecked: isChecked,
            content: content,
            createdAt: createdAt,
            id: id
        });
    });
    entryContent.textContent = content;
    entryContent.className = 'entry-content';
    return entryContent
}

const EntryCreatedAt = (createdAt) => {
    const createdAtContent = document.createElement('p');
    createdAtContent.textContent = createdAt;
    createdAtContent.className = 'entry-date';
    return createdAtContent;
}


export const Entry = (todos, selectCallback, setCheckCallback) => {
    const container = document.createElement('div');

    console.log(todos);

    container.className = 'entry-container';
    container.append(EntryCheckBox(todos, setCheckCallback));
    container.append(EntryContent(todos.content, todos.isChecked, todos.createdAt, selectCallback, todos.id));
    container.append(EntryCreatedAt(todos.createdAt));
    return container;
}
