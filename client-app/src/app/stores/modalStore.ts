import { makeAutoObservable } from "mobx"



export default class ModalStore {
    openState = false;
    bodyContent: JSX.Element | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    openModal = (state: boolean, content: JSX.Element | null) => {
        this.openState = state;
        this.bodyContent = content;
    }

    setState = (state: boolean) => {
        this.openState = state;
    }

    SetContent = (content: JSX.Element) => {
        this.bodyContent = content;
    }

    closeModal = () => {
        this.openState = false;
    }
}