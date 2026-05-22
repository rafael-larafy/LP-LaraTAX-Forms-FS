import { supabaseAdmin } from "@/lib/supabase";

export async function GET () {
    const {count, error} = await supabaseAdmin
    .from("leads_recusados")
    .select("*", {count:"exact", head:true });

    if (error) {
        return Response.json (
            {ok:false,error: error.message},
            {status: 500}
        );
    }
    return Response.json({ok:true,total:count});
}