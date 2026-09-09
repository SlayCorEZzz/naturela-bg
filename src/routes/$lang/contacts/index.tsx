import { createFileRoute, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

import { PageHero } from "../../../components/site/PageHero";
import { productBySlug } from "../../../data/catalog";
import { contact, mapEmbed } from "../../../data/site";
import { isLang, translator, type Lang } from "../../../lib/i18n";
import { seo } from "../../../lib/seo";

/** The old product pages linked here as /contacts/?url=<product-slug>. */
interface ContactSearch {
  url?: string | undefined;
}

export const Route = createFileRoute("/$lang/contacts/")({
  validateSearch: (search: Record<string, unknown>): ContactSearch => ({
    url: typeof search["url"] === "string" && search["url"] ? search["url"] : undefined,
  }),
  beforeLoad: ({ params }) => {
    if (!isLang(params.lang)) throw notFound();
  },
  head: ({ params }) => {
    const lang = (params.lang === "en" ? "en" : "bg") as Lang;
    return seo({
      lang,
      title: lang === "bg" ? "Контакти | Натурела" : "Contacts | Naturela",
      description:
        lang === "bg"
          ? "Натурела, гр. Варна — телефон 052 504-506, office@naturela-bg.com. Запитвания, оферти и техническа консултация."
          : "Naturela, Varna, Bulgaria — phone +359 52 504 506, office@naturela-bg.com. Inquiries, quotes and technical advice.",
      path: `/${lang}/contacts/`,
      altPath: `/${lang === "bg" ? "en" : "bg"}/contacts/`,
    });
  },
  component: ContactsPage,
});

function ContactsPage() {
  const { lang: rawLang } = Route.useParams();
  const lang = rawLang as Lang;
  const tr = translator(lang);
  const { url } = Route.useSearch();
  const product = url ? productBySlug(url) : undefined;

  return (
    <>
      <PageHero
        lang={lang}
        eyebrow={tr("nav.contacts")}
        title={tr("contacts.title")}
        lead={tr("contacts.lead")}
        crumbs={[{ label: tr("contacts.title") }]}
      />

      <section className="shell grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        <div className="space-y-6">
          <InfoCard icon={<MapPin className="size-5" aria-hidden />} title={tr("contacts.address")}>
            <p className="leading-relaxed">
              {contact.city[lang]}
              <br />
              {contact.street[lang]}
            </p>
          </InfoCard>

          <InfoCard icon={<Phone className="size-5" aria-hidden />} title={tr("contacts.phones")}>
            <ul className="space-y-1.5">
              {contact.phones.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="font-semibold transition-colors hover:text-brand">
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </InfoCard>

          <InfoCard icon={<Mail className="size-5" aria-hidden />} title={tr("contacts.mail")}>
            <a
              href={`mailto:${contact.email}`}
              className="break-all font-semibold transition-colors hover:text-brand"
            >
              {contact.email}
            </a>
          </InfoCard>

          <div className="overflow-hidden rounded-3xl border border-border">
            <iframe
              src={mapEmbed}
              title={tr("contacts.map")}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full border-0 sm:h-80"
            />
          </div>
        </div>

        <InquiryForm lang={lang} subject={product ? product.title[lang] : ""} />
      </section>
    </>
  );
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border p-5">
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-muted text-brand">
        {icon}
      </span>
      <div className="min-w-0">
        <h2 className="text-[0.72rem] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
          {title}
        </h2>
        <div className="mt-1.5 text-[0.95rem] text-foreground">{children}</div>
      </div>
    </div>
  );
}

function InquiryForm({ lang, subject }: { lang: Lang; subject: string }) {
  const tr = translator(lang);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject,
    message: "",
  });
  const [error, setError] = useState("");

  const field = (key: keyof typeof form) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value })),
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError(tr("contacts.required"));
      return;
    }
    setError("");
    const subjectLine = form.subject
      ? `${tr("contacts.about")}: ${form.subject}`
      : tr("contacts.form");
    const body = [
      `${tr("contacts.name")}: ${form.name}`,
      `${tr("contacts.email")}: ${form.email}`,
      form.phone ? `${tr("contacts.phone")}: ${form.phone}` : null,
      form.subject ? `${tr("contacts.subject")}: ${form.subject}` : null,
      "",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subjectLine,
    )}&body=${encodeURIComponent(body)}`;
  };

  const inputCls =
    "w-full rounded-xl border border-border bg-card px-4 py-3 text-[0.95rem] outline-none transition-colors placeholder:text-muted-foreground focus:border-brand";

  return (
    <form onSubmit={submit} className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="title-lg !text-2xl">{tr("contacts.form")}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{tr("contacts.mailtoNote")}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label={`${tr("contacts.name")} *`}>
          <input {...field("name")} required className={inputCls} autoComplete="name" />
        </Field>
        <Field label={`${tr("contacts.email")} *`}>
          <input
            {...field("email")}
            required
            type="email"
            className={inputCls}
            autoComplete="email"
          />
        </Field>
        <Field label={tr("contacts.phone")}>
          <input {...field("phone")} type="tel" className={inputCls} autoComplete="tel" />
        </Field>
        <Field label={tr("contacts.subject")}>
          <input {...field("subject")} className={inputCls} />
        </Field>
        <div className="sm:col-span-2">
          <Field label={`${tr("contacts.message")} *`}>
            <textarea {...field("message")} required rows={6} className={inputCls} />
          </Field>
        </div>
      </div>

      {error && <p className="mt-4 text-sm font-semibold text-destructive">{error}</p>}

      <button type="submit" className="btn-primary mt-6 w-full !py-3.5 sm:w-auto">
        <Send className="size-4" aria-hidden />
        {tr("contacts.send")}
      </button>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[0.78rem] font-bold text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
