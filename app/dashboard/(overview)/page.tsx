import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart'; // componant that show revernue chart
import LatestInvoices from '@/app/ui/dashboard/latest-invoices'; //import show the lastest invoice
import { lusitana } from '@/app/ui/fonts'; // font style that import to use for the header
import { Suspense } from 'react'; // to warp the component that will streaming load
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton, } from '@/app/ui/skeletons'; // loading skeleton
 
export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>  {/*warp by suspens*/}
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}