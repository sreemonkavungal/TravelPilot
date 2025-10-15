// FlightBooking.jsx
import React, { useState, useMemo } from "react";
import { fetchFlights } from "../services/FlightApi";

function formatDateInput(date) {
  return date.toISOString().split("T")[0];
}

function getTomorrow(date) {
  const d = new Date(date);
  d.setDate(d.getDate() + 1);
  return d;
}

export default function FlightBooking() {
  const today = useMemo(() => new Date(), []);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departDate, setDepartDate] = useState(formatDateInput(getTomorrow(today)));
  const [returnDate, setReturnDate] = useState("");
  const [tripType, setTripType] = useState("oneway");
  const [passengers, setPassengers] = useState(1);
  const [flights, setFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const isValid = useMemo(() => {
    if (!origin || !destination || !departDate) return false;
    if (origin === destination) return false;
    return passengers > 0 && passengers <= 9;
  }, [origin, destination, departDate, passengers]);

  async function handleSearch() {
    if (!isValid) {
      setError("Please enter valid details.");
      return;
    }

    setIsLoading(true);
    setError("");
    setFlights([]);

    try {
      const data = await fetchFlights({
        origin,
        destination,
        departDate,
        returnDate: tripType === "round" ? returnDate : null,
        adults: passengers,
      });
      setFlights(data);
    } catch (err) {
      console.error("Error fetching flights:", err);
      setError(err.message || "Failed to fetch flights");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="bg-white py-16 px-6 sm:px-10 lg:px-20 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Flight Booking</h1>
          <p className="mt-2 text-gray-600">Find and book flights with ease</p>
        </div>

        {/* Form */}
        <div className="p-6 bg-gray-50 rounded-2xl shadow-md ring-1 ring-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {/* Trip Type */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Trip Type</label>
              <div className="mt-2 flex gap-3">
                <button
                  onClick={() => setTripType("oneway")}
                  className={`rounded-md px-3 py-2 text-sm font-semibold ${
                    tripType === "oneway"
                      ? "bg-green-600 text-white"
                      : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  One Way
                </button>
                <button
                  onClick={() => setTripType("round")}
                  className={`rounded-md px-3 py-2 text-sm font-semibold ${
                    tripType === "round"
                      ? "bg-green-600 text-white"
                      : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  Round Trip
                </button>
              </div>
            </div>

            {/* From */}
            <div>
              <label className="block text-sm font-medium text-gray-700">From (IATA)</label>
              <input
                value={origin}
                onChange={(e) => setOrigin(e.target.value.toUpperCase().slice(0, 3))}
                placeholder="COK"
                className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
            </div>

            {/* To */}
            <div>
              <label className="block text-sm font-medium text-gray-700">To (IATA)</label>
              <input
                value={destination}
                onChange={(e) => setDestination(e.target.value.toUpperCase().slice(0, 3))}
                placeholder="DEL"
                className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
            </div>

            {/* Depart Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Depart</label>
              <input
                type="date"
                value={departDate}
                min={formatDateInput(today)}
                onChange={(e) => setDepartDate(e.target.value)}
                className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
            </div>

            {/* Return Date */}
            {tripType === "round" ? (
              <div>
                <label className="block text-sm font-medium text-gray-700">Return</label>
                <input
                  type="date"
                  value={returnDate}
                  min={departDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
                />
              </div>
            ) : (
              <div className="opacity-50">
                <label className="block text-sm font-medium text-gray-400">Return</label>
                <input disabled type="date" className="mt-2 w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2" />
              </div>
            )}

            {/* Passengers */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Passengers</label>
              <input
                type="number"
                min={1}
                max={9}
                value={passengers}
                onChange={(e) => setPassengers(Number(e.target.value))}
                className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={handleSearch}
              disabled={isLoading}
              className="rounded-md bg-green-600 px-6 py-2 text-sm font-semibold text-white hover:bg-green-700 disabled:bg-gray-300"
            >
              {isLoading ? "Searching..." : "Search Flights"}
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="mt-10">
          {error && <div className="text-red-600 font-medium">{error}</div>}

          {!isLoading && flights.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {flights.map((f) => (
                <div
                  key={f.id}
                  className="rounded-2xl p-6 shadow-md ring-1 ring-gray-200 bg-white flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{f.airline}</h3>
                      <p className="text-gray-500 mt-1">
                        {new Date(f.departureTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} →{" "}
                        {new Date(f.arrivalTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </p>
                      <p className="text-gray-500 mt-1">{f.duration.replace("PT", "").toLowerCase()}</p>
                      <p className="text-gray-500 mt-1">
                        {f.direct ? "Direct" : `${f.stops} Stop${f.stops > 1 ? "s" : ""}`}
                      </p>
                    </div>
                    {f.logo && <img src={f.logo} alt={f.airline} className="h-10 w-10 ml-4" />}
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-lg font-semibold text-gray-900">
                      {f.currency} {parseFloat(f.price).toLocaleString()}
                    </p>
                    <a
                      href="/contact"
                      className="rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
                    >
                      Book
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
