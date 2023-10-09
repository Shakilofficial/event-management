
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className="max-w-[1340px] mx-auto font-poppins">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;