import d1 from "@/assets/distritos/distrito-1.jpg.asset.json";
import d2 from "@/assets/distritos/distrito-2.jpg.asset.json";
import d3 from "@/assets/distritos/distrito-3.jpg.asset.json";
import d4 from "@/assets/distritos/distrito-4.jpg.asset.json";
import d5 from "@/assets/distritos/distrito-5.jpg.asset.json";
import d6 from "@/assets/distritos/distrito-6.jpg.asset.json";
import d7 from "@/assets/distritos/distrito-7.jpg.asset.json";
import d8 from "@/assets/distritos/distrito-8.jpg.asset.json";
import d9 from "@/assets/distritos/distrito-9.jpg.asset.json";
import d10 from "@/assets/distritos/distrito-10.jpg.asset.json";
import d11 from "@/assets/distritos/distrito-11.jpg.asset.json";
import d12 from "@/assets/distritos/distrito-12.jpg.asset.json";
import d13 from "@/assets/distritos/distrito-13.jpg.asset.json";
import d14 from "@/assets/distritos/distrito-14.jpg.asset.json";
import d15 from "@/assets/distritos/distrito-15.jpg.asset.json";

export type Distrito = {
  numero: number;
  nombre: string;
  plano: string;
};

const planos = [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15];

export const DISTRITOS: Distrito[] = planos.map((asset, i) => ({
  numero: i + 1,
  nombre: `Distrito Municipal ${i + 1}`,
  plano: asset.url,
}));
