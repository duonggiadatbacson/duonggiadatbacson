// Thay 2 giá trị bên dưới bằng thông tin trong Supabase
const SUPABASE_URL = "https://vydifnsqekptdrbgysbk.supabase.co/rest/v1/";
const SUPABASE_ANON_KEY = "sb_publishable_jdC_HsFM0FhxnP-imWu2EA_8YTYBUDP";

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);