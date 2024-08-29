import { Fragment } from 'react';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from '@headlessui/react';
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  ExclamationTriangleIcon,
  CalendarIcon,
  ClockIcon,
  PhotoIcon,
  TableCellsIcon,
  ViewColumnsIcon,
  Bars4Icon,
  MapIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline';
import { HeartIcon } from '@heroicons/react/20/solid';
import NavBar from '../components/navbar';

const items = [
  {
    title: 'Add Appointment',
    description: 'Tap to quick add Appointment Dates',
    icon: CalendarIcon,
    background: 'bg-blue-500',
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

const user = {
  name: 'User',
  email: 'user@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1504214002698-8bdd458f134b?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

const statuses = {
  Completed: 'text-green-400 bg-green-400/10',
  Error: 'text-rose-400 bg-rose-400/10',
};
const activityItems = [
  {
    user: {
      name: 'User@database',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    action: 'Added Appointment Date',
    status: 'Completed',
    date: '45 minutes ago',
  },
  {
    user: {
      name: 'User@database',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    action: 'Added Appointment Date',
    status: 'Completed',
    date: '45 minutes ago',
  },
  {
    user: {
      name: 'User@database',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    action: 'Added Appointment Date',
    status: 'Completed',
    date: '45 minutes ago',
  },
  {
    user: {
      name: 'User@database',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    action: 'Added Appointment Date',
    status: 'Completed',
    date: '45 minutes ago',
  },
  {
    user: {
      name: 'User@database',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    action: 'Added Appointment Date',
    status: 'Completed',
    date: '45 minutes ago',
  },
  // More items...
];
const UpcommingAppointments = [
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
      <html class="h-full bg-gray-100">
        <body class="h-full">
          <div className="min-h-full">
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
                  <ul
                    role="list"
                    className="mt-6 grid grid-cols-1 gap-6 border-b border-t border-gray-200 py-6 sm:grid-cols-3"
                  >
                    {items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flow-root">
                        <div className="relative -m-2 flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2 focus-within:ring-indigo-500 hover:bg-gray-50">
                          <div
                            className={classNames(
                              item.background,
                              'flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg'
                            )}
                          >
                            <item.icon
                              className="h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-900">
                              <a href="#" className="focus:outline-none">
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                />
                                <span>{item.title}</span>
                                <span aria-hidden="true"> &rarr;</span>
                              </a>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Upcomming Appointments */}
                <div className="border-t border-black/10 pt-11 bg-emerald-500 rounded-md border-t-emerald-700">
                  <h2 className="px-4 text-lg font-bold leading-7 text-black sm:px-6 lg:px-8">
                    Upcomming Appointments
                  </h2>
                  <table className="mt-6 w-full whitespace-nowrap text-left">
                    <colgroup>
                      <col className="w-full sm:w-4/12" />
                      <col className="lg:w-4/12" />
                      <col className="lg:w-2/12" />
                      <col className="lg:w-2/12" />
                    </colgroup>
                    <thead className="border-b border-black/10 text-sm leading-6 text-black">
                      <tr>
                        <th
                          scope="col"
                          className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8"
                        >
                          Appointment Name
                        </th>
                        <th
                          scope="col"
                          className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell"
                        >
                          Place
                        </th>
                        <th
                          scope="col"
                          className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell "
                        >
                          Time
                        </th>
                        <th
                          scope="col"
                          className="py-2 pl-0 pr-4 text-right font-semibold sm:table-cell sm:pr-6 lg:pr-8"
                        >
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {UpcommingAppointments.map((item) => (
                        <tr key={item.appname}>
                          <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                            <div className="flex items-center gap-x-4">
                              <div className="truncate text-sm font-medium leading-6 text-black">
                                {item.appname}
                              </div>
                            </div>
                          </td>
                          <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                            <div className="flex gap-x-3">
                              <div className="font-mono text-lg leading-6 text-black-400">
                                {item.place}
                              </div>
                            </div>
                          </td>
                          <td className="py-4 pl-0 pr-4 text-lg leading-6 sm:pr-8 lg:pr-20 text-black-400">
                            <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                              <div className="hidden text-black sm:block">
                                {item.time}
                              </div>
                            </div>
                          </td>
                          <td className="hidden py-4 pl-0 pr-4 text-right text-lg leading-6 text-black-400 sm:table-cell sm:pr-6 lg:pr-8">
                            <time dateTime={item.dateTime}>{item.date}</time>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Recent Activity */}
                <div className="border-t border-white/10 pt-11">
                  <h2 className="px-4 text-base font-semibold leading-7 text-black sm:px-6 lg:px-8">
                    Latest Activity
                  </h2>
                  <table className="mt-6 w-full whitespace-nowrap text-left">
                    <colgroup>
                      <col className="w-full sm:w-4/12" />
                      <col className="lg:w-4/12" />
                      <col className="lg:w-2/12" />
                      <col className="lg:w-2/12" />
                    </colgroup>
                    <thead className="border-b border-white/10 text-sm leading-6 text-black">
                      <tr>
                        <th
                          scope="col"
                          className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8"
                        >
                          User
                        </th>
                        <th
                          scope="col"
                          className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell"
                        >
                          Action
                        </th>
                        <th
                          scope="col"
                          className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell "
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="py-2 pl-0 pr-4 text-right font-semibold sm:table-cell sm:pr-6 lg:pr-8"
                        >
                          Timestamp
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {activityItems.map((item) => (
                        <tr key={item.action}>
                          <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                            <div className="flex items-center gap-x-4">
                              <img
                                src={item.user.imageUrl}
                                alt=""
                                className="h-8 w-8 rounded-full bg-gray-800"
                              />
                              <div className="truncate text-sm font-medium leading-6 text-black">
                                {item.user.name}
                              </div>
                            </div>
                          </td>
                          <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                            <div className="flex gap-x-3">
                              <div className="font-mono text-sm leading-6 text-gray-400">
                                {item.action}
                              </div>
                            </div>
                          </td>
                          <td className="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
                            <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                              <time
                                className="text-gray-400 sm:hidden"
                                dateTime={item.dateTime}
                              >
                                {item.date}
                              </time>
                              <div
                                className={classNames(
                                  statuses[item.status],
                                  'flex-none rounded-full p-1'
                                )}
                              >
                                <div className="h-1.5 w-1.5 rounded-full bg-current" />
                              </div>
                              <div className="hidden text-black sm:block">
                                {item.status}
                              </div>
                            </div>
                          </td>
                          <td className="hidden py-4 pl-0 pr-4 text-right text-sm leading-6 text-gray-400 sm:table-cell sm:pr-6 lg:pr-8">
                            <time dateTime={item.dateTime}>{item.date}</time>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </main>
          </div>
        </body>
      </html>
  );
}
