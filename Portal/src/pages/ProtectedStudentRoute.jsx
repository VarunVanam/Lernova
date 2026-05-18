import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getProfile } from '../services/api';

function ProtectedStudentRoute({ children }) {
  const [authState, setAuthState] = useState({
    loading: true,
    isStudent: false
  });

  useEffect(() => {
    let isMounted = true;

    const run = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        if (isMounted) setAuthState({ loading: false, isStudent: false });
        return;
      }

      try {
        const res = await getProfile();
        const role = res?.data?.user?.role;
        const isStudent = role === 'student';
        if (isMounted) setAuthState({ loading: false, isStudent });
      } catch (e) {
        if (isMounted) setAuthState({ loading: false, isStudent: false });
      }
    };

    run();
    return () => {
      isMounted = false;
    };
  }, []);

  if (authState.loading) return null;

  if (!localStorage.getItem('token')) return <Navigate to="/login" replace />;
  if (!authState.isStudent) return <Navigate to="/" replace />;

  return children;
}

export default ProtectedStudentRoute;

