import {Modal} from "@/components";
import {useModal} from "@/store/ModalContext";

interface Props {
    onClose:()=>void;

}

export function LoginModal({onClose}: Props) {

    const {openModal}= useModal()
    return (
        <Modal title={'salam'} closeModal={(onClose)}>
            <div className={'grid grid-rows-4 justify-between'}>
                <form className={'row-span-3'}>

                </form>
                <span onClick={()=>openModal('register')} className={ 'row-span-1 bg-amber-500 p-3 rounded'}>do not have account yet?</span>
            </div>
        </Modal>
    );
}