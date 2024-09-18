import { useMemo, useState } from 'react';
import MultiStepFormModal from '../components/datepicker';

const people = [
  {
    id: 1,
    name: 'jacob',
    date: '22/03/2014',
    time: '10:30',
    location: 'UGMC',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
];

export default function AppointmentsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tableData = useMemo(
    () =>
      people.map(
        ({ id, name, location, date, time, image }) => ({
          id,
          name,
          location,
          date,
          time,
          image,
        })
      ),
    [people]
  );

  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
            My Appointments
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
              <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
                <div className="flex items-center justify-center bg-gray-100">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700"
                  >
                    Add Appointment
                  </button>
                </div>
                <MultiStepFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
              </div>
            </div>
            <div className="mt-8 flow-root">
              <h2 className="text-xl font-semibold text-cyan-500">
                Recent Appointments
              </h2>
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                        >
                          User Details
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Date / Time
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {tableData.map((row) => (
                        <tr key={row.id}>
                          <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                            <div className="flex items-center">
                              <div className="h-11 w-11 flex-shrink-0">
                                <img
                                  className="h-11 w-11 rounded-full"
                                  src={row.image}
                                  alt=""
                                />
                              </div>
                              <div className="ml-4">
                                <div className="font-medium text-gray-900">
                                  {row.name}
                                </div>
                                <div className="mt-1 text-gray-500">
                                  {row.location}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                            <div className="text-gray-900">{row.date}</div>
                            <div className="mt-1 text-gray-500">
                              {row.time}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                              Active
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                            {row.role}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        </main>
      </>
    );
  }

