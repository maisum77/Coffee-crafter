'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { format, addDays, isBefore, startOfDay } from 'date-fns';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Users, User, Phone, MessageSquare } from 'lucide-react';

// Define the form schema
const reservationSchema = z.object({
  fullName: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  contactNumber: z.string().min(10, { message: 'Please enter a valid phone number' }),
  date: z.date().refine((date) => date > new Date(), {
    message: 'Please select a future date',
  }),
  time: z.enum(['morning', 'afternoon', 'evening']),
  partySize: z.number().min(1).max(8, { message: 'Maximum party size is 8' }),
  specialRequests: z.string().optional(),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

// Time slot options
type TimeSlotValue = 'morning' | 'afternoon' | 'evening';

interface TimeSlot {
  value: TimeSlotValue;
  label: string;
  description: string;
}

const timeSlots: TimeSlot[] = [
  { value: 'morning', label: 'Morning', description: '8 AM - 12 PM' },
  { value: 'afternoon', label: 'Afternoon', description: '12 PM - 4 PM' },
  { value: 'evening', label: 'Evening', description: '4 PM - 9 PM' },
];

// Party size options
const partySizes = [1, 2, 3, 4, 5, 6, 7, 8];

export default function ReservationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(addDays(new Date(), 1));
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      fullName: '',
      contactNumber: '',
      date: addDays(new Date(), 1),
      time: 'evening',
      partySize: 2,
      specialRequests: '',
    },
  });

  const watchedDate = watch('date');
  const watchedTime = watch('time');
  const watchedPartySize = watch('partySize');

  // Generate next 30 days for date selection
  const generateDateOptions = () => {
    const dates = [];
    const today = startOfDay(new Date());
    
    for (let i = 1; i <= 30; i++) {
      const date = addDays(today, i);
      dates.push(date);
    }
    
    return dates;
  };

  const dateOptions = generateDateOptions();

  const onSubmit = async (data: ReservationFormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Reservation submitted:', data);
    setIsSubmitted(true);
  };

  // Success state animation
  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="flex flex-col items-center justify-center py-20 px-6 text-center"
      >
        <motion.div
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="mb-8"
        >
          <svg
            width="120"
            height="120"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-cc-copper"
          >
            <path
              d="M20 40C20 30 30 25 50 25C70 25 80 30 80 40V65C80 75 70 80 50 80C30 80 20 75 20 65V40Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M80 45C85 45 92 48 92 55C92 62 85 65 80 65"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M35 15C35 15 38 5 42 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M48 15C48 15 51 5 55 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M61 15C61 15 64 5 68 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <motion.path
              d="M40 50L48 58L62 42"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            />
          </svg>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-display text-3xl md:text-4xl text-cc-cream mb-4"
        >
          Your table has been reserved
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-body text-cc-parchment/80 mb-8 max-w-md"
        >
          We'll see you soon at CoffeeCraft. A confirmation will be sent to your contact number.
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          onClick={() => setIsSubmitted(false)}
          className="font-display text-sm uppercase tracking-widest text-cc-copper border-b border-cc-copper/50 pb-1 hover:border-cc-copper transition-colors"
        >
          Make another reservation
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="mb-10">
        <h1 className="font-display text-4xl md:text-5xl text-cc-cream mb-3">
          Reserve a Table
        </h1>
        <p className="font-body text-cc-parchment/70">
          Secure your seat at the lab. We recommend booking at least 24 hours in advance.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        {/* Personal Information */}
        <div className="space-y-8">
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <User className="w-4 h-4 text-cc-copper" />
              <span className="font-display text-xs uppercase tracking-widest text-cc-copper">
                Personal Details
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="relative">
                <input
                  {...register('fullName')}
                  className={`w-full bg-transparent border-0 border-b ${errors.fullName ? 'border-cc-error' : 'border-cc-mahogany'} focus:border-cc-copper focus:ring-0 text-cc-cream py-3 px-0 transition-all duration-300`}
                  placeholder=" "
                />
                <label className="absolute left-0 top-3 text-cc-parchment/60 font-display text-xs uppercase tracking-widest pointer-events-none transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-90">
                  Full Name
                </label>
                {errors.fullName && (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-cc-error text-xs mt-2 font-mono"
                  >
                    {errors.fullName.message}
                  </motion.p>
                )}
              </div>

              {/* Contact Number */}
              <div className="relative">
                <input
                  {...register('contactNumber')}
                  className={`w-full bg-transparent border-0 border-b ${errors.contactNumber ? 'border-cc-error' : 'border-cc-mahogany'} focus:border-cc-copper focus:ring-0 text-cc-cream py-3 px-0 transition-all duration-300`}
                  placeholder=" "
                />
                <label className="absolute left-0 top-3 text-cc-parchment/60 font-display text-xs uppercase tracking-widest pointer-events-none transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-90">
                  Contact Number
                </label>
                {errors.contactNumber && (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-cc-error text-xs mt-2 font-mono"
                  >
                    {errors.contactNumber.message}
                  </motion.p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Date & Time Selection */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-4 h-4 text-cc-copper" />
            <span className="font-display text-xs uppercase tracking-widest text-cc-copper">
              Date & Time
            </span>
          </div>

          {/* Date Selection */}
          <div>
            <label className="block font-display text-xs uppercase tracking-widest text-cc-parchment/70 mb-4">
              Select Date
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-2">
              {dateOptions.slice(0, 12).map((date) => (
                <button
                  key={date.toISOString()}
                  type="button"
                  onClick={() => setValue('date', date)}
                  className={`aspect-square flex flex-col items-center justify-center p-2 border transition-all duration-300 ${
                    format(watchedDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
                      ? 'border-cc-copper bg-cc-copper/10 text-cc-copper'
                      : 'border-cc-mahogany/30 hover:border-cc-copper/50 text-cc-parchment/70 hover:text-cc-cream'
                  }`}
                >
                  <span className="font-mono text-lg">
                    {format(date, 'd')}
                  </span>
                  <span className="font-display text-[10px] uppercase tracking-widest mt-1">
                    {format(date, 'MMM')}
                  </span>
                </button>
              ))}
            </div>
            {errors.date && (
              <p className="text-cc-error text-xs mt-2 font-mono">
                {errors.date.message}
              </p>
            )}
          </div>

          {/* Time Selection */}
          <div>
            <label className="block font-display text-xs uppercase tracking-widest text-cc-parchment/70 mb-4">
              Time Slot
            </label>
            <div className="grid grid-cols-3 gap-3">
              {timeSlots.map((slot) => (
                <button
                  key={slot.value}
                  type="button"
                  onClick={() => setValue('time', slot.value)}
                  className={`p-4 border transition-all duration-300 ${
                    watchedTime === slot.value
                      ? 'border-cc-copper bg-cc-copper/10 text-cc-copper'
                      : 'border-cc-mahogany/30 hover:border-cc-copper/50 text-cc-parchment/70 hover:text-cc-cream'
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <span className="font-display text-sm uppercase tracking-widest">
                      {slot.label}
                    </span>
                    <span className="font-mono text-xs mt-1 text-cc-parchment/60">
                      {slot.description}
                    </span>
                  </div>
                </button>
              ))}
            </div>
            {errors.time && (
              <p className="text-cc-error text-xs mt-2 font-mono">
                {errors.time.message}
              </p>
            )}
          </div>
        </div>

        {/* Party Size */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-4 h-4 text-cc-copper" />
            <span className="font-display text-xs uppercase tracking-widest text-cc-copper">
              Party Size
            </span>
          </div>
          
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
            {partySizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setValue('partySize', size)}
                className={`aspect-square flex items-center justify-center border transition-all duration-300 ${
                  watchedPartySize === size
                    ? 'border-cc-copper bg-cc-copper/10 text-cc-copper'
                    : 'border-cc-mahogany/30 hover:border-cc-copper/50 text-cc-parchment/70 hover:text-cc-cream'
                }`}
              >
                <span className="font-display text-lg">{size}</span>
              </button>
            ))}
          </div>
          {errors.partySize && (
            <p className="text-cc-error text-xs mt-2 font-mono">
              {errors.partySize.message}
            </p>
          )}
        </div>

        {/* Special Requests */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-4 h-4 text-cc-copper" />
            <span className="font-display text-xs uppercase tracking-widest text-cc-copper">
              Special Requests
            </span>
          </div>
          
          <div className="relative">
            <textarea
              {...register('specialRequests')}
              rows={3}
              className="w-full bg-transparent border-0 border-b border-cc-mahogany focus:border-cc-copper focus:ring-0 text-cc-cream py-3 px-0 transition-all duration-300 resize-none"
              placeholder="Dietary restrictions, allergies, or special occasions..."
            />
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-5 bg-cc-copper text-cc-void font-display text-sm uppercase tracking-widest transition-all duration-500 hover:bg-cc-gold disabled:opacity-50 disabled:cursor-not-allowed ${
            isSubmitting ? 'cursor-wait' : ''
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 border-2 border-cc-void border-t-transparent rounded-full"
              />
              Processing...
            </span>
          ) : (
            'CONFIRM YOUR TABLE'
          )}
        </motion.button>

        {/* Form Note */}
        <p className="font-mono text-xs text-cc-parchment/50 text-center">
          You'll receive a confirmation SMS within 30 minutes. Cancellations must be made 12 hours in advance.
        </p>
      </form>
    </motion.div>
  );
}