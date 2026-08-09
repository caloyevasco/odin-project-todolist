import './create-entry.css'

export const CreateEntry = (callBack) => {
    const button = document.createElement('button');
    button.addEventListener('click', () => {
       callBack();
    })
    button.className = 'create-entry';
    button.innerText = '+'
    return button;
}