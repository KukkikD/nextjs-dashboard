'use client';

import { CustomerField, InvoiceForm } from '@/app/lib/definitions';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateInvoice } from '@/app/lib/actions';

export default function EditInvoiceForm({
  invoice,
  customers,
}: {
  invoice: InvoiceForm;
  customers: CustomerField[];
}) {
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);

  return (
    <form action={updateInvoiceWithId} className="space-y-4">
      {/* Customer Select */}
      <div>
        <label htmlFor="customerId" className="block text-sm font-medium">
          Customer
        </label>
        <select
          id="customerId"
          name="customerId"
          defaultValue={invoice.customer_id}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        >
          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {customer.name}
            </option>
          ))}
        </select>
      </div>

      {/* Amount Input */}
      <div>
        <label htmlFor="amount" className="block text-sm font-medium">
          Amount ($)
        </label>
        <input
          id="amount"
          name="amount"
          type="number"
          step="0.01"
          defaultValue={(invoice.amount / 100).toFixed(2)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>

      {/* Status Radio */}
      <div>
        <label className="block text-sm font-medium">Status</label>
        <div className="mt-1 flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="status"
              value="pending"
              defaultChecked={invoice.status === 'pending'}
              className="mr-2"
            />
            Pending
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="status"
              value="paid"
              defaultChecked={invoice.status === 'paid'}
              className="mr-2"
            />
            Paid
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <div>
        <Button type="submit">Update Invoice</Button>
      </div>
    </form>
  );
}
