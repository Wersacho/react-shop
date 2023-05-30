import { useEffect } from "react";

function Alert(props) {
    const { name = "", closeAlert = Function.prototype } = props;

    useEffect(() => {
        const timeId = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timeId);
        };
    }, {name});
    
    return (
        <div className="toast-container">
            <div className="toast red darken-2">{name} добавлен в корзину</div>
        </div>
    );
}
export { Alert };