// 連線設定：只放「可以公開」的兩個值。
// 這兩個值會跟著網頁送到每個人的瀏覽器，按 F12 就看得到，本來就不是秘密。
// 真正擋住別人看你資料的，是資料庫的門禁（RLS，寫在 schema.sql），不是把這兩個值藏起來。
//
// 🚨 絕對不要貼 secret key（sb_secret_ 開頭）或 service_role key：
//    那把是資料庫的萬能鑰匙，貼進來、推上 GitHub，就等於把整個資料庫交出去。

window.APP_CONFIG = {
  SUPABASE_URL: "https://rtjwlqefxvleilbqizlv.supabase.co",
  SUPABASE_KEY: "sb_publishable_oQmNgO6B-yJKfmaz67et9g_BwogeEv7"
};
