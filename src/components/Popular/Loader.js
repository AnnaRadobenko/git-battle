import { Puff } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <Puff
                height="100"
                width="100"
                radisu={1}
                color="#4fa94d"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
)}

export default Loader;