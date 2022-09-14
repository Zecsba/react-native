import { Modal } from "react-native"

const ComponentModal = ({ children, visible, animationType, onRequestClose }) =>{
    return(
        <Modal
            animationType={animationType}
            visible={visible}
            onRequestClose={onRequestClose}
        >
            {children}
        </Modal>
    )   
}

export default ComponentModal