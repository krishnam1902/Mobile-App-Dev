import { ReactNode } from 'react';
import { ADMIN } from '../constants/constants';
import { createClient } from '../supabase/client';

export default async function AdminLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
   const supabase = createClient();
  
    const { data: authData } = await supabase.auth.getUser();
  
    if (authData?.user) {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', authData.user.id)
        .single();
  
      if (error || !data) {
        console.log('Error fetching user data', error);
        return;
      }
  
      if (data.type === ADMIN) return redirect('/');
    }
  
    return <>{children}</>;
  }

function redirect(arg0: string) {
  throw new Error('Function not implemented.');
}
