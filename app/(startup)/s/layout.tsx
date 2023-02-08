import RouteGuard from '@/components/RouteGuard';
import React from 'react';

export default function StartupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RouteGuard allowedRoles={['startup']}>{children}</RouteGuard>;
}
