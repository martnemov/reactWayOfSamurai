import Sidebar from "./Sidebar";
import {connect} from "react-redux";

let mapState = (state) => {
    return {
        companionsData: state.dialogsPage.companionsData
    }
}

const SidebarContainer = connect(mapState)(Sidebar)
export default SidebarContainer;