"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const inputClasses =
  "w-full px-[18px] py-3.5 bg-white/[0.06] border border-cyan/15 rounded-[10px] text-white font-[var(--font-dm)] text-[0.95rem] outline-none transition-all duration-300 placeholder:text-white/30 focus:border-cyan focus:bg-cyan/[0.06] focus:ring-[3px] focus:ring-cyan/10";

export default function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    taxRecovery: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success

  function formatPhone(value) {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 6)
      return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 10)
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "phone" ? formatPhone(value) : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          interest: "Diagnóstico Tributário Gratuito",
          pinned_note: true,
          custom_fields: {
            _recuperacao_tributaria: form.taxRecovery,
          },
        }),
      });

      const data = await res.json().catch(() => ({}));
      console.log("Resposta:", res.status, data);
    } catch (err) {
      console.error("Erro ao enviar lead:", err);
    }

    setStatus("success");
    setForm({
      name: "",
      company: "",
      email: "",
      phone: "",
      taxRecovery: "",
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      className="flex-1 max-w-[480px] w-full"
    >
      <div className="relative bg-white/[0.04] border border-cyan/15 rounded-[20px] p-11 max-md:p-8 backdrop-blur-[30px] overflow-hidden">
        <div className="form-accent-line" />

        <h2 className="font-[var(--font-jakarta)] text-[1.35rem] font-bold tracking-tight mb-8">
        Preencha os dados e descubra quanto sua empresa pode economizar.
        </h2>

        {status === "success" ? (
          <div className="text-center py-10">
            <p className="text-cyan text-[1.2rem] font-bold mb-2">
              Dados enviados com sucesso!
            </p>
            <p className="text-white/50 text-[0.9rem]">
              Em breve nossa equipe entrará em contato.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 text-cyan/70 underline text-[0.85rem] hover:text-cyan transition-colors"
            >
              Enviar outro diagnóstico
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-[0.78rem] font-semibold uppercase tracking-[1px] text-white/55 mb-2">
                Nome completo
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Como podemos te chamar?"
                required
                className={inputClasses}
              />
            </div>

            <div>
              <label className="block text-[0.78rem] font-semibold uppercase tracking-[1px] text-white/55 mb-2">
                Empresa
              </label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Nome da sua empresa"
                required
                className={inputClasses}
              />
            </div>

            <div>
              <label className="block text-[0.78rem] font-semibold uppercase tracking-[1px] text-white/55 mb-2">
                E-mail corporativo
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="seu@empresa.com.br"
                required
                className={inputClasses}
              />
            </div>

            <div>
              <label className="block text-[0.78rem] font-semibold uppercase tracking-[1px] text-white/55 mb-2">
                Telefone / WhatsApp
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
                maxLength={15}
                required
                className={inputClasses}
              />
            </div>

            <div>
              <label className="block text-[0.78rem] font-semibold uppercase tracking-[1px] text-white/55 mb-2">
                Você faz recuperação tributária?
              </label>
              <div className="flex gap-3">
                {["Sim", "Não"].map((option) => {
                  const checked = form.taxRecovery === option;
                  return (
                    <label
                      key={option}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-[10px] border cursor-pointer transition-all duration-300 ${
                        checked
                          ? "border-cyan bg-cyan/[0.12] text-white"
                          : "border-cyan/15 bg-white/[0.06] text-white/70 hover:border-cyan/40"
                      }`}
                    >
                      <input
                        type="radio"
                        name="taxRecovery"
                        value={option}
                        checked={checked}
                        onChange={handleChange}
                        required
                        className="sr-only"
                      />
                      <span className="text-[0.95rem] font-medium">
                        {option}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-shimmer w-full py-4 mt-2 bg-cyan text-navy font-[var(--font-jakarta)] font-bold text-[0.95rem] tracking-wide border-none rounded-[10px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(53,185,215,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading"
                ? "Enviando..."
                : "Quero economizar →"}
            </button>
          </form>
        )}

        <p className="text-center text-[0.72rem] text-white/30 mt-4 leading-relaxed">
          Seus dados estão protegidos. Não compartilhamos informações com
          terceiros.
        </p>
      </div>
    </motion.div>
  );
}
