import Sidebar from "./Sidebar";
import {connect} from "react-redux";

const mapState = (state) => {
    return {
        companionsData: state.dialogsPage.companionsData
    }
}

const SidebarContainer = connect(mapState)(Sidebar)
export default SidebarContainer;