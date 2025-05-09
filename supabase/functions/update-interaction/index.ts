
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
    const { interactionId, completed, duration } = await req.json();

    if (!interactionId) {
      return new Response(
        JSON.stringify({ error: 'Interaction ID is required' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }

    // Create a Supabase client with the Admin key
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Update the interaction
    const updateData: Record<string, any> = {
      end_time: new Date().toISOString()
    };

    if (completed !== undefined) {
      updateData.completed = completed;
    }

    if (duration !== undefined) {
      updateData.duration_seconds = duration;
    }

    const { data, error } = await supabaseAdmin
      .from('interactions')
      .update(updateData)
      .eq('id', interactionId)
      .select()
      .single();

    if (error) {
      console.error('Error updating interaction:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to update interaction' }),
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
