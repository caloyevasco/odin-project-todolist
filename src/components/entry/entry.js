import "./entry-component.css";

const EntryCheckBox = (isChecked) => {
    const checkBoxInput = document.createElement('input');
    checkBoxInput.type = 'checkbox';
    checkBoxInput.className = 'entry-checkbox';
    return checkBoxInput;
}

const EntryContent = (content) => {
    const entryContent = document.createElement('p');
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


export const Entry = (isChecked, content, createdAt, selectCallback, id) => {
    const container = document.createElement('div');
    container.addEventListener('click', () => {
        selectCallback({
            isChecked: isChecked,
            content: content,
            createdAt: createdAt,
            id: id
        });
    });
    container.className = 'entry-container';
    container.append(EntryCheckBox(false));
    container.append(EntryContent(content));
    container.append(EntryCreatedAt(createdAt));
    return container;
}
