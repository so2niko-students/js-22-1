import { useState } from "react";

const Show = ({ title, children }) => {
    const [isShow, setIsShow] = useState(false);

    return <div>
        <div>
            <button onClick={() => setIsShow(!isShow)}>{ isShow ? 'Hide' : 'Show' } {title}</button>
            </div>
        {isShow && children}
    </div>
}

export default Show;