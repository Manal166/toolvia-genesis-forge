// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://cxbxhhavmitusgurziuz.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4YnhoaGF2bWl0dXNndXJ6aXV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1NDQ0ODIsImV4cCI6MjA2NjEyMDQ4Mn0.exXwufNjsEvDJsyMu692i1_L738WsitqiOfgZkI-njA";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);