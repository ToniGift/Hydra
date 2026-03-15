import { NextRequest, NextResponse } from "next/server";
import { createSupabaseAdmin } from "@/lib/supabase";
import { sendQuoteConfirmationToBuyer, sendQuoteNotificationToHydra } from "@/lib/resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      company,
      country,
      project_type,
      pipe_type,
      diameter_range,
      quantity_m,
      deadline,
      project_description,
      file_url,
      contact_preference,
    } = body;

    if (!name || !email || !company || !country || !project_type || !pipe_type) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, company, country, project_type, pipe_type" },
        { status: 400 }
      );
    }

    const supabase = createSupabaseAdmin();
    if (!supabase) {
      return NextResponse.json(
        { error: "Server not configured. Add NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to .env.local" },
        { status: 503 }
      );
    }
    const { data: lead, error } = await supabase
      .from("leads")
      .insert({
        name,
        email,
        company,
        country,
        project_type,
        pipe_type,
        diameter_range: diameter_range || null,
        quantity_m: quantity_m || null,
        deadline: deadline || null,
        project_description: project_description || null,
        file_url: file_url || null,
        contact_preference: contact_preference || "email",
        status: "new",
      })
      .select("id")
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "Failed to save quote request" }, { status: 500 });
    }

    await sendQuoteConfirmationToBuyer(email, name);
    await sendQuoteNotificationToHydra({
      name,
      email,
      company,
      country,
      project_type,
      pipe_type,
      diameter_range,
      quantity_m,
      deadline,
      project_description,
    });

    return NextResponse.json({ success: true, id: lead?.id });
  } catch (err) {
    console.error("Quote API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
