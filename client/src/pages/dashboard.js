import {
  CalendarIcon,
  MapIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

//Quick Access Generator
const items = [
  {
    title: 'Add Appointment',
    description: 'Tap to quick add Appointment Dates',
    icon: CalendarIcon,
    background: 'bg-blue-500',
    link: ''
  },
  {
    title: 'View Records',
    description: 'Tap to view Medical Records',
    icon: BookOpenIcon,
    background: 'bg-red-500',
  },
  {
    title: 'Find Nearby Resources',
    description: 'Tap to quick access nearby pharmacies,labs and hospitals',
    icon: MapIcon,
    background: 'bg-green-500',
  },
];

const people = [
  {
    name: 'General Check-up',
    place: 'Ho Clinc',
    date: '20/03/45',
    progress: 'Completed',
  },
  {
    name: 'General Check-up',
    place: 'UGMC',
    date: '20/03/45',
    progress: 'Completed',
  },
  {
    name: 'Lab Tests',
    place: 'Lancet Labs',
    date: '20/03/45',
    progress: 'Completed',
  },
  // More people...
];

const UpcomingAppointments = [
  {
    appname: 'Colonoscopy',
    place: 'UGMC',
    time: '2:40 PM',
    date: '24/04/2025',
  },
  // More items...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function DashBoard() {
  return (
    <div className="min-h-full bg-slate-50">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* Quick Access Bar */}
          <div>
  <h2 className="text-base font-semibold leading-6 text-gray-900">
    Quick Access
  </h2>
  <ul className="mt-6 grid grid-cols-1 gap-6 border-b border-t border-lime-600 py-6 sm:grid-cols-3">
    {items.map((item, itemIdx) => (
      <li key={itemIdx} className="group flow-root">
        <div
          className={`relative -m-2 flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2 hover:bg-cyan-500`} // Added hover class
        >
          <div
            className={classNames(
              item.background,
              'flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg'
            )}
          >
            <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900">
              <Link className="focus:outline-none">   

                <span className="absolute inset-0" aria-hidden="true" />
                <span>{item.title}</span>
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{item.description}</p>
          </div>
        </div>
      </li>
    ))}
  </ul>
</div>   

          {/* Upcomming Appointments */}
          {/* Recent Activity */}
          <div className="mt-6 px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-base font-semibold leading-10 text-gray-900">
                  Recent Activity
                </h1>
              </div>
            </div>
            <div className="mt-4 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                          >
                            Appointment Type
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Location
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Date
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Progress
                          </th>
                          <th
                            scope="col"
                            className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                          >
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {people.map((person) => (
                          <tr key={person.date}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              {person.name}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {person.place}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {person.date}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {person.progress}
                            </td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                              <a
                                href="#"
                                className="text-indigo-600 hover:text-indigo-900"
                              >
                                Edit
                                <span className="sr-only">, {person.name}</span>
                              </a>
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
        </div>
      </main>
    </div>
  );
}
