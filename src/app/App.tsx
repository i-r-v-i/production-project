import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider/ui';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import PageLoader from 'shared/ui/PageLoader/PageLoader';
import { AppRouter } from './providers/router';

const App = () => {
    const { theme } = useTheme();
    useEffect(() => {
        if (Math.random() < 0.5) {
            throw new Error();
        }
    });
    return (
        <div className={classNames(
            'app',
            { hovered: true, selected: true },
            [theme],
        )}
        >
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
