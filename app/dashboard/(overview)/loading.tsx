import DashboardSkeleton from '@/app/ui/skeletons';
export default function Loading() {
    return <DashboardSkeleton />;//it is special file built on top of the suspence allows to create the fallback ui when your web content is rendering or loading 
  }