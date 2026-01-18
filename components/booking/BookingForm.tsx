const BookingForm = () => (
  <div className="bg-white p-6 rounded-lg">
    <h2 className="text-xl font-semibold">Contact Detail</h2>
    <form>
      {/* Contact Information */}
      <div className="border-b pb-5">
        <div className="grid grid-cols-2 gap-4 border-[] border-b">
          <div>
            <label>First Name</label>
            <input type="text" className="border p-2 w-full mt-2" />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" className="border p-2 w-full mt-2" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Email</label>
            <input type="email" className="border p-2 w-full mt-2" />
          </div>
          <div>
            <label>Phone Number</label>
            <input type="text" className="border p-2 w-full mt-2" />
          </div>
          <div className="flex items-center gap-3 col-span-2">
            <input
              type="checkbox"
              className="
                h-5 w-5
                appearance-none
                rounded-md
                border border-emerald-600
                checked:bg-emerald-600
                checked:border-emerald-600
                relative
                cursor-pointer
                after:content-['✓']
                after:absolute
                after:left-1/2
                after:top-1/2
                after:-translate-x-1/2
                after:-translate-y-1/2
                after:text-white
                after:text-sm
                after:font-bold
              "
            />

            <label className="text-sm text-gray-700 cursor-pointer">
              Receive text message updates about your booking. Messages rates may apply.
            </label>
          </div>

        </div>
      </div>

      {/* Payment Information */}
        <h2 className="text-xl font-semibold mt-6">Pay with</h2>
        <div className="mt-4">
          <label>Card Number</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Expiration Date</label>
            <input type="text" className="border p-2 w-full mt-2" />
          </div>
          <div>
            <label>CVV</label>
            <input type="text" className="border p-2 w-full mt-2" />
          </div>
        </div>

      {/* Billing Address */}
      <div className="border-b pb-5">
        <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
        <div className="mt-4">
          <label>Street Address</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>City</label>
            <input type="text" className="border p-2 w-full mt-2" />
          </div>
          <div>
            <label>State</label>
            <input type="text" className="border p-2 w-full mt-2" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Zip Code</label>
            <input type="text" className="border p-2 w-full mt-2" />
          </div>
          <div>
            <label>Country</label>
            <input type="text" className="border p-2 w-full mt-2" />
          </div>
        </div>
      </div>
      
      {/* CancellationPolicy */}
      <div className="mt-6 border-b pb-5">
        <h2 className="text-xl font-semibold">Cancellation policy</h2>
        <p className="mt-2 text-gray-600 border-b pb-5">
          Free cancellation before Aug 23. Cancel before check-in on Aug 24 for
          a partial refund.
        </p>

        <h2 className="text-xl font-semibold mt-6">Ground Rules</h2>
        <ul className="mt-2 text-gray-600 list-disc list-inside">
          <li>Follow the house rules</li>
          <li>Treat your Host’s home like your own</li>
        </ul>
      </div>

      {/* Submit Button */}
      <button className="mt-6 bg-[#34967C] text-white py-2 px-4 rounded-md w-[250px]">
        Confirm & Pay
      </button>
    </form>
  </div>
);

export default BookingForm;
