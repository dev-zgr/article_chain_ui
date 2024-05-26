import {useEffect} from "react";
import {loginActions} from "../../store/store/AccountDetailsSlice";
import {UIActions} from "../../store/store/UISlice";
import {MODAL_CODES} from "../../config/config";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {InfoModalComponent} from "../../components/modals/InfoModalComponent";

export const LogoutPage = () => {
    const accountSlice = useSelector(state => state.accountDetailsSlice);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const UISlice = useSelector(state => state.UISlice);


    const toggleModal = () => {
        dispatch(UIActions.hideModal());
    }

    useEffect(() => {
            dispatch(loginActions.logout());
            dispatch(UIActions.showModal(MODAL_CODES.LOGOUT_UI_ACTION_200));
            setTimeout(() => {
                dispatch(UIActions.hideModal());
                navigate("/");
            }, 2000);
    }, [accountSlice, dispatch, navigate]);

    return (
        <>
            {
                UISlice.showModal && UISlice.opcode === MODAL_CODES.LOGOUT_UI_ACTION_200 &&
                <InfoModalComponent
                    header={"You've Logged out Successfully"}
                    message={"We're redirect you to home page!"}
                    toggleModal={toggleModal}
                />

            }
        </>
    )
}
