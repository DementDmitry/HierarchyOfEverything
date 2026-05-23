export default {
  async fetch(request, env) {
    // Allow CORS from your domain
    const corsHeaders = {
      "Access-Control-Allow-Origin": "https://hierarchyofeverything.com",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    try {
      const body = await request.json();
      const { name, email, message } = body;

      if (!name || !email || !message) {
        return new Response(
          JSON.stringify({ error: "All fields are required" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      // Send email via Resend
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Hierarchy of Everything <contact@hierarchyofeverything.com>",
          to: ["ds.dement@gmail.com"],
          subject: `Hierarchy of Everything: message from ${name}`,
          html: `
            <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f9f9;">
              <h2 style="color: #1a1a2e; border-bottom: 2px solid #7c6af7; padding-bottom: 12px;">
                New message from hierarchyofeverything.com
              </h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <div style="margin-top: 24px; padding: 20px; background: white; border-left: 4px solid #7c6af7; border-radius: 4px;">
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap; color: #333;">${message}</p>
              </div>
              <p style="margin-top: 24px; font-size: 12px; color: #999;">
                Sent from hierarchyofeverything.com contact form
              </p>
            </div>
          `,
          reply_to: email,
        }),
      });

      if (!resendResponse.ok) {
        const err = await resendResponse.text();
        console.error("Resend error:", err);
        return new Response(
          JSON.stringify({ error: "Failed to send email" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );

    } catch (err) {
      return new Response(
        JSON.stringify({ error: "Server error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
  },
};
