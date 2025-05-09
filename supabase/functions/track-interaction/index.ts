
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { botId, sessionId, visitorIp, deviceType, browser, os } = await req.json();

    if (!botId || !sessionId) {
      return new Response(
        JSON.stringify({ error: 'Bot ID and session ID are required' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }

    // Create a Supabase client with the Admin key
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Verify the bot exists
    const { data: botData, error: botError } = await supabaseAdmin
      .from('bots')
      .select('id')
      .eq('id', botId)
      .single();

    if (botError || !botData) {
      return new Response(
        JSON.stringify({ error: 'Bot not found' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 404 }
      );
    }

    // Create a new interaction record
    const { data, error } = await supabaseAdmin
      .from('interactions')
      .insert({
        bot_id: botId,
        session_id: sessionId,
        visitor_ip: visitorIp,
        device_type: deviceType,
        browser: browser,
        os: os
      })
      .select()
      .single();

    if (error) {
      console.error('Error inserting interaction:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to create interaction' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ success: true, data }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});
