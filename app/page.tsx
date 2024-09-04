import { useUser, useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import React from 'react';

const HomePage = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const { signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push('/sign-in'); // Chuyển hướng đến trang đăng nhập
  };

  if (!isLoaded) {
    return <p>Đang tải...</p>;
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{isSignedIn ? 'Trang đã đăng nhập' : 'Trang chưa đăng nhập'}</h1>
      {isSignedIn ? (
        <div>
          <button onClick={handleSignOut}>Đăng xuất</button>
        </div>
      ) : (
        <div>
          <a href="/sign-in">Đăng nhập</a>
        </div>
      )}
    </div>
  );
};

export default HomePage;