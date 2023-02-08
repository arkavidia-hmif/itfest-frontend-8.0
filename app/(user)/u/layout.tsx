import RouteGuard from '@/components/RouteGuard';
import React from 'react';

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RouteGuard allowedRoles={['user']}>{children}</RouteGuard>;
}
