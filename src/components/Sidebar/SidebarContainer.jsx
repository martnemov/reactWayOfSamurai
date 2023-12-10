import React from 'react';
import Sidebar from "./Sidebar";
import StoreContext from "../../StoreContext";
const SidebarContainer = () => {
    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState();
            return <Sidebar companionsData={state.dialogsPage.companionsData}></Sidebar>
        }
        }
    </StoreContext.Consumer>
}
export default SidebarContainer;