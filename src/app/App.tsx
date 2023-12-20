import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider/ui';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useState } from 'react';
import PageLoader from 'shared/ui/PageLoader/PageLoader';
import { Modal } from 'shared/ui/Modal/Modal';
import { AppRouter } from './providers/router';

const App = () => {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames(
            'app',
            { hovered: true, selected: true },
            [theme],
        )}
        >
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <button onClick={() => (setIsOpen(true))}>toogle</button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum non animi totam dolores repellendus rem expedita aperiam cum, similique incidunt! Et, voluptas earum! Eaque ex voluptatibus architecto culpa, obcaecati quia!</Modal>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
