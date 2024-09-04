// app/profile/page.tsx
import { useUser } from '@clerk/nextjs';
import React from 'react';

const ProfilePage = () => {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <p>Đang tải thông tin người dùng...</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      {isSignedIn ? (
        <>
          <h1>Thông tin cá nhân</h1>
          <p>Họ và tên: {user.firstName} {user.lastName}</p>
          <p>Email: {user.emailAddresses[0].emailAddress}</p>
        </>
      ) : (
        <p>Bạn chưa đăng nhập.</p>
      )}
    </div>
  );
};

export default ProfilePage;