// src/services/flightApi.js
export async function fetchFlights({
    origin,
    destination,
    departDate,
    returnDate,
    adults = 1,
    currency = "INR",
  }) {
    const clientId = import.meta.env.VITE_AMADEUS_API_KEY;
    const clientSecret = import.meta.env.VITE_AMADEUS_API_SECRET;
  
    if (!clientId || !clientSecret) {
      throw new Error("Missing Amadeus API credentials");
    }
  
    // Step 1: Get Access Token
    const tokenRes = await fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: clientId,
        client_secret: clientSecret,
      }),
    });
  
    const tokenData = await tokenRes.json();
    if (!tokenData.access_token) throw new Error("Auth failed with Amadeus");
  
    // Step 2: Search Flights
    const params = new URLSearchParams({
      originLocationCode: origin,
      destinationLocationCode: destination,
      departureDate: departDate,
      adults: adults.toString(),
      currencyCode: currency,
    });
  
    if (returnDate) params.set("returnDate", returnDate);
  
    const searchRes = await fetch(
      `https://test.api.amadeus.com/v2/shopping/flight-offers?${params}`,
      { headers: { Authorization: `Bearer ${tokenData.access_token}` } }
    );
  
    const searchData = await searchRes.json();
  
    if (!searchData.data || searchData.data.length === 0) {
      throw new Error("No flights found for this route.");
    }
  
    // Map the offers
    return searchData.data.map((offer) => {
      const itinerary = offer.itineraries?.[0];
      const segments = itinerary?.segments || [];
      const stops = segments.length - 1;
  
      return {
        id: offer.id,
        airline: offer.validatingAirlineCodes?.[0] || "Unknown Airline",
        price: offer.price.total,
        currency: offer.price.currency,
        duration: itinerary?.duration || "N/A",
        direct: stops === 0,
        stops: stops,
        departureTime: segments[0]?.departure?.at || "N/A",
        arrivalTime: segments[segments.length - 1]?.arrival?.at || "N/A",
        logo: offer.validatingAirlineCodes
          ? `https://content.airhex.com/content/logos/airlines_${offer.validatingAirlineCodes[0]}_50_50_s.png`
          : null,
      };
    });
  }
  