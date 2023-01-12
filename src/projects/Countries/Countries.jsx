import Interface from "./interface/Interface";
import store from "./config/store";
import { Provider } from "react-redux";

const Countries = () => {
    return (
        <Provider store={store}>
            <Interface />
        </Provider>
    )
}

export default Countries;