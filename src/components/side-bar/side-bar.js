import "./side-bar.css"
import { Entry } from "../entry/entry.js";

const Header = () => {
    const container = document.createElement('div');
    container.className = 'sidebar-header';

    const headerTitle = document.createElement('h1');
    headerTitle.textContent = "Todo's";

    container.append(headerTitle)
    return container;
}

const Create = () => {
    const button = document.createElement('button');
    button.textContent = '+';
    button.className = 'entry-create-button';
    return button;
}

export const SideBar = (todos) => {
    const container = document.createElement('div');
    container.className = 'sidebar'

    container.append(Header());

    const tasks = todos.map((curr) => Entry(
        curr.isChecked,
        curr.content,
        curr.createdAt,
        curr.selectedCallback,
        curr.id
    ))

    container.append(...tasks);

    return container;
}