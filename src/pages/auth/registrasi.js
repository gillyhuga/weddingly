import Main from '@/components/pages/registrasi/Main';
import SideMain from '@/components/pages/registrasi/SideMain';

export default function Registrasi() {
    return (
        <div className="bg-white dark:bg-white">
            <div className="flex justify-center h-screen">
                <Main />
                <SideMain />
            </div>
        </div>
    )
}
