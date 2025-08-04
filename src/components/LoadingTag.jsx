import { Trefoil } from 'ldrs/react'
const LoadingTag = () => {
    return (<>
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 dark:bg-slate-400 bg-slate-500 opacity-50">
            <Trefoil
                size="40"
                stroke="4"
                strokeLength="0.15"
                bgOpacity="0.1"
                speed="1.4"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
        </div>
    </>)
}
export default LoadingTag