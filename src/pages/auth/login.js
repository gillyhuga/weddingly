import Main from '@/components/pages/login/Main';
import SideMain from '@/components/pages/login/SideMain';

export default function Login() {
    return (
       <div className="bg-white dark:bg-white">
          <div className="flex justify-center h-screen">
             <SideMain />
             <Main />
          </div>
       </div>
    )
  }
  