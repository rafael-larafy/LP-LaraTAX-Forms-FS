import { supabaseAdmin } from "@/lib/supabase";

export async function POST(request) {
  const body = await request.json();

  const fazRecuperacao = body?.custom_fields?._recuperacao_tributaria;

  // Salva no SUPABASE , mas não envia pro Leads2b (Eu acho)
  if (fazRecuperacao === "Não") {
    const { error } = await supabaseAdmin.from("leads_recusados").insert({
      nome: body.name,
      empresa:body.company,
      email: body.email,
      telefone: body.phone,
      faturamento_mensal: body?.custom_fields?._faturamento_mensal,
      regime_tributario: body?.custom_fields?._regime_tributario,
      recuperacao_tributaria: "Não",
    });
    if (error) {
      console.error("Erro ao salvar no Supabase:", error);
      return Response.json(
        { error: "Falha ao salvar lead", details: error.message},
        {status:500}
      );
    }

    return Response.json ({ ok: true, destination: "supabase"});
  }

  // Se responder SIM vai pro Leads2b
  const token = process.env.LEADS2B_API_TOKEN;
  if (!token) {
    return Response.json(
      {error: "Token da API não configurado"},
      {status:500}
    );
  }
   const res = await fetch (
    "https://app.leads2b.com/api/v1/external_resources/create_lead",
    {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        Authorization: `Bearer ${token}`,
      },
      body:JSON.stringify(body),
    }
   );

   const text = await res.text();
   console.log ("Leads2B response:", res.status, text);

   let data;
   try{
    data = JSON.parse (text);
   } catch {
    data = {raw: text};
   }

   if (!res.ok) {
    return Response.json(data, {status:res.status});
   }

   return Response.json ({ ...data, destination: "leads2b"});
}