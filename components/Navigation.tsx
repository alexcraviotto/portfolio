import { useRouter } from 'next/router';
export default function Navigation() {

    const router = useRouter();
    const actualPath = router.asPath;


    interface INavigationOnClick {
        path: string,
    }

    interface INavigationRenderButton extends INavigationOnClick {
        label: string
    }

    function handleOnClick({ path }: INavigationOnClick) {
        if (path == '/')
            router.push(path)
        if (path == '/projects')
            router.push(path)
        if (path == '/contact')
            router.push(path)
    }

    function renderButton({ path, label }: INavigationRenderButton) {
        const isActive = actualPath === path;

        return (
            <button onClick={() => handleOnClick({ path })}>
                <span className={isActive ? 'underline' : 'no-underline'}>{label}</span>
            </button>
        );
    }

    return (
        <div className='absolute flex justify-between space-x-14 text-xs lg:bottom-64 bottom-52  '>
            {renderButton({ path: '/', label: '/home' })}
            {renderButton({ path: '/projects', label: '/projects' })}
            {renderButton({ path: '/contact', label: '/contact' })}
        </div>
    );
}