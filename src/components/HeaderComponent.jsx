import {HeaderButtonMetaComponent} from "../meta-components/buttons/HeaderButtonMetaComponent";
import { VISIBLE_MENU_ITEMS} from "../config/config";
import {useSelector} from "react-redux";

export const HeaderComponent = ({...rest}) => {
    let menuSections = VISIBLE_MENU_ITEMS.loggedOut;
    const loginSlice = useSelector(state => state.loginSlice);
    if (loginSlice.isLoggedIn === true) {
       menuSections = VISIBLE_MENU_ITEMS.loggedIn;
    }
    let className = "sticky top-0 px-10 py-6 pt-6 lg:pt-8  backdrop-blur-2xl text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200 border-b border-slate-900/10 z-30  w-full";
    if(rest.fixed){
        className = "fixed top-0 px-10 py-6 pt-6 lg:pt-8  backdrop-blur-2xl text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200 border-b border-slate-900/10 z-30  w-full";
    }
    return (
        <div className={className}>
                <header className={"flex justify-between"} >
                    <nav >
                        <ul className={"flex items-center gap-x-8"}>
                            {menuSections.map((section, index) => {
                                return <HeaderButtonMetaComponent key={index} url={section.path} buttonLabel={section.name}/>
                            })}
                        </ul>
                    </nav>
                </header>
        </div>


    )
}