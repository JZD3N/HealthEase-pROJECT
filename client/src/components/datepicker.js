// Date Picker
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { XMarkIcon } from '@heroicons/react/16/solid';// Importing an icon from Heroicons (optional)
import axios from 'axios';

/**
 * A multi-step form modal component.
 * It takes an isOpen prop to determine whether the modal is visible or not.
 * It also takes an onClose prop to close the modal.
 */
function MultiStepFormModal({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState('');
  const [selectedOffice, setSelectedOffice] = useState('');

  // Reset Function
  const resetForm = () => {
    setSelectedDate(null);
    setSelectedTime(null);
    setSelectedPlace('');
    setSelectedOffice('');
    setCurrentStep(1); 
  };

  const goNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const goPreviousStep = () => {
    setCurrentStep((prev) => prev - 1);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('api/appointment', { selectedDate, selectedTime, selectedPlace, selectedOffice });
      if (data === "Success") {
        resetForm();
      } else {
        console.log("Data input failed:", data);
      }
    } catch (err) {
      console.log("Error in sending data", err);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Step {currentStep} of 5</h2>
          {/* Close Icon */}
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <form onSubmit={handleSubmit} method="POST" action='#'>
          {/* Step 1: Enter Place */}
          {currentStep === 1 && (
            <div>
              <label htmlFor="place" className="block text-sm font-medium text-gray-700">
                Enter Place:
              </label>
              <input
                type="text"
                id="place"
                value={selectedPlace}
                onChange={(e) => setSelectedPlace(e.target.value)}
                className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                placeholder="Enter place"
              />
            </div>
          )}

          {/* Step 2: Enter Office */}
          {currentStep === 2 && (
            <div>
              <label htmlFor="office" className="block text-sm font-medium text-gray-700">
                Enter Office:
              </label>
              <input
                type="text"
                id="office"
                value={selectedOffice}
                onChange={(e) => setSelectedOffice(e.target.value)}
                className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                placeholder="Enter office"
              />
            </div>
          )}

          {/* Step 3: Select Date */}
          {currentStep === 3 && (
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Select Date:
              </label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="MMMM d, yyyy"
                className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                placeholderText="Choose a date"
              />
            </div>
          )}

          {/* Step 4: Select Time */}
          {currentStep === 4 && (
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                Select Time:
              </label>
              <DatePicker
                selected={selectedTime}
                onChange={(time) => setSelectedTime(time)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                placeholderText="Choose a time"
              />
            </div>
          )}

          {/* Step 5: Confirm Details */}
          {currentStep === 5 && (
            <div>
              <label htmlFor="confirm" className="block text-sm font-medium text-gray-700">
                Confirm Details:
              </label>
              <p className="mt-2">Selected Place: {selectedPlace || 'Not selected'}</p>
              <p>Selected Office: {selectedOffice || 'Not selected'}</p>
              <p>Selected Date: {selectedDate ? selectedDate.toLocaleDateString() : 'Not selected'}</p>
              <p>Selected Time: {selectedTime ? selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Not selected'}</p>
            </div>
          )}

          <div className="mt-6 flex justify-between">
            {/* Previous Button */}
            {currentStep > 1 && (
              <button
                type="button"
                onClick={goPreviousStep}
                className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                Previous
              </button>
            )}

            {/* Next or Submit Button */}
            {currentStep < 5 && (
              <button
                type="button"
                onClick={goNextStep}
                className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Next
              </button>
            )}

            {currentStep === 5 && (
              <button
                type="submit"
                className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Submit
              </button>
            )}
          </div>

          {/* Reset Button */}
          <div className="mt-4 flex justify-center">
            <button
              type="button"
              onClick={resetForm}
              className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MultiStepFormModal;

