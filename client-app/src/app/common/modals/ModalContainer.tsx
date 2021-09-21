import { observer } from "mobx-react-lite";
import React from "react";
import {  Modal } from "semantic-ui-react";
import { useStore } from "../../stores/store";


// interface Props {
//     buttonContent: string,
//     headerContent:string,
//     body: JSX.Element | null;{ buttonContent,headerContent, body }: Props
// }

export default observer(function ModalContainer() {

    const { modalStore } = useStore();
    const { openState, bodyContent, setState } = modalStore;
    return (
        <Modal
            centered={false}
            open={openState}
            onClose={() => setState(false)}
            onOpen={() => setState(true)}
            dimmer='blurring'
            size='mini'>

            <Modal.Content>
                {bodyContent}
            </Modal.Content>

        </Modal>
    )
})