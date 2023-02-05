import RouteGuard from '@/components/RouteGuard';
import React from 'react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RouteGuard allowedRoles={['admin']}>{children}</RouteGuard>;
}
