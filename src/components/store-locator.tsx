"use client";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Search,
} from "lucide-react";
import { stores } from "@/lib/stores";
import { photos } from "@/lib/photos";

const states = [...new Set(stores.map((store) => store.state))];
const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

export function StoreLocator() {
  const [state, setState] = useState("");
  const [query, setQuery] = useState("");
  const [selectedName, setSelectedName] = useState(stores[0].name);
  const results = stores.filter(
    (store) =>
      (!state || store.state === state) &&
      normalize(`${store.name} ${store.address} ${store.uf}`).includes(normalize(query.trim())),
  );
  const selected = results.find((store) => store.name === selectedName) ?? results[0];

  return (
    <>
      <section className="grid lg:min-h-[760px] lg:grid-cols-[.85fr_1.6fr]">
        <div className="relative isolate overflow-hidden bg-foreground px-6 py-12 text-background sm:px-10 lg:px-12 lg:py-16 xl:pl-16">
          <Image
            src={photos.storeLocator.background}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 35vw, 100vw"
            className="-z-20 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-foreground/85" />
          <p className="mb-6 flex items-center gap-3 text-xs font-extrabold uppercase tracking-widest">
            <span className="h-1 w-8 bg-primary" /> Sempre tem um encontro
          </p>
          <h1 className="max-w-md font-display text-5xl uppercase leading-[1.05] sm:text-6xl xl:text-7xl">
            Seu próximo
            <br />
            <span className="text-primary">destino tem sabor.</span>
          </h1>
          <p className="mt-6 max-w-sm text-sm leading-7 text-background/70">
            Encontre uma loja, escolha o caminho e venha viver o seu momento Nacho Man.
          </p>
          <div className="mt-9 grid gap-5">
            <Label className="grid gap-2">
              Estado
              <Select
                value={state || "all"}
                onValueChange={(value) => setState(value === "all" ? "" : value)}
              >
                <SelectTrigger aria-label="Estado">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os estados</SelectItem>
                  {states.map((name) => (
                    <SelectItem key={name} value={name}>
                      {name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Label>
            <Label className="grid gap-2">
              Cidade ou bairro
              <span className="relative">
                <Search
                  aria-hidden="true"
                  className="absolute left-4 top-4 size-4 text-muted-foreground"
                />
                <Input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Onde você quer comer?"
                  className="pl-11"
                />
              </span>
            </Label>
          </div>
          <div className="mt-10 border-t border-background/20 pt-6">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-background/50">
              Precisa de uma mão?
            </p>
            <a
              href="mailto:franquias@nachomanbrasil.com.br"
              className="flex items-center gap-3 text-xs hover:text-primary"
            >
              <Mail className="size-4 shrink-0 text-primary" />
              <span className="break-all">franquias@nachomanbrasil.com.br</span>
            </a>
            <a
              href="https://wa.me/5535997405132"
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center gap-3 text-sm hover:text-primary"
            >
              <MessageCircle className="size-4 text-primary" />
              (35) 9 9740-5132 <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>

        <div className="min-w-0 bg-muted p-5 sm:p-8 lg:p-10">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Encontrar loja
              </p>
              <h2 className="mt-2 font-heading text-3xl font-extrabold uppercase">
                A gente te espera aqui.
              </h2>
            </div>
            <span
              aria-live="polite"
              className="shrink-0 rounded-full bg-background px-3 py-2 text-xs font-bold"
            >
              {results.length} {results.length === 1 ? "loja" : "lojas"}
            </span>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-background">
            {selected ? (
              <>
                <iframe
                  key={selected.name}
                  title={`Mapa da unidade Nacho Man ${selected.name}`}
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${selected.mapBounds}&layer=mapnik&marker=${selected.coordinates.lat},${selected.coordinates.lon}`}
                  className="h-[300px] w-full border-0 sm:h-[340px]"
                  loading="lazy"
                />
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-5 py-4">
                  <p className="flex items-center gap-2 text-sm font-bold">
                    <MapPin className="size-4 text-accent" />
                    {selected.name} · {selected.uf}
                  </p>
                  <a
                    href={selected.maps}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold hover:text-accent"
                  >
                    Abrir rota <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </>
            ) : (
              <div className="grid min-h-[300px] place-content-center px-6 text-center">
                <MapPin className="mx-auto mb-4 size-9 text-accent" />
                <h3 className="font-heading text-3xl font-extrabold uppercase">
                  Ainda não encontramos por aqui.
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Tente outra cidade ou veja todas as unidades.
                </p>
                <Button
                  type="button"
                  variant="ink"
                  onClick={() => {
                    setQuery("");
                    setState("");
                  }}
                  size="pill"
                  className="mx-auto mt-6"
                >
                  Ver todas as lojas
                </Button>
              </div>
            )}
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2" aria-label="Unidades encontradas">
            {results.map((store) => (
              <article
                key={store.name}
                className={`flex flex-col rounded-2xl border p-5 transition-colors ${selected?.name === store.name ? "border-foreground bg-background" : "border-border bg-card"}`}
              >
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    {store.state}
                  </span>
                  {selected?.name === store.name && (
                    <span className="rounded-full bg-primary px-2 py-1 text-[10px] font-bold uppercase">
                      No mapa
                    </span>
                  )}
                </div>
                <h3 className="font-heading text-3xl font-extrabold uppercase">{store.name}</h3>
                <p className="mt-3 text-xs leading-6 text-muted-foreground">{store.address}</p>
                <p className="mt-3 flex items-start gap-2 text-xs leading-5 text-muted-foreground">
                  <Clock3 className="mt-0.5 size-4 shrink-0" />
                  {store.hours}
                </p>
                <a
                  href={`tel:+55${store.phone.replace(/\D/g, "")}`}
                  className="mt-3 w-fit text-sm font-semibold hover:text-accent"
                >
                  {store.phone}
                </a>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5">
                  <Button
                    type="button"
                    variant="ink"
                    aria-pressed={selected?.name === store.name}
                    onClick={() => setSelectedName(store.name)}
                    className="h-11 px-4 text-xs font-bold"
                  >
                    Ver no mapa<span className="sr-only">: {store.name}</span>
                  </Button>
                  <a
                    href={store.maps}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Traçar rota para ${store.name}`}
                    className="flex items-center gap-2 text-xs font-bold hover:text-accent"
                  >
                    <Navigation className="size-4" />
                    Traçar rota
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
